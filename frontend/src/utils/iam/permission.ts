import { usePermissionStore, useProjectV1List } from "@/store";
import type { ComposedProject, ComposedUser, Permission } from "@/types";

export const hasWorkspacePermissionV2 = (
  user: ComposedUser,
  permission: Permission
): boolean => {
  const permissions =
    usePermissionStore().workspaceLevelPermissionsByUser(user);
  return permissions.has(permission);
};

// hasProjectPermissionV2 checks if the user has the given permission on the project.
export const hasProjectPermissionV2 = (
  project: ComposedProject | undefined,
  user: ComposedUser,
  permission: Permission
): boolean => {
  const permissionStore = usePermissionStore();

  // If the project is not provided, then check if the user has the given permission on any project in the workspace.
  if (!project) {
    const { projectList } = useProjectV1List();
    return projectList.value.some((project) =>
      hasProjectPermissionV2(project, user, permission)
    );
  }

  // Check workspace-level permissions first.
  // For those users who have workspace-level project roles, they should have all project-level permissions.
  const workspaceLevelPermissions =
    permissionStore.workspaceLevelPermissionsByUser(user);
  if (workspaceLevelPermissions.has(permission)) {
    return true;
  }

  // Check project-level permissions.
  const permissions = permissionStore.permissionsInProjectV1(project, user);
  return permissions.has(permission);
};

// hasWorkspaceLevelProjectPermission checks if the user has the given permission on workspace-level-assigned project roles
export const hasWorkspaceLevelProjectPermission = (
  user: ComposedUser,
  permission: Permission
): boolean => {
  const permissions =
    usePermissionStore().workspaceLevelPermissionsByUser(user);
  return permissions.has(permission);
};

// hasWorkspaceLevelProjectPermission checks if the user has the given permission on ANY project in the workspace.
export const hasWorkspaceLevelProjectPermissionInAnyProject = (
  user: ComposedUser,
  permission: Permission
): boolean => {
  const { projectList } = useProjectV1List();
  return projectList.value.some((project) =>
    hasProjectPermissionV2(project, user, permission)
  );
};
