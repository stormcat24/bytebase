// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.0
// 	protoc        (unknown)
// source: store/task_run.proto

package store

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type TaskRunResult struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Detail string `protobuf:"bytes,1,opt,name=detail,proto3" json:"detail,omitempty"`
	// Format: instances/{instance}/databases/{database}/changeHistories/{changeHistory}
	ChangeHistory    string                  `protobuf:"bytes,2,opt,name=change_history,json=changeHistory,proto3" json:"change_history,omitempty"`
	Version          string                  `protobuf:"bytes,3,opt,name=version,proto3" json:"version,omitempty"`
	StartPosition    *TaskRunResult_Position `protobuf:"bytes,4,opt,name=start_position,json=startPosition,proto3" json:"start_position,omitempty"`
	EndPosition      *TaskRunResult_Position `protobuf:"bytes,5,opt,name=end_position,json=endPosition,proto3" json:"end_position,omitempty"`
	ExportArchiveUid int32                   `protobuf:"varint,6,opt,name=export_archive_uid,json=exportArchiveUid,proto3" json:"export_archive_uid,omitempty"`
}

func (x *TaskRunResult) Reset() {
	*x = TaskRunResult{}
	if protoimpl.UnsafeEnabled {
		mi := &file_store_task_run_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TaskRunResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TaskRunResult) ProtoMessage() {}

func (x *TaskRunResult) ProtoReflect() protoreflect.Message {
	mi := &file_store_task_run_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TaskRunResult.ProtoReflect.Descriptor instead.
func (*TaskRunResult) Descriptor() ([]byte, []int) {
	return file_store_task_run_proto_rawDescGZIP(), []int{0}
}

func (x *TaskRunResult) GetDetail() string {
	if x != nil {
		return x.Detail
	}
	return ""
}

func (x *TaskRunResult) GetChangeHistory() string {
	if x != nil {
		return x.ChangeHistory
	}
	return ""
}

func (x *TaskRunResult) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *TaskRunResult) GetStartPosition() *TaskRunResult_Position {
	if x != nil {
		return x.StartPosition
	}
	return nil
}

func (x *TaskRunResult) GetEndPosition() *TaskRunResult_Position {
	if x != nil {
		return x.EndPosition
	}
	return nil
}

func (x *TaskRunResult) GetExportArchiveUid() int32 {
	if x != nil {
		return x.ExportArchiveUid
	}
	return 0
}

// The following fields are used for error reporting.
type TaskRunResult_Position struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Line   int32 `protobuf:"varint,1,opt,name=line,proto3" json:"line,omitempty"`
	Column int32 `protobuf:"varint,2,opt,name=column,proto3" json:"column,omitempty"`
}

func (x *TaskRunResult_Position) Reset() {
	*x = TaskRunResult_Position{}
	if protoimpl.UnsafeEnabled {
		mi := &file_store_task_run_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TaskRunResult_Position) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TaskRunResult_Position) ProtoMessage() {}

func (x *TaskRunResult_Position) ProtoReflect() protoreflect.Message {
	mi := &file_store_task_run_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TaskRunResult_Position.ProtoReflect.Descriptor instead.
func (*TaskRunResult_Position) Descriptor() ([]byte, []int) {
	return file_store_task_run_proto_rawDescGZIP(), []int{0, 0}
}

func (x *TaskRunResult_Position) GetLine() int32 {
	if x != nil {
		return x.Line
	}
	return 0
}

func (x *TaskRunResult_Position) GetColumn() int32 {
	if x != nil {
		return x.Column
	}
	return 0
}

var File_store_task_run_proto protoreflect.FileDescriptor

var file_store_task_run_proto_rawDesc = []byte{
	0x0a, 0x14, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2f, 0x74, 0x61, 0x73, 0x6b, 0x5f, 0x72, 0x75, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73, 0x65,
	0x2e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x22, 0xe8, 0x02, 0x0a, 0x0d, 0x54, 0x61, 0x73, 0x6b, 0x52,
	0x75, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x64, 0x65, 0x74, 0x61,
	0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c,
	0x12, 0x25, 0x0a, 0x0e, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x5f, 0x68, 0x69, 0x73, 0x74, 0x6f,
	0x72, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f,
	0x6e, 0x12, 0x4d, 0x0a, 0x0e, 0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x62, 0x79, 0x74, 0x65,
	0x62, 0x61, 0x73, 0x65, 0x2e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52,
	0x75, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x2e, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x0d, 0x73, 0x74, 0x61, 0x72, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x49, 0x0a, 0x0c, 0x65, 0x6e, 0x64, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x62, 0x79, 0x74, 0x65, 0x62, 0x61, 0x73,
	0x65, 0x2e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x75, 0x6e, 0x52,
	0x65, 0x73, 0x75, 0x6c, 0x74, 0x2e, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b,
	0x65, 0x6e, 0x64, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2c, 0x0a, 0x12, 0x65,
	0x78, 0x70, 0x6f, 0x72, 0x74, 0x5f, 0x61, 0x72, 0x63, 0x68, 0x69, 0x76, 0x65, 0x5f, 0x75, 0x69,
	0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10, 0x65, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x41,
	0x72, 0x63, 0x68, 0x69, 0x76, 0x65, 0x55, 0x69, 0x64, 0x1a, 0x36, 0x0a, 0x08, 0x50, 0x6f, 0x73,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x63, 0x6f, 0x6c,
	0x75, 0x6d, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x63, 0x6f, 0x6c, 0x75, 0x6d,
	0x6e, 0x42, 0x14, 0x5a, 0x12, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2d, 0x67,
	0x6f, 0x2f, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_store_task_run_proto_rawDescOnce sync.Once
	file_store_task_run_proto_rawDescData = file_store_task_run_proto_rawDesc
)

func file_store_task_run_proto_rawDescGZIP() []byte {
	file_store_task_run_proto_rawDescOnce.Do(func() {
		file_store_task_run_proto_rawDescData = protoimpl.X.CompressGZIP(file_store_task_run_proto_rawDescData)
	})
	return file_store_task_run_proto_rawDescData
}

var file_store_task_run_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_store_task_run_proto_goTypes = []interface{}{
	(*TaskRunResult)(nil),          // 0: bytebase.store.TaskRunResult
	(*TaskRunResult_Position)(nil), // 1: bytebase.store.TaskRunResult.Position
}
var file_store_task_run_proto_depIdxs = []int32{
	1, // 0: bytebase.store.TaskRunResult.start_position:type_name -> bytebase.store.TaskRunResult.Position
	1, // 1: bytebase.store.TaskRunResult.end_position:type_name -> bytebase.store.TaskRunResult.Position
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_store_task_run_proto_init() }
func file_store_task_run_proto_init() {
	if File_store_task_run_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_store_task_run_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TaskRunResult); i {
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
		file_store_task_run_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TaskRunResult_Position); i {
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
			RawDescriptor: file_store_task_run_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_store_task_run_proto_goTypes,
		DependencyIndexes: file_store_task_run_proto_depIdxs,
		MessageInfos:      file_store_task_run_proto_msgTypes,
	}.Build()
	File_store_task_run_proto = out.File
	file_store_task_run_proto_rawDesc = nil
	file_store_task_run_proto_goTypes = nil
	file_store_task_run_proto_depIdxs = nil
}
