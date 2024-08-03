package iam

import (
	"context"
	_ "embed"

	lru "github.com/hashicorp/golang-lru/v2"
	"github.com/pkg/errors"

	"github.com/bytebase/bytebase/backend/common"
	enterprise "github.com/bytebase/bytebase/backend/enterprise/api"
	api "github.com/bytebase/bytebase/backend/legacyapi"
	"github.com/bytebase/bytebase/backend/store"
	"github.com/bytebase/bytebase/backend/utils"
)

//go:embed acl.yaml
var aclYaml []byte

type acl struct {
	Roles []struct {
		Name        string   `yaml:"name"`
		Title       string   `yaml:"title"`
		Permissions []string `yaml:"permissions"`
	} `yaml:"roles"`
}

type Manager struct {
	rolePermissions map[string]map[Permission]bool
	PredefinedRoles []*store.RoleMessage
	store           *store.Store
	licenseService  enterprise.LicenseService
	// user uid: workspace role list
	userRoleCache *lru.Cache[int, []string]
}

func NewManager(store *store.Store, licenseService enterprise.LicenseService) (*Manager, error) {
	userRoleCache, err := lru.New[int, []string](32768)
	if err != nil {
		return nil, err
	}
	predefinedRoles, err := loadPredefinedRoles()
	if err != nil {
		return nil, err
	}

	m := &Manager{
		PredefinedRoles: predefinedRoles,
		store:           store,
		licenseService:  licenseService,
		userRoleCache:   userRoleCache,
	}
	return m, nil
}

// Check if the user or `allUsers` or the user group has the permission p
// or has the permission p in every project.
func (m *Manager) CheckPermission(ctx context.Context, p Permission, user *store.UserMessage, projectIDs ...string) (bool, error) {
	if m.licenseService.IsFeatureEnabled(api.FeatureRBAC) != nil {
		// nolint
		return true, nil
	}

	ok, err := m.doCheckPermission(ctx, p, user, projectIDs...)
	if err != nil {
		return false, errors.Wrapf(err, "failed to check permission")
	}
	if ok {
		return true, nil
	}
	allUsers, err := m.store.GetUserByID(ctx, api.AllUsersID)
	if err != nil {
		return false, errors.Wrapf(err, "failed to get allUsers")
	}
	return m.doCheckPermission(ctx, p, allUsers, projectIDs...)
}

func (m *Manager) ReloadCache(ctx context.Context) error {
	m.userRoleCache.Purge()
	roles, err := m.store.ListRoles(ctx)
	if err != nil {
		return err
	}
	roles = append(roles, m.PredefinedRoles...)

	rolePermissions := make(map[string]map[Permission]bool)
	for _, role := range roles {
		rolePermissions[role.ResourceID] = role.Permissions
	}
	m.rolePermissions = rolePermissions
	return nil
}

func (m *Manager) doCheckPermission(ctx context.Context, p Permission, user *store.UserMessage, projectIDs ...string) (bool, error) {
	workspaceRoles, err := m.getWorkspaceRoles(ctx, user)
	if err != nil {
		return false, errors.Wrapf(err, "failed to get workspace roles")
	}
	projectRoles, err := m.getProjectRoles(ctx, user, projectIDs)
	if err != nil {
		return false, errors.Wrapf(err, "failed to get project roles")
	}
	return m.hasPermission(p, workspaceRoles, projectRoles)
}

// GetPermissions returns all permissions for the given role.
// Role format is roles/{role}.
func (m *Manager) GetPermissions(roleName string) (map[Permission]bool, error) {
	roleID, err := common.GetRoleID(roleName)
	if err != nil {
		return nil, errors.Wrapf(err, "failed to get role id from %q", roleName)
	}
	permissions, ok := m.rolePermissions[roleID]
	if !ok {
		return nil, nil
	}
	return permissions, nil
}

func (m *Manager) hasPermission(p Permission, workspaceRoles []string, projectRoles [][]string) (bool, error) {
	ok, err := m.hasPermissionOnWorkspace(p, workspaceRoles)
	if err != nil {
		return false, errors.Wrapf(err, "failed to check permission on workspace")
	}
	if ok {
		return true, nil
	}
	ok, err = m.hasPermissionOnEveryProject(p, projectRoles)
	if err != nil {
		return false, errors.Wrapf(err, "failed to check permission on every project")
	}
	return ok, nil
}

func (m *Manager) hasPermissionOnWorkspace(p Permission, workspaceRoles []string) (bool, error) {
	for _, role := range workspaceRoles {
		permissions, err := m.GetPermissions(role)
		if err != nil {
			return false, errors.Wrapf(err, "failed to get permissions")
		}
		if permissions[p] {
			return true, nil
		}
	}
	return false, nil
}

func (m *Manager) hasPermissionOnEveryProject(p Permission, projectRoles [][]string) (bool, error) {
	if len(projectRoles) == 0 {
		return false, nil
	}
	for _, projectRole := range projectRoles {
		has := false
		for _, role := range projectRole {
			permissions, err := m.GetPermissions(role)
			if err != nil {
				return false, errors.Wrapf(err, "failed to get permissions")
			}
			if permissions[p] {
				has = true
				break
			}
		}
		if !has {
			return false, nil
		}
	}
	return true, nil
}

// getWorkspaceRoles returns roles for the user in the workspace IAM policy.
func (m *Manager) getWorkspaceRoles(ctx context.Context, user *store.UserMessage) ([]string, error) {
	if v, ok := m.userRoleCache.Get(user.ID); ok {
		return v, nil
	}
	policyMessage, err := m.store.GetWorkspaceIamPolicy(ctx)
	if err != nil {
		return nil, err
	}
	roles := utils.GetUserRolesInIamPolicy(ctx, m.store, user, policyMessage.Policy)
	m.userRoleCache.Add(user.ID, roles)

	return roles, nil
}

func (m *Manager) getProjectRoles(ctx context.Context, user *store.UserMessage, projectIDs []string) ([][]string, error) {
	var roles [][]string
	for _, projectID := range projectIDs {
		project, err := m.store.GetProjectV2(ctx, &store.FindProjectMessage{
			ResourceID: &projectID,
		})
		if err != nil {
			return nil, err
		}
		if project == nil {
			return nil, errors.Errorf("cannot found project %s", projectID)
		}

		policyMessage, err := m.store.GetProjectIamPolicy(ctx, project.UID)
		if err != nil {
			return nil, errors.Wrapf(err, "failed to get iam policy for project %q", projectID)
		}

		projectRoles := utils.GetUserRolesInIamPolicy(ctx, m.store, user, policyMessage.Policy)
		roles = append(roles, projectRoles)
	}
	return roles, nil
}
