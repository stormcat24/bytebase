// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: v1/changelist_service.proto

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

type CreateChangelistRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The parent resource where this changelist will be created.
	// Format: projects/{project}
	Parent string `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	// The changelist to create.
	Changelist *Changelist `protobuf:"bytes,2,opt,name=changelist,proto3" json:"changelist,omitempty"`
	// The ID to use for the changelist, which will become the final component of
	// the changelist's resource name.
	//
	// This value should be 4-63 characters, and valid characters
	// are /[a-z][0-9]-/.
	ChangelistId string `protobuf:"bytes,3,opt,name=changelist_id,json=changelistId,proto3" json:"changelist_id,omitempty"`
}

func (x *CreateChangelistRequest) Reset() {
	*x = CreateChangelistRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateChangelistRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateChangelistRequest) ProtoMessage() {}

func (x *CreateChangelistRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateChangelistRequest.ProtoReflect.Descriptor instead.
func (*CreateChangelistRequest) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{0}
}

func (x *CreateChangelistRequest) GetParent() string {
	if x != nil {
		return x.Parent
	}
	return ""
}

func (x *CreateChangelistRequest) GetChangelist() *Changelist {
	if x != nil {
		return x.Changelist
	}
	return nil
}

func (x *CreateChangelistRequest) GetChangelistId() string {
	if x != nil {
		return x.ChangelistId
	}
	return ""
}

type GetChangelistRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the changelist to retrieve.
	// Format: projects/{project}/changelists/{changelist}
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetChangelistRequest) Reset() {
	*x = GetChangelistRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetChangelistRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetChangelistRequest) ProtoMessage() {}

func (x *GetChangelistRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetChangelistRequest.ProtoReflect.Descriptor instead.
func (*GetChangelistRequest) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{1}
}

func (x *GetChangelistRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ListChangelistsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The parent, which owns this collection of changelists.
	// Format: projects/{project}
	// Use "projects/-" to list all changelists.
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

func (x *ListChangelistsRequest) Reset() {
	*x = ListChangelistsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListChangelistsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListChangelistsRequest) ProtoMessage() {}

func (x *ListChangelistsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListChangelistsRequest.ProtoReflect.Descriptor instead.
func (*ListChangelistsRequest) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{2}
}

func (x *ListChangelistsRequest) GetParent() string {
	if x != nil {
		return x.Parent
	}
	return ""
}

func (x *ListChangelistsRequest) GetPageSize() int32 {
	if x != nil {
		return x.PageSize
	}
	return 0
}

func (x *ListChangelistsRequest) GetPageToken() string {
	if x != nil {
		return x.PageToken
	}
	return ""
}

type ListChangelistsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The changelists from the specified request.
	Changelists []*Changelist `protobuf:"bytes,1,rep,name=changelists,proto3" json:"changelists,omitempty"`
	// A token, which can be sent as `page_token` to retrieve the next page.
	// If this field is omitted, there are no subsequent pages.
	NextPageToken string `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
}

func (x *ListChangelistsResponse) Reset() {
	*x = ListChangelistsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListChangelistsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListChangelistsResponse) ProtoMessage() {}

func (x *ListChangelistsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListChangelistsResponse.ProtoReflect.Descriptor instead.
func (*ListChangelistsResponse) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{3}
}

func (x *ListChangelistsResponse) GetChangelists() []*Changelist {
	if x != nil {
		return x.Changelists
	}
	return nil
}

func (x *ListChangelistsResponse) GetNextPageToken() string {
	if x != nil {
		return x.NextPageToken
	}
	return ""
}

type UpdateChangelistRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The changelist to update.
	//
	// The changelist's `name` field is used to identify the changelist to update.
	// Format: projects/{project}/changelists/{changelist}
	Changelist *Changelist `protobuf:"bytes,1,opt,name=changelist,proto3" json:"changelist,omitempty"`
	// The list of fields to be updated.
	UpdateMask *fieldmaskpb.FieldMask `protobuf:"bytes,2,opt,name=update_mask,json=updateMask,proto3" json:"update_mask,omitempty"`
}

func (x *UpdateChangelistRequest) Reset() {
	*x = UpdateChangelistRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateChangelistRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateChangelistRequest) ProtoMessage() {}

func (x *UpdateChangelistRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateChangelistRequest.ProtoReflect.Descriptor instead.
func (*UpdateChangelistRequest) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{4}
}

func (x *UpdateChangelistRequest) GetChangelist() *Changelist {
	if x != nil {
		return x.Changelist
	}
	return nil
}

func (x *UpdateChangelistRequest) GetUpdateMask() *fieldmaskpb.FieldMask {
	if x != nil {
		return x.UpdateMask
	}
	return nil
}

type DeleteChangelistRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the changelist to delete.
	// Format: projects/{project}/changelists/{changelist}
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DeleteChangelistRequest) Reset() {
	*x = DeleteChangelistRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteChangelistRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteChangelistRequest) ProtoMessage() {}

func (x *DeleteChangelistRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteChangelistRequest.ProtoReflect.Descriptor instead.
func (*DeleteChangelistRequest) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{5}
}

func (x *DeleteChangelistRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type Changelist struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of the changelist resource.
	// Canonical parent is project.
	// Format: projects/{project}/changelists/{changelist}
	Name        string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	// The creator of the changelist.
	// Format: users/{email}
	Creator string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
	// The updater of the changelist.
	// Format: users/{email}
	Updater string `protobuf:"bytes,4,opt,name=updater,proto3" json:"updater,omitempty"`
	// The create time of the changelist.
	CreateTime *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	// The last update time of the changelist.
	UpdateTime *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=update_time,json=updateTime,proto3" json:"update_time,omitempty"`
	Changes    []*Changelist_Change   `protobuf:"bytes,7,rep,name=changes,proto3" json:"changes,omitempty"`
}

func (x *Changelist) Reset() {
	*x = Changelist{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Changelist) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Changelist) ProtoMessage() {}

func (x *Changelist) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Changelist.ProtoReflect.Descriptor instead.
func (*Changelist) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{6}
}

func (x *Changelist) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Changelist) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Changelist) GetCreator() string {
	if x != nil {
		return x.Creator
	}
	return ""
}

func (x *Changelist) GetUpdater() string {
	if x != nil {
		return x.Updater
	}
	return ""
}

func (x *Changelist) GetCreateTime() *timestamppb.Timestamp {
	if x != nil {
		return x.CreateTime
	}
	return nil
}

func (x *Changelist) GetUpdateTime() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdateTime
	}
	return nil
}

func (x *Changelist) GetChanges() []*Changelist_Change {
	if x != nil {
		return x.Changes
	}
	return nil
}

type Changelist_Change struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The name of a sheet.
	Sheet string `protobuf:"bytes,1,opt,name=sheet,proto3" json:"sheet,omitempty"`
	// The source of origin.
	// 1) change history: instances/{instance}/databases/{database}/changeHistories/{changeHistory}.
	// 2) branch: projects/{project}/branches/{branch}.
	// 3) raw SQL if empty.
	Source string `protobuf:"bytes,2,opt,name=source,proto3" json:"source,omitempty"`
	// The migration version for a change.
	Version string `protobuf:"bytes,3,opt,name=version,proto3" json:"version,omitempty"`
}

func (x *Changelist_Change) Reset() {
	*x = Changelist_Change{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_changelist_service_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Changelist_Change) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Changelist_Change) ProtoMessage() {}

func (x *Changelist_Change) ProtoReflect() protoreflect.Message {
	mi := &file_v1_changelist_service_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Changelist_Change.ProtoReflect.Descriptor instead.
func (*Changelist_Change) Descriptor() ([]byte, []int) {
	return file_v1_changelist_service_proto_rawDescGZIP(), []int{6, 0}
}

func (x *Changelist_Change) GetSheet() string {
	if x != nil {
		return x.Sheet
	}
	return ""
}

func (x *Changelist_Change) GetSource() string {
	if x != nil {
		return x.Source
	}
	return ""
}

func (x *Changelist_Change) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

var File_v1_changelist_service_proto protoreflect.FileDescriptor

var file_v1_changelist_service_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x76, 0x31, 0x2f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x62,
	0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69,
	0x65, 0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0xa1, 0x01, 0x0a, 0x17, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c,
	0x0a, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04,
	0xe2, 0x41, 0x01, 0x02, 0x52, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x12, 0x3d, 0x0a, 0x0a,
	0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52,
	0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x12, 0x29, 0x0a, 0x0d, 0x63,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x0c, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x6c, 0x69, 0x73, 0x74, 0x49, 0x64, 0x22, 0x30, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x43, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x18,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0xe2, 0x41,
	0x01, 0x02, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x72, 0x0a, 0x16, 0x4c, 0x69, 0x73, 0x74,
	0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x1c, 0x0a, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74,
	0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x08, 0x70, 0x61, 0x67, 0x65, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x1d, 0x0a,
	0x0a, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x70, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x7c, 0x0a, 0x17,
	0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x39, 0x0a, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x62,
	0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x6c, 0x69, 0x73, 0x74, 0x52, 0x0b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73,
	0x74, 0x73, 0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x6e, 0x65, 0x78,
	0x74, 0x50, 0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x95, 0x01, 0x0a, 0x17, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3d, 0x0a, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x6c, 0x69, 0x73, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x62, 0x79, 0x74,
	0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c,
	0x69, 0x73, 0x74, 0x42, 0x04, 0xe2, 0x41, 0x01, 0x02, 0x52, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x6c, 0x69, 0x73, 0x74, 0x12, 0x3b, 0x0a, 0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f,
	0x6d, 0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65,
	0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4d, 0x61,
	0x73, 0x6b, 0x22, 0x33, 0x0a, 0x17, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x18, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0xe2, 0x41, 0x01,
	0x02, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x9b, 0x03, 0x0a, 0x0a, 0x43, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x42, 0x05, 0xe2, 0x41, 0x02, 0x02, 0x05, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x1e, 0x0a, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x18, 0x03,
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
	0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x38, 0x0a, 0x07, 0x63, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x62, 0x79, 0x74,
	0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c,
	0x69, 0x73, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x73, 0x1a, 0x50, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x14, 0x0a,
	0x05, 0x73, 0x68, 0x65, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x73, 0x68,
	0x65, 0x65, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x76,
	0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65,
	0x72, 0x73, 0x69, 0x6f, 0x6e, 0x32, 0x82, 0x06, 0x0a, 0x11, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x6c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x9e, 0x01, 0x0a, 0x10,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74,
	0x12, 0x24, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x22,
	0x4b, 0xda, 0x41, 0x11, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x2c, 0x63, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x6c, 0x69, 0x73, 0x74, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x31, 0x3a, 0x0a, 0x63, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x22, 0x23, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x70, 0x61,
	0x72, 0x65, 0x6e, 0x74, 0x3d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x2a, 0x7d,
	0x2f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x12, 0x7f, 0x0a, 0x0d,
	0x47, 0x65, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x12, 0x21, 0x2e,
	0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x43,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x17, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x22, 0x32, 0xda, 0x41, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x25, 0x12, 0x23, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x6e,
	0x61, 0x6d, 0x65, 0x3d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x2a, 0x2f, 0x63,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x2f, 0x2a, 0x7d, 0x12, 0x92, 0x01,
	0x0a, 0x0f, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74,
	0x73, 0x12, 0x23, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c,
	0x69, 0x73, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x34, 0xda, 0x41,
	0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x25, 0x12, 0x23, 0x2f,
	0x76, 0x31, 0x2f, 0x7b, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x3d, 0x70, 0x72, 0x6f, 0x6a, 0x65,
	0x63, 0x74, 0x73, 0x2f, 0x2a, 0x7d, 0x2f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73,
	0x74, 0x73, 0x12, 0xae, 0x01, 0x0a, 0x10, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x12, 0x24, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61,
	0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x43, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e,
	0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x22, 0x5b, 0xda, 0x41, 0x16, 0x63, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x6c, 0x69, 0x73, 0x74, 0x2c, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x61, 0x73,
	0x6b, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x3c, 0x3a, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c,
	0x69, 0x73, 0x74, 0x32, 0x2e, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x6c, 0x69, 0x73, 0x74, 0x2e, 0x6e, 0x61, 0x6d, 0x65, 0x3d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x73, 0x2f, 0x2a, 0x2f, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x73,
	0x2f, 0x2a, 0x7d, 0x12, 0x84, 0x01, 0x0a, 0x10, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x43, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x12, 0x24, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x43, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x32, 0xda, 0x41, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x25, 0x2a, 0x23, 0x2f, 0x76, 0x31, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65,
	0x3d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x73, 0x2f, 0x2a, 0x2f, 0x63, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x6c, 0x69, 0x73, 0x74, 0x73, 0x2f, 0x2a, 0x7d, 0x42, 0x11, 0x5a, 0x0f, 0x67, 0x65,
	0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2d, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_changelist_service_proto_rawDescOnce sync.Once
	file_v1_changelist_service_proto_rawDescData = file_v1_changelist_service_proto_rawDesc
)

func file_v1_changelist_service_proto_rawDescGZIP() []byte {
	file_v1_changelist_service_proto_rawDescOnce.Do(func() {
		file_v1_changelist_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_changelist_service_proto_rawDescData)
	})
	return file_v1_changelist_service_proto_rawDescData
}

var file_v1_changelist_service_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_v1_changelist_service_proto_goTypes = []interface{}{
	(*CreateChangelistRequest)(nil), // 0: bytebase.v1.CreateChangelistRequest
	(*GetChangelistRequest)(nil),    // 1: bytebase.v1.GetChangelistRequest
	(*ListChangelistsRequest)(nil),  // 2: bytebase.v1.ListChangelistsRequest
	(*ListChangelistsResponse)(nil), // 3: bytebase.v1.ListChangelistsResponse
	(*UpdateChangelistRequest)(nil), // 4: bytebase.v1.UpdateChangelistRequest
	(*DeleteChangelistRequest)(nil), // 5: bytebase.v1.DeleteChangelistRequest
	(*Changelist)(nil),              // 6: bytebase.v1.Changelist
	(*Changelist_Change)(nil),       // 7: bytebase.v1.Changelist.Change
	(*fieldmaskpb.FieldMask)(nil),   // 8: google.protobuf.FieldMask
	(*timestamppb.Timestamp)(nil),   // 9: google.protobuf.Timestamp
	(*emptypb.Empty)(nil),           // 10: google.protobuf.Empty
}
var file_v1_changelist_service_proto_depIdxs = []int32{
	6,  // 0: bytebase.v1.CreateChangelistRequest.changelist:type_name -> bytebase.v1.Changelist
	6,  // 1: bytebase.v1.ListChangelistsResponse.changelists:type_name -> bytebase.v1.Changelist
	6,  // 2: bytebase.v1.UpdateChangelistRequest.changelist:type_name -> bytebase.v1.Changelist
	8,  // 3: bytebase.v1.UpdateChangelistRequest.update_mask:type_name -> google.protobuf.FieldMask
	9,  // 4: bytebase.v1.Changelist.create_time:type_name -> google.protobuf.Timestamp
	9,  // 5: bytebase.v1.Changelist.update_time:type_name -> google.protobuf.Timestamp
	7,  // 6: bytebase.v1.Changelist.changes:type_name -> bytebase.v1.Changelist.Change
	0,  // 7: bytebase.v1.ChangelistService.CreateChangelist:input_type -> bytebase.v1.CreateChangelistRequest
	1,  // 8: bytebase.v1.ChangelistService.GetChangelist:input_type -> bytebase.v1.GetChangelistRequest
	2,  // 9: bytebase.v1.ChangelistService.ListChangelists:input_type -> bytebase.v1.ListChangelistsRequest
	4,  // 10: bytebase.v1.ChangelistService.UpdateChangelist:input_type -> bytebase.v1.UpdateChangelistRequest
	5,  // 11: bytebase.v1.ChangelistService.DeleteChangelist:input_type -> bytebase.v1.DeleteChangelistRequest
	6,  // 12: bytebase.v1.ChangelistService.CreateChangelist:output_type -> bytebase.v1.Changelist
	6,  // 13: bytebase.v1.ChangelistService.GetChangelist:output_type -> bytebase.v1.Changelist
	3,  // 14: bytebase.v1.ChangelistService.ListChangelists:output_type -> bytebase.v1.ListChangelistsResponse
	6,  // 15: bytebase.v1.ChangelistService.UpdateChangelist:output_type -> bytebase.v1.Changelist
	10, // 16: bytebase.v1.ChangelistService.DeleteChangelist:output_type -> google.protobuf.Empty
	12, // [12:17] is the sub-list for method output_type
	7,  // [7:12] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_v1_changelist_service_proto_init() }
func file_v1_changelist_service_proto_init() {
	if File_v1_changelist_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_v1_changelist_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateChangelistRequest); i {
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
		file_v1_changelist_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetChangelistRequest); i {
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
		file_v1_changelist_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListChangelistsRequest); i {
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
		file_v1_changelist_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListChangelistsResponse); i {
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
		file_v1_changelist_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateChangelistRequest); i {
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
		file_v1_changelist_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteChangelistRequest); i {
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
		file_v1_changelist_service_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Changelist); i {
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
		file_v1_changelist_service_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Changelist_Change); i {
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
			RawDescriptor: file_v1_changelist_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_v1_changelist_service_proto_goTypes,
		DependencyIndexes: file_v1_changelist_service_proto_depIdxs,
		MessageInfos:      file_v1_changelist_service_proto_msgTypes,
	}.Build()
	File_v1_changelist_service_proto = out.File
	file_v1_changelist_service_proto_rawDesc = nil
	file_v1_changelist_service_proto_goTypes = nil
	file_v1_changelist_service_proto_depIdxs = nil
}
