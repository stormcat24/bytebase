// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.0
// 	protoc        (unknown)
// source: v1/vcs_connector_service.proto

package v1

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	fieldmaskpb "google.golang.org/protobuf/types/known/fieldmaskpb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateVCSConnectorRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The parent resource where this vcsConnector will be created.
	// Format: projects/{project}
	Parent string `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	// The vcsConnector to create.
	VcsConnector *VCSConnector `protobuf:"bytes,2,opt,name=vcs_connector,json=vcsConnector,proto3" json:"vcs_connector,omitempty"`
	// The ID to use for the vcsConnector, which will become the final component of
	// the vcsConnector's resource name.
	//
	// This value should be 4-63 characters, and valid characters
	// are /[a-z][0-9]-/.
	VcsConnectorId string `protobuf:"bytes,3,opt,name=vcs_connector_id,json=vcsConnectorId,proto3" json:"vcs_connector_id,omitempty"`
}

func (x *CreateVCSConnectorRequest) Reset() {
	*x = CreateVCSConnectorRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_vcs_connector_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateVCSConnectorRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateVCSConnectorRequest) ProtoMessage() {}

func (x *CreateVCSConnectorRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_vcs_connector_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateVCSConnectorRequest.ProtoReflect.Descriptor instead.
func (*CreateVCSConnectorRequest) Descriptor() ([]byte, []int) {
	return file_v1_vcs_connector_service_proto_rawDescGZIP(), []int{0}
}

func (x *CreateVCSConnectorRequest) GetParent() string {
	if x != nil {
		return x.Parent
	}
	return ""
}

func (x *CreateVCSConnectorRequest) GetVcsConnector() *VCSConnector {
	if x != nil {
		return x.VcsConnector
	}
	return nil
}

func (x *CreateVCSConnectorRequest) GetVcsConnectorId() string {
	if x != nil {
		return x.VcsConnectorId
	}
	return ""
}

type GetVCSConnectorRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the vcsConnector to retrieve.
	// Format: projects/{project}/vcsConnectors/{vcsConnector}
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetVCSConnectorRequest) Reset() {
	*x = GetVCSConnectorRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_vcs_connector_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetVCSConnectorRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetVCSConnectorRequest) ProtoMessage() {}

func (x *GetVCSConnectorRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_vcs_connector_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetVCSConnectorRequest.ProtoReflect.Descriptor instead.
func (*GetVCSConnectorRequest) Descriptor() ([]byte, []int) {
	return file_v1_vcs_connector_service_proto_rawDescGZIP(), []int{1}
}

func (x *GetVCSConnectorRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ListVCSConnectorsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The parent, which owns this collection of vcsConnectors.
	// Format: projects/{project}
	// Use "projects/-" to list all vcsConnectors.
	Parent string `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	// The maximum number of databases to return. The service may return fewer than
	// this value.
	// If unspecified, at most 50 databases will be returned.
	// The maximum value is 1000; values above 1000 will be coerced to 1000.
	PageSize int32 `protobuf:"varint,2,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty"`
	// A page token, received from a previous `ListDatabases` call.
	// Provide this to retrieve the subsequent page.
	//
	// When paginating, all other parameters provided to `ListDatabases` must match
	// the call that provided the page token.
	PageToken string `protobuf:"bytes,3,opt,name=page_token,json=pageToken,proto3" json:"page_token,omitempty"`
}

func (x *ListVCSConnectorsRequest) Reset() {
	*x = ListVCSConnectorsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_vcs_connector_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListVCSConnectorsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListVCSConnectorsRequest) ProtoMessage() {}

func (x *ListVCSConnectorsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_vcs_connector_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListVCSConnectorsRequest.ProtoReflect.Descriptor instead.
func (*ListVCSConnectorsRequest) Descriptor() ([]byte, []int) {
	return file_v1_vcs_connector_service_proto_rawDescGZIP(), []int{2}
}

func (x *ListVCSConnectorsRequest) GetParent() string {
	if x != nil {
		return x.Parent
	}
	return ""
}

func (x *ListVCSConnectorsRequest) GetPageSize() int32 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *ListVCSConnectorsRequest) GetPageToken() string {
	if x != nil {
		return x.PageToken
	}
	return ""
}

type ListVCSConnectorsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The vcsConnectors from the specified request.
	VcsConnectors []*VCSConnector `protobuf:"bytes,1,rep,name=vcs_connectors,json=vcsConnectors,proto3" json:"vcs_connectors,omitempty"`
	// A token, which can be sent as `page_token` to retrieve the next page.
	// If this field is omitted, there are no subsequent pages.
	NextPageToken string `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
}

func (x *ListVCSConnectorsResponse) Reset() {
	*x = ListVCSConnectorsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_vcs_connector_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListVCSConnectorsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListVCSConnectorsResponse) ProtoMessage() {}

func (x *ListVCSConnectorsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_vcs_connector_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListVCSConnectorsResponse.ProtoReflect.Descriptor instead.
func (*ListVCSConnectorsResponse) Descriptor() ([]byte, []int) {
	return file_v1_vcs_connector_service_proto_rawDescGZIP(), []int{3}
}

func (x *ListVCSConnectorsResponse) GetVcsConnectors() []*VCSConnector {
	if x != nil {
		return x.VcsConnectors
	}
	return nil
}

func (x *ListVCSConnectorsResponse) GetNextPageToken() string {
	if x != nil {
		return x.NextPageToken
	}
	return ""
}

type UpdateVCSConnectorRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The vcsConnector to update.
	//
	// The vcsConnector's `name` field is used to identify the vcsConnector to update.
	// Format: projects/{project}/vcsConnectors/{vcsConnector}
	VcsConnector *VCSConnector `protobuf:"bytes,1,opt,name=vcs_connector,json=vcsConnector,proto3" json:"vcs_connector,omitempty"`
	// The list of fields to be updated.
	UpdateMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
}

func (x *UpdateVCSConnectorRequest) Reset() {
	*x = UpdateVCSConnectorRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_vcs_connector_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateVCSConnectorRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateVCSConnectorRequest) ProtoMessage() {}

func (x *UpdateVCSConnectorRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_vcs_connector_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateVCSConnectorRequest.ProtoReflect.Descriptor instead.
func (*UpdateVCSConnectorRequest) Descriptor() ([]byte, []int) {
	return file_v1_vcs_connector_service_proto_rawDescGZIP(), []int{4}
}

func (x *UpdateVCSConnectorRequest) GetVcsConnector() *VCSConnector {
	if x != nil {
		return x.VcsConnector
	}
	return nil
}

func (x *UpdateVCSConnectorRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

type DeleteVCSConnectorRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the vcsConnector to delete.
	// Format: projects/{project}/vcsConnectors/{vcsConnector}
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DeleteVCSConnectorRequest) Reset() {
	*x = DeleteVCSConnectorRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_vcs_connector_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteVCSConnectorRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteVCSConnectorRequest) ProtoMessage() {}

func (x *DeleteVCSConnectorRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_vcs_connector_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteVCSConnectorRequest.ProtoReflect.Descriptor instead.
func (*DeleteVCSConnectorRequest) Descriptor() ([]byte, []int) {
	return file_v1_vcs_connector_service_proto_rawDescGZIP(), []int{5}
}

func (x *DeleteVCSConnectorRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type VCSConnector struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the vcsConnector resource.
	// Canonical parent is project.
	// Format: projects/{project}/vcsConnectors/{vcsConnector}
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The title of the vcs connector.
	Title string `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	// The creator of the vcsConnector.
	// Format: users/{email}
	Creator string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
	// The updater of the vcsConnector.
	// Format: users/{email}
	Updater string `protobuf:"bytes,4,opt,name=updater,proto3" json:"updater,omitempty"`
	// The create time of the vcsConnector.
	CreateTime *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	// The last update time of the vcsConnector.
	UpdateTime *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=update_time,json=updateTime,proto3" json:"update_time,omitempty"`
	// The name of the VCS.
	// Format: vcsProviders/{vcsProvider}
	VcsProvider string `protobuf:"bytes,7,opt,name=vcs_provider,json=vcsProvider,proto3" json:"vcs_provider,omitempty"`
	// The reposition external id in target VCS.
	ExternalId string `protobuf:"bytes,8,opt,name=external_id,json=externalId,proto3" json:"external_id,omitempty"`
	// The root directory where Bytebase observes the file change. If empty, then it observes the entire repository.
	BaseDirectory string `protobuf:"bytes,9,opt,name=base_directory,json=baseDirectory,proto3" json:"base_directory,omitempty"`
	// The branch Bytebase listens to for changes. For example: main.
	Branch string `protobuf:"bytes,10,opt,name=branch,proto3" json:"branch,omitempty"`
	// TODO(d): move these to create VCS connector API.
	// The full_path of the repository. For example: bytebase/sample.
	FullPath string `protobuf:"bytes,12,opt,name=full_path,json=fullPath,proto3" json:"full_path,omitempty"`
	// The web url of the repository. For axample: https://gitlab.bytebase.com/bytebase/sample.
	WebUrl string `protobuf:"bytes,13,opt,name=web_url,json=webUrl,proto3" json:"web_url,omitempty"`
	// Apply changes to the database group. Optional, if not set, will apply changes to all databases in the project.
	// Format: projects/{project}/databaseGroups/{databaseGroup}
	DatabaseGroup string `protobuf:"bytes,14,opt,name=database_group,json=databaseGroup,proto3" json:"database_group,omitempty"`
}

func (x *VCSConnector) Reset() {
	*x = VCSConnector{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_vcs_connector_service_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VCSConnector) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VCSConnector) ProtoMessage() {}

func (x *VCSConnector) ProtoReflect() protoreflect.Message {
	mi := &file_v1_vcs_connector_service_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VCSConnector.ProtoReflect.Descriptor instead.
func (*VCSConnector) Descriptor() ([]byte, []int) {
	return file_v1_vcs_connector_service_proto_rawDescGZIP(), []int{6}
}

func (x *VCSConnector) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *VCSConnector) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *VCSConnector) GetCreator() string {
	if x != nil {
		return x.Creator
	}
	return ""
}

func (x *VCSConnector) GetUpdater() string {
	if x != nil {
		return x.Updater
	}
	return ""
}

func (x *VCSConnector) GetCreateTime() *timestamppb.Timestamp {
	if x != nil {
		return x.CreateTime
	}
	return nil
}

func (x *VCSConnector) GetUpdateTime() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdateTime
	}
	return nil
}

func (x *VCSConnector) GetVcsProvider() string {
	if x != nil {
		return x.VcsProvider
	}
	return ""
}

func (x *VCSConnector) GetExternalId() string {
	if x != nil {
		return x.ExternalId
	}
	return ""
}

func (x *VCSConnector) GetBaseDirectory() string {
	if x != nil {
		return x.BaseDirectory
	}
	return ""
}

func (x *VCSConnector) GetBranch() string {
	if x != nil {
		return x.Branch
	}
	return ""
}

func (x *VCSConnector) GetFullPath() string {
	if x != nil {
		return x.FullPath
	}
	return ""
}

func (x *VCSConnector) GetWebUrl() string {
	if x != nil {
		return x.WebUrl
	}
	return ""
}

func (x *VCSConnector) GetDatabaseGroup() string {
	if x != nil {
		return x.DatabaseGroup
	}
	return ""
}

var File_v1_vcs_connector_service_proto protoreflect.FileDescriptor

var file_v1_vcs_connector_service_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x76, 0x31, 0x2f, 0x76, 0x63, 0x73, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0b, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x72, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xaf, 0x01, 0x0a, 0x19, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e,
	0x74, 0x12, 0x44, 0x0a, 0x0d, 0x76, 0x63, 0x73, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x0c, 0x76, 0x63, 0x73, 0x43, 0x6f,
	0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x2e, 0x0a, 0x10, 0x76, 0x63, 0x73, 0x5f, 0x63,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x0e, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x6f, 0x72, 0x49, 0x64, 0x22, 0x32, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x56, 0x43,
	0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x18, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42,
	0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x74, 0x0a, 0x18, 0x4c,
	0x69, 0x73, 0x74, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e,
	0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x06, 0x70,
	0x61, 0x72, 0x65, 0x6e, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73, 0x69,
	0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x70, 0x61, 0x67, 0x65, 0x53, 0x69,
	0x7a, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x22, 0x85, 0x01, 0x0a, 0x19, 0x4c, 0x69, 0x73, 0x74, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x40, 0x0a, 0x0e, 0x76, 0x63, 0x73, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61,
	0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x52, 0x0d, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x73, 0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x6e, 0x65, 0x78, 0x74,
	0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x9e, 0x01, 0x0a, 0x19, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x44, 0x0a, 0x0d, 0x76, 0x63, 0x73, 0x5f, 0x63,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19,
	0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x43, 0x53,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52,
	0x0c, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x3b, 0x0a,
	0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d, 0x61, 0x73, 0x6b, 0x22, 0x35, 0x0a, 0x19, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x22, 0xe5, 0x03, 0x0a, 0x0c, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x12, 0x19, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x05, 0xe2, 0x41, 0x02, 0x02, 0x05, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a,
	0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69,
	0x74, 0x6c, 0x65, 0x12, 0x1e, 0x0a, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x03, 0x52, 0x07, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x6f, 0x72, 0x12, 0x1e, 0x0a, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x72, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x03, 0x52, 0x07, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x72, 0x12, 0x41, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69,
	0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x41, 0x0a, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x03, 0x52, 0x0a, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x76, 0x63, 0x73,
	0x5f, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x76, 0x63, 0x73, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b,
	0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x49, 0x64, 0x12, 0x25, 0x0a,
	0x0e, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x18,
	0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x62, 0x61, 0x73, 0x65, 0x44, 0x69, 0x72, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x79, 0x12, 0x16, 0x0a, 0x06, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x18, 0x0a,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x62, 0x72, 0x61, 0x6e, 0x63, 0x68, 0x12, 0x1b, 0x0a, 0x09,
	0x66, 0x75, 0x6c, 0x6c, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x66, 0x75, 0x6c, 0x6c, 0x50, 0x61, 0x74, 0x68, 0x12, 0x17, 0x0a, 0x07, 0x77, 0x65, 0x62,
	0x5f, 0x75, 0x72, 0x6c, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x77, 0x65, 0x62, 0x55,
	0x72, 0x6c, 0x12, 0x25, 0x0a, 0x0e, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x67,
	0x72, 0x6f, 0x75, 0x70, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x64, 0x61, 0x74, 0x61,
	0x62, 0x61, 0x73, 0x65, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x32, 0xb9, 0x06, 0x0a, 0x13, 0x56, 0x43,
	0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0xab, 0x01, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x43, 0x53, 0x43,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x26, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x43, 0x53,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x19, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x56,
	0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x22, 0x52, 0xda, 0x41, 0x13,
	0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x2c, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x36, 0x3a, 0x0d, 0x76, 0x63, 0x73, 0x5f, 0x63,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x22, 0x25, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x70,
	0x61, 0x72, 0x65, 0x6e, 0x74, 0x3d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x2a,
	0x7d, 0x2f, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x12,
	0x87, 0x01, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x12, 0x23, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x47, 0x65, 0x74, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f,
	0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x22, 0x34, 0xda, 0x41, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x27, 0x12, 0x25, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x3d, 0x70, 0x72,
	0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x2a, 0x2f, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x2f, 0x2a, 0x7d, 0x12, 0x9a, 0x01, 0x0a, 0x11, 0x4c, 0x69,
	0x73, 0x74, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x12,
	0x25, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x36,
	0xda, 0x41, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x27, 0x12,
	0x25, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x3d, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x2a, 0x7d, 0x2f, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x12, 0xbf, 0x01, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x26, 0x2e,
	0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65,
	0x2e, 0x76, 0x31, 0x2e, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x22, 0x66, 0xda, 0x41, 0x19, 0x76, 0x63, 0x73, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x2c, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x44, 0x3a, 0x0d, 0x76, 0x63, 0x73, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x32, 0x33, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x76, 0x63, 0x73, 0x5f, 0x63, 0x6f,
	0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x2e, 0x6e, 0x61, 0x6d, 0x65, 0x3d, 0x70, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x2a, 0x2f, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x65,
	0x63, 0x74, 0x6f, 0x72, 0x73, 0x2f, 0x2a, 0x7d, 0x12, 0x8a, 0x01, 0x0a, 0x12, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x12,
	0x26, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x56, 0x43, 0x53, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22,
	0x34, 0xda, 0x41, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x27, 0x2a, 0x25,
	0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x3d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x73, 0x2f, 0x2a, 0x2f, 0x76, 0x63, 0x73, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x6f,
	0x72, 0x73, 0x2f, 0x2a, 0x7d, 0x42, 0x11, 0x5a, 0x0f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x64, 0x2d, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_vcs_connector_service_proto_rawDescOnce sync.Once
	file_v1_vcs_connector_service_proto_rawDescData = file_v1_vcs_connector_service_proto_rawDesc
)

func file_v1_vcs_connector_service_proto_rawDescGZIP() []byte {
	file_v1_vcs_connector_service_proto_rawDescOnce.Do(func() {
		file_v1_vcs_connector_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_vcs_connector_service_proto_rawDescData)
	})
	return file_v1_vcs_connector_service_proto_rawDescData
}

var file_v1_vcs_connector_service_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_v1_vcs_connector_service_proto_goTypes = []interface{}{
	(*CreateVCSConnectorRequest)(nil), // 0: bytebase.v1.CreateVCSConnectorRequest
	(*GetVCSConnectorRequest)(nil),    // 1: bytebase.v1.GetVCSConnectorRequest
	(*ListVCSConnectorsRequest)(nil),  // 2: bytebase.v1.ListVCSConnectorsRequest
	(*ListVCSConnectorsResponse)(nil), // 3: bytebase.v1.ListVCSConnectorsResponse
	(*UpdateVCSConnectorRequest)(nil), // 4: bytebase.v1.UpdateVCSConnectorRequest
	(*DeleteVCSConnectorRequest)(nil), // 5: bytebase.v1.DeleteVCSConnectorRequest
	(*VCSConnector)(nil),              // 6: bytebase.v1.VCSConnector
	(*fieldmaskpb.FieldMask)(nil),     // 7: google.protobuf.FieldMask
	(*timestamppb.Timestamp)(nil),     // 8: google.protobuf.Timestamp
	(*emptypb.Empty)(nil),             // 9: google.protobuf.Empty
}
var file_v1_vcs_connector_service_proto_depIdxs = []int32{
	6,  // 0: bytebase.v1.CreateVCSConnectorRequest.vcs_connector:type_name -> bytebase.v1.VCSConnector
	6,  // 1: bytebase.v1.ListVCSConnectorsResponse.vcs_connectors:type_name -> bytebase.v1.VCSConnector
	6,  // 2: bytebase.v1.UpdateVCSConnectorRequest.vcs_connector:type_name -> bytebase.v1.VCSConnector
	7,  // 3: bytebase.v1.UpdateVCSConnectorRequest.update_mask:type_name -> google.protobuf.FieldMask
	8,  // 4: bytebase.v1.VCSConnector.create_time:type_name -> google.protobuf.Timestamp
	8,  // 5: bytebase.v1.VCSConnector.update_time:type_name -> google.protobuf.Timestamp
	0,  // 6: bytebase.v1.VCSConnectorService.CreateVCSConnector:input_type -> bytebase.v1.CreateVCSConnectorRequest
	1,  // 7: bytebase.v1.VCSConnectorService.GetVCSConnector:input_type -> bytebase.v1.GetVCSConnectorRequest
	2,  // 8: bytebase.v1.VCSConnectorService.ListVCSConnectors:input_type -> bytebase.v1.ListVCSConnectorsRequest
	4,  // 9: bytebase.v1.VCSConnectorService.UpdateVCSConnector:input_type -> bytebase.v1.UpdateVCSConnectorRequest
	5,  // 10: bytebase.v1.VCSConnectorService.DeleteVCSConnector:input_type -> bytebase.v1.DeleteVCSConnectorRequest
	6,  // 11: bytebase.v1.VCSConnectorService.CreateVCSConnector:output_type -> bytebase.v1.VCSConnector
	6,  // 12: bytebase.v1.VCSConnectorService.GetVCSConnector:output_type -> bytebase.v1.VCSConnector
	3,  // 13: bytebase.v1.VCSConnectorService.ListVCSConnectors:output_type -> bytebase.v1.ListVCSConnectorsResponse
	6,  // 14: bytebase.v1.VCSConnectorService.UpdateVCSConnector:output_type -> bytebase.v1.VCSConnector
	9,  // 15: bytebase.v1.VCSConnectorService.DeleteVCSConnector:output_type -> google.protobuf.Empty
	11, // [11:16] is the sub-list for method output_type
	6,  // [6:11] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_v1_vcs_connector_service_proto_init() }
func file_v1_vcs_connector_service_proto_init() {
	if File_v1_vcs_connector_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_v1_vcs_connector_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateVCSConnectorRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_vcs_connector_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetVCSConnectorRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_vcs_connector_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListVCSConnectorsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_vcs_connector_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListVCSConnectorsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_vcs_connector_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateVCSConnectorRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_vcs_connector_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteVCSConnectorRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_vcs_connector_service_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VCSConnector); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_vcs_connector_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_v1_vcs_connector_service_proto_goTypes,
		DependencyIndexes: file_v1_vcs_connector_service_proto_depIdxs,
		MessageInfos:      file_v1_vcs_connector_service_proto_msgTypes,
	}.Build()
	File_v1_vcs_connector_service_proto = out.File
	file_v1_vcs_connector_service_proto_rawDesc = nil
	file_v1_vcs_connector_service_proto_goTypes = nil
	file_v1_vcs_connector_service_proto_depIdxs = nil
}
