/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Empty } from "../google/protobuf/empty";
import { FieldMask } from "../google/protobuf/field_mask";
import {
  Engine,
  engineFromJSON,
  engineToJSON,
  engineToNumber,
  State,
  stateFromJSON,
  stateToJSON,
  stateToNumber,
} from "./common";

export const protobufPackage = "bytebase.v1";

export enum DataSourceType {
  DATA_SOURCE_UNSPECIFIED = "DATA_SOURCE_UNSPECIFIED",
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataSourceTypeFromJSON(object: any): DataSourceType {
  switch (object) {
    case 0:
    case "DATA_SOURCE_UNSPECIFIED":
      return DataSourceType.DATA_SOURCE_UNSPECIFIED;
    case 1:
    case "ADMIN":
      return DataSourceType.ADMIN;
    case 2:
    case "READ_ONLY":
      return DataSourceType.READ_ONLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataSourceType.UNRECOGNIZED;
  }
}

export function dataSourceTypeToJSON(object: DataSourceType): string {
  switch (object) {
    case DataSourceType.DATA_SOURCE_UNSPECIFIED:
      return "DATA_SOURCE_UNSPECIFIED";
    case DataSourceType.ADMIN:
      return "ADMIN";
    case DataSourceType.READ_ONLY:
      return "READ_ONLY";
    case DataSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataSourceTypeToNumber(object: DataSourceType): number {
  switch (object) {
    case DataSourceType.DATA_SOURCE_UNSPECIFIED:
      return 0;
    case DataSourceType.ADMIN:
      return 1;
    case DataSourceType.READ_ONLY:
      return 2;
    case DataSourceType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface GetInstanceRequest {
  /**
   * The name of the instance to retrieve.
   * Format: instances/{instance}
   */
  name: string;
}

export interface ListInstancesRequest {
  /**
   * Deprecated.
   * The parent parameter's value depends on the target resource for the request.
   * - instances.list(): An empty string. This method doesn't require a resource; it simply returns all instances the user has access to.
   * - projects.instances.list(): projects/{PROJECT_ID}. This method lists all instances that have databases in the project.
   */
  parent: string;
  /**
   * The maximum number of instances to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 instances will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * A page token, received from a previous `ListInstances` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `ListInstances` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /** Show deleted instances if specified. */
  showDeleted: boolean;
}

export interface ListInstancesResponse {
  /** The instances from the specified request. */
  instances: Instance[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

export interface SearchInstancesRequest {
  /**
   * The parent parameter's value depends on the target resource for the request.
   * - instances.list(): An empty string. This method doesn't require a resource; it simply returns all instances the user has access to.
   * - projects.instances.list(): projects/{PROJECT_ID}. This method lists all instances that have databases in the project.
   */
  parent: string;
  /** Show deleted instances if specified. */
  showDeleted: boolean;
}

export interface SearchInstancesResponse {
  /** The instances from the specified request. */
  instances: Instance[];
}

export interface CreateInstanceRequest {
  /** The instance to create. */
  instance:
    | Instance
    | undefined;
  /**
   * The ID to use for the instance, which will become the final component of
   * the instance's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-/.
   */
  instanceId: string;
  /** Validate only also tests the data source connection. */
  validateOnly: boolean;
}

export interface UpdateInstanceRequest {
  /**
   * The instance to update.
   *
   * The instance's `name` field is used to identify the instance to update.
   * Format: instances/{instance}
   */
  instance:
    | Instance
    | undefined;
  /** The list of fields to update. */
  updateMask: string[] | undefined;
}

export interface DeleteInstanceRequest {
  /**
   * The name of the instance to delete.
   * Format: instances/{instance}
   */
  name: string;
  /** If set to true, any databases and sheets from this project will also be moved to default project, and all open issues will be closed. */
  force: boolean;
}

export interface UndeleteInstanceRequest {
  /**
   * The name of the deleted instance.
   * Format: instances/{instance}
   */
  name: string;
}

export interface SyncInstanceRequest {
  /**
   * The name of instance.
   * Format: instances/{instance}
   */
  name: string;
}

export interface SyncInstanceResponse {
}

export interface BatchSyncInstancesRequest {
  /**
   * The request message specifying the instances to sync.
   * A maximum of 1000 instances can be synced in a batch.
   */
  requests: SyncInstanceRequest[];
}

export interface BatchSyncInstancesResponse {
}

export interface AddDataSourceRequest {
  /**
   * The name of the instance to add a data source to.
   * Format: instances/{instance}
   */
  name: string;
  /**
   * Identified by data source ID.
   * Only READ_ONLY data source can be added.
   */
  dataSource:
    | DataSource
    | undefined;
  /** Validate only also tests the data source connection. */
  validateOnly: boolean;
}

export interface RemoveDataSourceRequest {
  /**
   * The name of the instance to remove a data source from.
   * Format: instances/{instance}
   */
  name: string;
  /**
   * Identified by data source ID.
   * Only READ_ONLY data source can be removed.
   */
  dataSource: DataSource | undefined;
}

export interface UpdateDataSourceRequest {
  /**
   * The name of the instance to update a data source.
   * Format: instances/{instance}
   */
  name: string;
  /** Identified by data source ID. */
  dataSource:
    | DataSource
    | undefined;
  /** The list of fields to update. */
  updateMask:
    | string[]
    | undefined;
  /** Validate only also tests the data source connection. */
  validateOnly: boolean;
}

export interface SyncSlowQueriesRequest {
  /**
   * The name of the instance to sync slow queries.
   * Format: instances/{instance} for one instance
   *      or projects/{project} for one project.
   */
  parent: string;
}

/** InstanceOptions is the option for instances. */
export interface InstanceOptions {
  /** How often the instance is synced. */
  syncInterval:
    | Duration
    | undefined;
  /**
   * The maximum number of connections.
   * The default is 10 if the value is unset or zero.
   */
  maximumConnections: number;
}

export interface Instance {
  /**
   * The name of the instance.
   * Format: instances/{instance}
   */
  name: string;
  /** The system-assigned, unique identifier for a resource. */
  uid: string;
  state: State;
  title: string;
  engine: Engine;
  engineVersion: string;
  externalLink: string;
  dataSources: DataSource[];
  /**
   * The environment resource.
   * Format: environments/prod where prod is the environment resource ID.
   */
  environment: string;
  activation: boolean;
  options: InstanceOptions | undefined;
}

export interface DataSourceExternalSecret {
  secretType: DataSourceExternalSecret_SecretType;
  url: string;
  authType: DataSourceExternalSecret_AuthType;
  appRole?: DataSourceExternalSecret_AppRoleAuthOption | undefined;
  token?:
    | string
    | undefined;
  /** engine name is the name for secret engine. */
  engineName: string;
  /** the secret name in the engine to store the password. */
  secretName: string;
  /** the key name for the password. */
  passwordKeyName: string;
}

export enum DataSourceExternalSecret_SecretType {
  SAECRET_TYPE_UNSPECIFIED = "SAECRET_TYPE_UNSPECIFIED",
  /** VAULT_KV_V2 - ref: https://developer.hashicorp.com/vault/api-docs/secret/kv/kv-v2 */
  VAULT_KV_V2 = "VAULT_KV_V2",
  /** AWS_SECRETS_MANAGER - ref: https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html */
  AWS_SECRETS_MANAGER = "AWS_SECRETS_MANAGER",
  /** GCP_SECRET_MANAGER - ref: https://cloud.google.com/secret-manager/docs */
  GCP_SECRET_MANAGER = "GCP_SECRET_MANAGER",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataSourceExternalSecret_SecretTypeFromJSON(object: any): DataSourceExternalSecret_SecretType {
  switch (object) {
    case 0:
    case "SAECRET_TYPE_UNSPECIFIED":
      return DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED;
    case 1:
    case "VAULT_KV_V2":
      return DataSourceExternalSecret_SecretType.VAULT_KV_V2;
    case 2:
    case "AWS_SECRETS_MANAGER":
      return DataSourceExternalSecret_SecretType.AWS_SECRETS_MANAGER;
    case 3:
    case "GCP_SECRET_MANAGER":
      return DataSourceExternalSecret_SecretType.GCP_SECRET_MANAGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataSourceExternalSecret_SecretType.UNRECOGNIZED;
  }
}

export function dataSourceExternalSecret_SecretTypeToJSON(object: DataSourceExternalSecret_SecretType): string {
  switch (object) {
    case DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED:
      return "SAECRET_TYPE_UNSPECIFIED";
    case DataSourceExternalSecret_SecretType.VAULT_KV_V2:
      return "VAULT_KV_V2";
    case DataSourceExternalSecret_SecretType.AWS_SECRETS_MANAGER:
      return "AWS_SECRETS_MANAGER";
    case DataSourceExternalSecret_SecretType.GCP_SECRET_MANAGER:
      return "GCP_SECRET_MANAGER";
    case DataSourceExternalSecret_SecretType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataSourceExternalSecret_SecretTypeToNumber(object: DataSourceExternalSecret_SecretType): number {
  switch (object) {
    case DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED:
      return 0;
    case DataSourceExternalSecret_SecretType.VAULT_KV_V2:
      return 1;
    case DataSourceExternalSecret_SecretType.AWS_SECRETS_MANAGER:
      return 2;
    case DataSourceExternalSecret_SecretType.GCP_SECRET_MANAGER:
      return 3;
    case DataSourceExternalSecret_SecretType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum DataSourceExternalSecret_AuthType {
  AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED",
  /** TOKEN - ref: https://developer.hashicorp.com/vault/docs/auth/token */
  TOKEN = "TOKEN",
  /** VAULT_APP_ROLE - ref: https://developer.hashicorp.com/vault/docs/auth/approle */
  VAULT_APP_ROLE = "VAULT_APP_ROLE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataSourceExternalSecret_AuthTypeFromJSON(object: any): DataSourceExternalSecret_AuthType {
  switch (object) {
    case 0:
    case "AUTH_TYPE_UNSPECIFIED":
      return DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED;
    case 1:
    case "TOKEN":
      return DataSourceExternalSecret_AuthType.TOKEN;
    case 2:
    case "VAULT_APP_ROLE":
      return DataSourceExternalSecret_AuthType.VAULT_APP_ROLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataSourceExternalSecret_AuthType.UNRECOGNIZED;
  }
}

export function dataSourceExternalSecret_AuthTypeToJSON(object: DataSourceExternalSecret_AuthType): string {
  switch (object) {
    case DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED:
      return "AUTH_TYPE_UNSPECIFIED";
    case DataSourceExternalSecret_AuthType.TOKEN:
      return "TOKEN";
    case DataSourceExternalSecret_AuthType.VAULT_APP_ROLE:
      return "VAULT_APP_ROLE";
    case DataSourceExternalSecret_AuthType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataSourceExternalSecret_AuthTypeToNumber(object: DataSourceExternalSecret_AuthType): number {
  switch (object) {
    case DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED:
      return 0;
    case DataSourceExternalSecret_AuthType.TOKEN:
      return 1;
    case DataSourceExternalSecret_AuthType.VAULT_APP_ROLE:
      return 2;
    case DataSourceExternalSecret_AuthType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface DataSourceExternalSecret_AppRoleAuthOption {
  roleId: string;
  /** the secret id for the role without ttl. */
  secretId: string;
  type: DataSourceExternalSecret_AppRoleAuthOption_SecretType;
  /** The path where the approle auth method is mounted. */
  mountPath: string;
}

export enum DataSourceExternalSecret_AppRoleAuthOption_SecretType {
  SECRET_TYPE_UNSPECIFIED = "SECRET_TYPE_UNSPECIFIED",
  PLAIN = "PLAIN",
  ENVIRONMENT = "ENVIRONMENT",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataSourceExternalSecret_AppRoleAuthOption_SecretTypeFromJSON(
  object: any,
): DataSourceExternalSecret_AppRoleAuthOption_SecretType {
  switch (object) {
    case 0:
    case "SECRET_TYPE_UNSPECIFIED":
      return DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED;
    case 1:
    case "PLAIN":
      return DataSourceExternalSecret_AppRoleAuthOption_SecretType.PLAIN;
    case 2:
    case "ENVIRONMENT":
      return DataSourceExternalSecret_AppRoleAuthOption_SecretType.ENVIRONMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataSourceExternalSecret_AppRoleAuthOption_SecretType.UNRECOGNIZED;
  }
}

export function dataSourceExternalSecret_AppRoleAuthOption_SecretTypeToJSON(
  object: DataSourceExternalSecret_AppRoleAuthOption_SecretType,
): string {
  switch (object) {
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED:
      return "SECRET_TYPE_UNSPECIFIED";
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.PLAIN:
      return "PLAIN";
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.ENVIRONMENT:
      return "ENVIRONMENT";
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataSourceExternalSecret_AppRoleAuthOption_SecretTypeToNumber(
  object: DataSourceExternalSecret_AppRoleAuthOption_SecretType,
): number {
  switch (object) {
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED:
      return 0;
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.PLAIN:
      return 1;
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.ENVIRONMENT:
      return 2;
    case DataSourceExternalSecret_AppRoleAuthOption_SecretType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface DataSource {
  id: string;
  type: DataSourceType;
  username: string;
  password: string;
  /** Use SSL to connect to the data source. By default, we use system default SSL configuration. */
  useSsl: boolean;
  sslCa: string;
  sslCert: string;
  sslKey: string;
  host: string;
  port: string;
  database: string;
  /** srv, authentication_database and replica_set are used for MongoDB. */
  srv: boolean;
  authenticationDatabase: string;
  /** sid and service_name are used for Oracle. */
  sid: string;
  serviceName: string;
  /**
   * Connection over SSH.
   * The hostname of the SSH server agent.
   * Required.
   */
  sshHost: string;
  /**
   * The port of the SSH server agent. It's 22 typically.
   * Required.
   */
  sshPort: string;
  /**
   * The user to login the server.
   * Required.
   */
  sshUser: string;
  /** The password to login the server. If it's empty string, no password is required. */
  sshPassword: string;
  /** The private key to login the server. If it's empty string, we will use the system default private key from os.Getenv("SSH_AUTH_SOCK"). */
  sshPrivateKey: string;
  /**
   * PKCS#8 private key in PEM format. If it's empty string, no private key is required.
   * Used for authentication when connecting to the data source.
   */
  authenticationPrivateKey: string;
  externalSecret: DataSourceExternalSecret | undefined;
  authenticationType: DataSource_AuthenticationType;
  saslConfig:
    | SASLConfig
    | undefined;
  /** additional_addresses is used for MongoDB replica set. */
  additionalAddresses: DataSource_Address[];
  /** replica_set is used for MongoDB replica set. */
  replicaSet: string;
  /** direct_connection is used for MongoDB to dispatch all the operations to the node specified in the connection string. */
  directConnection: boolean;
  /** region is the location of where the DB is, works for AWS RDS. For example, us-east-1. */
  region: string;
  /** account_id is used by Databricks. */
  accountId: string;
  /** warehouse_id is used by Databricks. */
  warehouseId: string;
  /** master_name is the master name used by connecting redis-master via redis sentinel. */
  masterName: string;
  /** master_username and master_password are master credentials used by redis sentinel mode. */
  masterUsername: string;
  masterPassword: string;
  redisType: DataSource_RedisType;
}

export enum DataSource_AuthenticationType {
  AUTHENTICATION_UNSPECIFIED = "AUTHENTICATION_UNSPECIFIED",
  PASSWORD = "PASSWORD",
  GOOGLE_CLOUD_SQL_IAM = "GOOGLE_CLOUD_SQL_IAM",
  AWS_RDS_IAM = "AWS_RDS_IAM",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataSource_AuthenticationTypeFromJSON(object: any): DataSource_AuthenticationType {
  switch (object) {
    case 0:
    case "AUTHENTICATION_UNSPECIFIED":
      return DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED;
    case 1:
    case "PASSWORD":
      return DataSource_AuthenticationType.PASSWORD;
    case 2:
    case "GOOGLE_CLOUD_SQL_IAM":
      return DataSource_AuthenticationType.GOOGLE_CLOUD_SQL_IAM;
    case 3:
    case "AWS_RDS_IAM":
      return DataSource_AuthenticationType.AWS_RDS_IAM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataSource_AuthenticationType.UNRECOGNIZED;
  }
}

export function dataSource_AuthenticationTypeToJSON(object: DataSource_AuthenticationType): string {
  switch (object) {
    case DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED:
      return "AUTHENTICATION_UNSPECIFIED";
    case DataSource_AuthenticationType.PASSWORD:
      return "PASSWORD";
    case DataSource_AuthenticationType.GOOGLE_CLOUD_SQL_IAM:
      return "GOOGLE_CLOUD_SQL_IAM";
    case DataSource_AuthenticationType.AWS_RDS_IAM:
      return "AWS_RDS_IAM";
    case DataSource_AuthenticationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataSource_AuthenticationTypeToNumber(object: DataSource_AuthenticationType): number {
  switch (object) {
    case DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED:
      return 0;
    case DataSource_AuthenticationType.PASSWORD:
      return 1;
    case DataSource_AuthenticationType.GOOGLE_CLOUD_SQL_IAM:
      return 2;
    case DataSource_AuthenticationType.AWS_RDS_IAM:
      return 3;
    case DataSource_AuthenticationType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum DataSource_RedisType {
  REDIS_TYPE_UNSPECIFIED = "REDIS_TYPE_UNSPECIFIED",
  STANDALONE = "STANDALONE",
  SENTINEL = "SENTINEL",
  CLUSTER = "CLUSTER",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataSource_RedisTypeFromJSON(object: any): DataSource_RedisType {
  switch (object) {
    case 0:
    case "REDIS_TYPE_UNSPECIFIED":
      return DataSource_RedisType.REDIS_TYPE_UNSPECIFIED;
    case 1:
    case "STANDALONE":
      return DataSource_RedisType.STANDALONE;
    case 2:
    case "SENTINEL":
      return DataSource_RedisType.SENTINEL;
    case 3:
    case "CLUSTER":
      return DataSource_RedisType.CLUSTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataSource_RedisType.UNRECOGNIZED;
  }
}

export function dataSource_RedisTypeToJSON(object: DataSource_RedisType): string {
  switch (object) {
    case DataSource_RedisType.REDIS_TYPE_UNSPECIFIED:
      return "REDIS_TYPE_UNSPECIFIED";
    case DataSource_RedisType.STANDALONE:
      return "STANDALONE";
    case DataSource_RedisType.SENTINEL:
      return "SENTINEL";
    case DataSource_RedisType.CLUSTER:
      return "CLUSTER";
    case DataSource_RedisType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataSource_RedisTypeToNumber(object: DataSource_RedisType): number {
  switch (object) {
    case DataSource_RedisType.REDIS_TYPE_UNSPECIFIED:
      return 0;
    case DataSource_RedisType.STANDALONE:
      return 1;
    case DataSource_RedisType.SENTINEL:
      return 2;
    case DataSource_RedisType.CLUSTER:
      return 3;
    case DataSource_RedisType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface DataSource_Address {
  host: string;
  port: string;
}

export interface InstanceResource {
  title: string;
  engine: Engine;
  engineVersion: string;
  dataSources: DataSource[];
  activation: boolean;
  /**
   * The name of the instance.
   * Format: instances/{instance}
   */
  name: string;
  /**
   * The environment resource.
   * Format: environments/prod where prod is the environment resource ID.
   */
  environment: string;
}

export interface SASLConfig {
  krbConfig?: KerberosConfig | undefined;
}

export interface KerberosConfig {
  primary: string;
  instance: string;
  realm: string;
  keytab: Uint8Array;
  kdcHost: string;
  kdcPort: string;
  kdcTransportProtocol: string;
}

function createBaseGetInstanceRequest(): GetInstanceRequest {
  return { name: "" };
}

export const GetInstanceRequest = {
  encode(message: GetInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInstanceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetInstanceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetInstanceRequest>): GetInstanceRequest {
    return GetInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetInstanceRequest>): GetInstanceRequest {
    const message = createBaseGetInstanceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListInstancesRequest(): ListInstancesRequest {
  return { parent: "", pageSize: 0, pageToken: "", showDeleted: false };
}

export const ListInstancesRequest = {
  encode(message: ListInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(34).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.showDeleted === true) {
      writer.uint32(24).bool(message.showDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.showDeleted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInstancesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      showDeleted: isSet(object.showDeleted) ? globalThis.Boolean(object.showDeleted) : false,
    };
  },

  toJSON(message: ListInstancesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.showDeleted === true) {
      obj.showDeleted = message.showDeleted;
    }
    return obj;
  },

  create(base?: DeepPartial<ListInstancesRequest>): ListInstancesRequest {
    return ListInstancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesRequest>): ListInstancesRequest {
    const message = createBaseListInstancesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.showDeleted = object.showDeleted ?? false;
    return message;
  },
};

function createBaseListInstancesResponse(): ListInstancesResponse {
  return { instances: [], nextPageToken: "" };
}

export const ListInstancesResponse = {
  encode(message: ListInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instances.push(Instance.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInstancesResponse {
    return {
      instances: globalThis.Array.isArray(object?.instances)
        ? object.instances.map((e: any) => Instance.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances?.length) {
      obj.instances = message.instances.map((e) => Instance.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    return ListInstancesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    const message = createBaseListInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseSearchInstancesRequest(): SearchInstancesRequest {
  return { parent: "", showDeleted: false };
}

export const SearchInstancesRequest = {
  encode(message: SearchInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.showDeleted === true) {
      writer.uint32(16).bool(message.showDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.showDeleted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchInstancesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      showDeleted: isSet(object.showDeleted) ? globalThis.Boolean(object.showDeleted) : false,
    };
  },

  toJSON(message: SearchInstancesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.showDeleted === true) {
      obj.showDeleted = message.showDeleted;
    }
    return obj;
  },

  create(base?: DeepPartial<SearchInstancesRequest>): SearchInstancesRequest {
    return SearchInstancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchInstancesRequest>): SearchInstancesRequest {
    const message = createBaseSearchInstancesRequest();
    message.parent = object.parent ?? "";
    message.showDeleted = object.showDeleted ?? false;
    return message;
  },
};

function createBaseSearchInstancesResponse(): SearchInstancesResponse {
  return { instances: [] };
}

export const SearchInstancesResponse = {
  encode(message: SearchInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instances.push(Instance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchInstancesResponse {
    return {
      instances: globalThis.Array.isArray(object?.instances)
        ? object.instances.map((e: any) => Instance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SearchInstancesResponse): unknown {
    const obj: any = {};
    if (message.instances?.length) {
      obj.instances = message.instances.map((e) => Instance.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SearchInstancesResponse>): SearchInstancesResponse {
    return SearchInstancesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchInstancesResponse>): SearchInstancesResponse {
    const message = createBaseSearchInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateInstanceRequest(): CreateInstanceRequest {
  return { instance: undefined, instanceId: "", validateOnly: false };
}

export const CreateInstanceRequest = {
  encode(message: CreateInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instance !== undefined) {
      Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
    }
    if (message.instanceId !== "") {
      writer.uint32(18).string(message.instanceId);
    }
    if (message.validateOnly === true) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instance = Instance.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instanceId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInstanceRequest {
    return {
      instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
      instanceId: isSet(object.instanceId) ? globalThis.String(object.instanceId) : "",
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: CreateInstanceRequest): unknown {
    const obj: any = {};
    if (message.instance !== undefined) {
      obj.instance = Instance.toJSON(message.instance);
    }
    if (message.instanceId !== "") {
      obj.instanceId = message.instanceId;
    }
    if (message.validateOnly === true) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest {
    return CreateInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateInstanceRequest>): CreateInstanceRequest {
    const message = createBaseCreateInstanceRequest();
    message.instance = (object.instance !== undefined && object.instance !== null)
      ? Instance.fromPartial(object.instance)
      : undefined;
    message.instanceId = object.instanceId ?? "";
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseUpdateInstanceRequest(): UpdateInstanceRequest {
  return { instance: undefined, updateMask: undefined };
}

export const UpdateInstanceRequest = {
  encode(message: UpdateInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instance !== undefined) {
      Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instance = Instance.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateInstanceRequest {
    return {
      instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateInstanceRequest): unknown {
    const obj: any = {};
    if (message.instance !== undefined) {
      obj.instance = Instance.toJSON(message.instance);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest {
    return UpdateInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateInstanceRequest>): UpdateInstanceRequest {
    const message = createBaseUpdateInstanceRequest();
    message.instance = (object.instance !== undefined && object.instance !== null)
      ? Instance.fromPartial(object.instance)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseDeleteInstanceRequest(): DeleteInstanceRequest {
  return { name: "", force: false };
}

export const DeleteInstanceRequest = {
  encode(message: DeleteInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.force === true) {
      writer.uint32(16).bool(message.force);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.force = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteInstanceRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      force: isSet(object.force) ? globalThis.Boolean(object.force) : false,
    };
  },

  toJSON(message: DeleteInstanceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.force === true) {
      obj.force = message.force;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteInstanceRequest>): DeleteInstanceRequest {
    return DeleteInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteInstanceRequest>): DeleteInstanceRequest {
    const message = createBaseDeleteInstanceRequest();
    message.name = object.name ?? "";
    message.force = object.force ?? false;
    return message;
  },
};

function createBaseUndeleteInstanceRequest(): UndeleteInstanceRequest {
  return { name: "" };
}

export const UndeleteInstanceRequest = {
  encode(message: UndeleteInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UndeleteInstanceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: UndeleteInstanceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<UndeleteInstanceRequest>): UndeleteInstanceRequest {
    return UndeleteInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UndeleteInstanceRequest>): UndeleteInstanceRequest {
    const message = createBaseUndeleteInstanceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSyncInstanceRequest(): SyncInstanceRequest {
  return { name: "" };
}

export const SyncInstanceRequest = {
  encode(message: SyncInstanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncInstanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncInstanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SyncInstanceRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: SyncInstanceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<SyncInstanceRequest>): SyncInstanceRequest {
    return SyncInstanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SyncInstanceRequest>): SyncInstanceRequest {
    const message = createBaseSyncInstanceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSyncInstanceResponse(): SyncInstanceResponse {
  return {};
}

export const SyncInstanceResponse = {
  encode(_: SyncInstanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncInstanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncInstanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SyncInstanceResponse {
    return {};
  },

  toJSON(_: SyncInstanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SyncInstanceResponse>): SyncInstanceResponse {
    return SyncInstanceResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SyncInstanceResponse>): SyncInstanceResponse {
    const message = createBaseSyncInstanceResponse();
    return message;
  },
};

function createBaseBatchSyncInstancesRequest(): BatchSyncInstancesRequest {
  return { requests: [] };
}

export const BatchSyncInstancesRequest = {
  encode(message: BatchSyncInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      SyncInstanceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSyncInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSyncInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requests.push(SyncInstanceRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchSyncInstancesRequest {
    return {
      requests: globalThis.Array.isArray(object?.requests)
        ? object.requests.map((e: any) => SyncInstanceRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchSyncInstancesRequest): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => SyncInstanceRequest.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BatchSyncInstancesRequest>): BatchSyncInstancesRequest {
    return BatchSyncInstancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BatchSyncInstancesRequest>): BatchSyncInstancesRequest {
    const message = createBaseBatchSyncInstancesRequest();
    message.requests = object.requests?.map((e) => SyncInstanceRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchSyncInstancesResponse(): BatchSyncInstancesResponse {
  return {};
}

export const BatchSyncInstancesResponse = {
  encode(_: BatchSyncInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSyncInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSyncInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): BatchSyncInstancesResponse {
    return {};
  },

  toJSON(_: BatchSyncInstancesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<BatchSyncInstancesResponse>): BatchSyncInstancesResponse {
    return BatchSyncInstancesResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<BatchSyncInstancesResponse>): BatchSyncInstancesResponse {
    const message = createBaseBatchSyncInstancesResponse();
    return message;
  },
};

function createBaseAddDataSourceRequest(): AddDataSourceRequest {
  return { name: "", dataSource: undefined, validateOnly: false };
}

export const AddDataSourceRequest = {
  encode(message: AddDataSourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataSource !== undefined) {
      DataSource.encode(message.dataSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.validateOnly === true) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDataSourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDataSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataSource = DataSource.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDataSourceRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      dataSource: isSet(object.dataSource) ? DataSource.fromJSON(object.dataSource) : undefined,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: AddDataSourceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.dataSource !== undefined) {
      obj.dataSource = DataSource.toJSON(message.dataSource);
    }
    if (message.validateOnly === true) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<AddDataSourceRequest>): AddDataSourceRequest {
    return AddDataSourceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddDataSourceRequest>): AddDataSourceRequest {
    const message = createBaseAddDataSourceRequest();
    message.name = object.name ?? "";
    message.dataSource = (object.dataSource !== undefined && object.dataSource !== null)
      ? DataSource.fromPartial(object.dataSource)
      : undefined;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseRemoveDataSourceRequest(): RemoveDataSourceRequest {
  return { name: "", dataSource: undefined };
}

export const RemoveDataSourceRequest = {
  encode(message: RemoveDataSourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataSource !== undefined) {
      DataSource.encode(message.dataSource, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveDataSourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveDataSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataSource = DataSource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveDataSourceRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      dataSource: isSet(object.dataSource) ? DataSource.fromJSON(object.dataSource) : undefined,
    };
  },

  toJSON(message: RemoveDataSourceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.dataSource !== undefined) {
      obj.dataSource = DataSource.toJSON(message.dataSource);
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveDataSourceRequest>): RemoveDataSourceRequest {
    return RemoveDataSourceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveDataSourceRequest>): RemoveDataSourceRequest {
    const message = createBaseRemoveDataSourceRequest();
    message.name = object.name ?? "";
    message.dataSource = (object.dataSource !== undefined && object.dataSource !== null)
      ? DataSource.fromPartial(object.dataSource)
      : undefined;
    return message;
  },
};

function createBaseUpdateDataSourceRequest(): UpdateDataSourceRequest {
  return { name: "", dataSource: undefined, updateMask: undefined, validateOnly: false };
}

export const UpdateDataSourceRequest = {
  encode(message: UpdateDataSourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.dataSource !== undefined) {
      DataSource.encode(message.dataSource, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(26).fork()).ldelim();
    }
    if (message.validateOnly === true) {
      writer.uint32(32).bool(message.validateOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDataSourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDataSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataSource = DataSource.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.validateOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDataSourceRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      dataSource: isSet(object.dataSource) ? DataSource.fromJSON(object.dataSource) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      validateOnly: isSet(object.validateOnly) ? globalThis.Boolean(object.validateOnly) : false,
    };
  },

  toJSON(message: UpdateDataSourceRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.dataSource !== undefined) {
      obj.dataSource = DataSource.toJSON(message.dataSource);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.validateOnly === true) {
      obj.validateOnly = message.validateOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateDataSourceRequest>): UpdateDataSourceRequest {
    return UpdateDataSourceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateDataSourceRequest>): UpdateDataSourceRequest {
    const message = createBaseUpdateDataSourceRequest();
    message.name = object.name ?? "";
    message.dataSource = (object.dataSource !== undefined && object.dataSource !== null)
      ? DataSource.fromPartial(object.dataSource)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
};

function createBaseSyncSlowQueriesRequest(): SyncSlowQueriesRequest {
  return { parent: "" };
}

export const SyncSlowQueriesRequest = {
  encode(message: SyncSlowQueriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncSlowQueriesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncSlowQueriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SyncSlowQueriesRequest {
    return { parent: isSet(object.parent) ? globalThis.String(object.parent) : "" };
  },

  toJSON(message: SyncSlowQueriesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    return obj;
  },

  create(base?: DeepPartial<SyncSlowQueriesRequest>): SyncSlowQueriesRequest {
    return SyncSlowQueriesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SyncSlowQueriesRequest>): SyncSlowQueriesRequest {
    const message = createBaseSyncSlowQueriesRequest();
    message.parent = object.parent ?? "";
    return message;
  },
};

function createBaseInstanceOptions(): InstanceOptions {
  return { syncInterval: undefined, maximumConnections: 0 };
}

export const InstanceOptions = {
  encode(message: InstanceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncInterval !== undefined) {
      Duration.encode(message.syncInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.maximumConnections !== 0) {
      writer.uint32(24).int32(message.maximumConnections);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstanceOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.syncInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maximumConnections = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstanceOptions {
    return {
      syncInterval: isSet(object.syncInterval) ? Duration.fromJSON(object.syncInterval) : undefined,
      maximumConnections: isSet(object.maximumConnections) ? globalThis.Number(object.maximumConnections) : 0,
    };
  },

  toJSON(message: InstanceOptions): unknown {
    const obj: any = {};
    if (message.syncInterval !== undefined) {
      obj.syncInterval = Duration.toJSON(message.syncInterval);
    }
    if (message.maximumConnections !== 0) {
      obj.maximumConnections = Math.round(message.maximumConnections);
    }
    return obj;
  },

  create(base?: DeepPartial<InstanceOptions>): InstanceOptions {
    return InstanceOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstanceOptions>): InstanceOptions {
    const message = createBaseInstanceOptions();
    message.syncInterval = (object.syncInterval !== undefined && object.syncInterval !== null)
      ? Duration.fromPartial(object.syncInterval)
      : undefined;
    message.maximumConnections = object.maximumConnections ?? 0;
    return message;
  },
};

function createBaseInstance(): Instance {
  return {
    name: "",
    uid: "",
    state: State.STATE_UNSPECIFIED,
    title: "",
    engine: Engine.ENGINE_UNSPECIFIED,
    engineVersion: "",
    externalLink: "",
    dataSources: [],
    environment: "",
    activation: false,
    options: undefined,
  };
}

export const Instance = {
  encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    if (message.state !== State.STATE_UNSPECIFIED) {
      writer.uint32(24).int32(stateToNumber(message.state));
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.engine !== Engine.ENGINE_UNSPECIFIED) {
      writer.uint32(40).int32(engineToNumber(message.engine));
    }
    if (message.engineVersion !== "") {
      writer.uint32(50).string(message.engineVersion);
    }
    if (message.externalLink !== "") {
      writer.uint32(58).string(message.externalLink);
    }
    for (const v of message.dataSources) {
      DataSource.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.environment !== "") {
      writer.uint32(74).string(message.environment);
    }
    if (message.activation === true) {
      writer.uint32(80).bool(message.activation);
    }
    if (message.options !== undefined) {
      InstanceOptions.encode(message.options, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = stateFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.engine = engineFromJSON(reader.int32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.engineVersion = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.externalLink = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.dataSources.push(DataSource.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.environment = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.activation = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.options = InstanceOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instance {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      state: isSet(object.state) ? stateFromJSON(object.state) : State.STATE_UNSPECIFIED,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      engine: isSet(object.engine) ? engineFromJSON(object.engine) : Engine.ENGINE_UNSPECIFIED,
      engineVersion: isSet(object.engineVersion) ? globalThis.String(object.engineVersion) : "",
      externalLink: isSet(object.externalLink) ? globalThis.String(object.externalLink) : "",
      dataSources: globalThis.Array.isArray(object?.dataSources)
        ? object.dataSources.map((e: any) => DataSource.fromJSON(e))
        : [],
      environment: isSet(object.environment) ? globalThis.String(object.environment) : "",
      activation: isSet(object.activation) ? globalThis.Boolean(object.activation) : false,
      options: isSet(object.options) ? InstanceOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: Instance): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.state !== State.STATE_UNSPECIFIED) {
      obj.state = stateToJSON(message.state);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.engine !== Engine.ENGINE_UNSPECIFIED) {
      obj.engine = engineToJSON(message.engine);
    }
    if (message.engineVersion !== "") {
      obj.engineVersion = message.engineVersion;
    }
    if (message.externalLink !== "") {
      obj.externalLink = message.externalLink;
    }
    if (message.dataSources?.length) {
      obj.dataSources = message.dataSources.map((e) => DataSource.toJSON(e));
    }
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    if (message.activation === true) {
      obj.activation = message.activation;
    }
    if (message.options !== undefined) {
      obj.options = InstanceOptions.toJSON(message.options);
    }
    return obj;
  },

  create(base?: DeepPartial<Instance>): Instance {
    return Instance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance>): Instance {
    const message = createBaseInstance();
    message.name = object.name ?? "";
    message.uid = object.uid ?? "";
    message.state = object.state ?? State.STATE_UNSPECIFIED;
    message.title = object.title ?? "";
    message.engine = object.engine ?? Engine.ENGINE_UNSPECIFIED;
    message.engineVersion = object.engineVersion ?? "";
    message.externalLink = object.externalLink ?? "";
    message.dataSources = object.dataSources?.map((e) => DataSource.fromPartial(e)) || [];
    message.environment = object.environment ?? "";
    message.activation = object.activation ?? false;
    message.options = (object.options !== undefined && object.options !== null)
      ? InstanceOptions.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseDataSourceExternalSecret(): DataSourceExternalSecret {
  return {
    secretType: DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED,
    url: "",
    authType: DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED,
    appRole: undefined,
    token: undefined,
    engineName: "",
    secretName: "",
    passwordKeyName: "",
  };
}

export const DataSourceExternalSecret = {
  encode(message: DataSourceExternalSecret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretType !== DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED) {
      writer.uint32(8).int32(dataSourceExternalSecret_SecretTypeToNumber(message.secretType));
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.authType !== DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED) {
      writer.uint32(24).int32(dataSourceExternalSecret_AuthTypeToNumber(message.authType));
    }
    if (message.appRole !== undefined) {
      DataSourceExternalSecret_AppRoleAuthOption.encode(message.appRole, writer.uint32(34).fork()).ldelim();
    }
    if (message.token !== undefined) {
      writer.uint32(42).string(message.token);
    }
    if (message.engineName !== "") {
      writer.uint32(50).string(message.engineName);
    }
    if (message.secretName !== "") {
      writer.uint32(58).string(message.secretName);
    }
    if (message.passwordKeyName !== "") {
      writer.uint32(66).string(message.passwordKeyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceExternalSecret {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceExternalSecret();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.secretType = dataSourceExternalSecret_SecretTypeFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.authType = dataSourceExternalSecret_AuthTypeFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.appRole = DataSourceExternalSecret_AppRoleAuthOption.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.token = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.engineName = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.secretName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.passwordKeyName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceExternalSecret {
    return {
      secretType: isSet(object.secretType)
        ? dataSourceExternalSecret_SecretTypeFromJSON(object.secretType)
        : DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      authType: isSet(object.authType)
        ? dataSourceExternalSecret_AuthTypeFromJSON(object.authType)
        : DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED,
      appRole: isSet(object.appRole) ? DataSourceExternalSecret_AppRoleAuthOption.fromJSON(object.appRole) : undefined,
      token: isSet(object.token) ? globalThis.String(object.token) : undefined,
      engineName: isSet(object.engineName) ? globalThis.String(object.engineName) : "",
      secretName: isSet(object.secretName) ? globalThis.String(object.secretName) : "",
      passwordKeyName: isSet(object.passwordKeyName) ? globalThis.String(object.passwordKeyName) : "",
    };
  },

  toJSON(message: DataSourceExternalSecret): unknown {
    const obj: any = {};
    if (message.secretType !== DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED) {
      obj.secretType = dataSourceExternalSecret_SecretTypeToJSON(message.secretType);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.authType !== DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED) {
      obj.authType = dataSourceExternalSecret_AuthTypeToJSON(message.authType);
    }
    if (message.appRole !== undefined) {
      obj.appRole = DataSourceExternalSecret_AppRoleAuthOption.toJSON(message.appRole);
    }
    if (message.token !== undefined) {
      obj.token = message.token;
    }
    if (message.engineName !== "") {
      obj.engineName = message.engineName;
    }
    if (message.secretName !== "") {
      obj.secretName = message.secretName;
    }
    if (message.passwordKeyName !== "") {
      obj.passwordKeyName = message.passwordKeyName;
    }
    return obj;
  },

  create(base?: DeepPartial<DataSourceExternalSecret>): DataSourceExternalSecret {
    return DataSourceExternalSecret.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataSourceExternalSecret>): DataSourceExternalSecret {
    const message = createBaseDataSourceExternalSecret();
    message.secretType = object.secretType ?? DataSourceExternalSecret_SecretType.SAECRET_TYPE_UNSPECIFIED;
    message.url = object.url ?? "";
    message.authType = object.authType ?? DataSourceExternalSecret_AuthType.AUTH_TYPE_UNSPECIFIED;
    message.appRole = (object.appRole !== undefined && object.appRole !== null)
      ? DataSourceExternalSecret_AppRoleAuthOption.fromPartial(object.appRole)
      : undefined;
    message.token = object.token ?? undefined;
    message.engineName = object.engineName ?? "";
    message.secretName = object.secretName ?? "";
    message.passwordKeyName = object.passwordKeyName ?? "";
    return message;
  },
};

function createBaseDataSourceExternalSecret_AppRoleAuthOption(): DataSourceExternalSecret_AppRoleAuthOption {
  return {
    roleId: "",
    secretId: "",
    type: DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED,
    mountPath: "",
  };
}

export const DataSourceExternalSecret_AppRoleAuthOption = {
  encode(message: DataSourceExternalSecret_AppRoleAuthOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.secretId !== "") {
      writer.uint32(18).string(message.secretId);
    }
    if (message.type !== DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED) {
      writer.uint32(24).int32(dataSourceExternalSecret_AppRoleAuthOption_SecretTypeToNumber(message.type));
    }
    if (message.mountPath !== "") {
      writer.uint32(34).string(message.mountPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceExternalSecret_AppRoleAuthOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceExternalSecret_AppRoleAuthOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roleId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.secretId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = dataSourceExternalSecret_AppRoleAuthOption_SecretTypeFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mountPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceExternalSecret_AppRoleAuthOption {
    return {
      roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
      secretId: isSet(object.secretId) ? globalThis.String(object.secretId) : "",
      type: isSet(object.type)
        ? dataSourceExternalSecret_AppRoleAuthOption_SecretTypeFromJSON(object.type)
        : DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED,
      mountPath: isSet(object.mountPath) ? globalThis.String(object.mountPath) : "",
    };
  },

  toJSON(message: DataSourceExternalSecret_AppRoleAuthOption): unknown {
    const obj: any = {};
    if (message.roleId !== "") {
      obj.roleId = message.roleId;
    }
    if (message.secretId !== "") {
      obj.secretId = message.secretId;
    }
    if (message.type !== DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED) {
      obj.type = dataSourceExternalSecret_AppRoleAuthOption_SecretTypeToJSON(message.type);
    }
    if (message.mountPath !== "") {
      obj.mountPath = message.mountPath;
    }
    return obj;
  },

  create(base?: DeepPartial<DataSourceExternalSecret_AppRoleAuthOption>): DataSourceExternalSecret_AppRoleAuthOption {
    return DataSourceExternalSecret_AppRoleAuthOption.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<DataSourceExternalSecret_AppRoleAuthOption>,
  ): DataSourceExternalSecret_AppRoleAuthOption {
    const message = createBaseDataSourceExternalSecret_AppRoleAuthOption();
    message.roleId = object.roleId ?? "";
    message.secretId = object.secretId ?? "";
    message.type = object.type ?? DataSourceExternalSecret_AppRoleAuthOption_SecretType.SECRET_TYPE_UNSPECIFIED;
    message.mountPath = object.mountPath ?? "";
    return message;
  },
};

function createBaseDataSource(): DataSource {
  return {
    id: "",
    type: DataSourceType.DATA_SOURCE_UNSPECIFIED,
    username: "",
    password: "",
    useSsl: false,
    sslCa: "",
    sslCert: "",
    sslKey: "",
    host: "",
    port: "",
    database: "",
    srv: false,
    authenticationDatabase: "",
    sid: "",
    serviceName: "",
    sshHost: "",
    sshPort: "",
    sshUser: "",
    sshPassword: "",
    sshPrivateKey: "",
    authenticationPrivateKey: "",
    externalSecret: undefined,
    authenticationType: DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED,
    saslConfig: undefined,
    additionalAddresses: [],
    replicaSet: "",
    directConnection: false,
    region: "",
    accountId: "",
    warehouseId: "",
    masterName: "",
    masterUsername: "",
    masterPassword: "",
    redisType: DataSource_RedisType.REDIS_TYPE_UNSPECIFIED,
  };
}

export const DataSource = {
  encode(message: DataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== DataSourceType.DATA_SOURCE_UNSPECIFIED) {
      writer.uint32(16).int32(dataSourceTypeToNumber(message.type));
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    if (message.useSsl === true) {
      writer.uint32(240).bool(message.useSsl);
    }
    if (message.sslCa !== "") {
      writer.uint32(42).string(message.sslCa);
    }
    if (message.sslCert !== "") {
      writer.uint32(50).string(message.sslCert);
    }
    if (message.sslKey !== "") {
      writer.uint32(58).string(message.sslKey);
    }
    if (message.host !== "") {
      writer.uint32(66).string(message.host);
    }
    if (message.port !== "") {
      writer.uint32(74).string(message.port);
    }
    if (message.database !== "") {
      writer.uint32(82).string(message.database);
    }
    if (message.srv === true) {
      writer.uint32(88).bool(message.srv);
    }
    if (message.authenticationDatabase !== "") {
      writer.uint32(98).string(message.authenticationDatabase);
    }
    if (message.sid !== "") {
      writer.uint32(106).string(message.sid);
    }
    if (message.serviceName !== "") {
      writer.uint32(114).string(message.serviceName);
    }
    if (message.sshHost !== "") {
      writer.uint32(122).string(message.sshHost);
    }
    if (message.sshPort !== "") {
      writer.uint32(130).string(message.sshPort);
    }
    if (message.sshUser !== "") {
      writer.uint32(138).string(message.sshUser);
    }
    if (message.sshPassword !== "") {
      writer.uint32(146).string(message.sshPassword);
    }
    if (message.sshPrivateKey !== "") {
      writer.uint32(154).string(message.sshPrivateKey);
    }
    if (message.authenticationPrivateKey !== "") {
      writer.uint32(162).string(message.authenticationPrivateKey);
    }
    if (message.externalSecret !== undefined) {
      DataSourceExternalSecret.encode(message.externalSecret, writer.uint32(170).fork()).ldelim();
    }
    if (message.authenticationType !== DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED) {
      writer.uint32(176).int32(dataSource_AuthenticationTypeToNumber(message.authenticationType));
    }
    if (message.saslConfig !== undefined) {
      SASLConfig.encode(message.saslConfig, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.additionalAddresses) {
      DataSource_Address.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.replicaSet !== "") {
      writer.uint32(202).string(message.replicaSet);
    }
    if (message.directConnection === true) {
      writer.uint32(208).bool(message.directConnection);
    }
    if (message.region !== "") {
      writer.uint32(218).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(226).string(message.accountId);
    }
    if (message.warehouseId !== "") {
      writer.uint32(234).string(message.warehouseId);
    }
    if (message.masterName !== "") {
      writer.uint32(250).string(message.masterName);
    }
    if (message.masterUsername !== "") {
      writer.uint32(258).string(message.masterUsername);
    }
    if (message.masterPassword !== "") {
      writer.uint32(266).string(message.masterPassword);
    }
    if (message.redisType !== DataSource_RedisType.REDIS_TYPE_UNSPECIFIED) {
      writer.uint32(272).int32(dataSource_RedisTypeToNumber(message.redisType));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = dataSourceTypeFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.useSsl = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sslCa = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sslCert = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sslKey = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.host = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.port = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.database = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.srv = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.authenticationDatabase = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.sid = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.sshHost = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.sshPort = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.sshUser = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.sshPassword = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.sshPrivateKey = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.authenticationPrivateKey = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.externalSecret = DataSourceExternalSecret.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.authenticationType = dataSource_AuthenticationTypeFromJSON(reader.int32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.saslConfig = SASLConfig.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.additionalAddresses.push(DataSource_Address.decode(reader, reader.uint32()));
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.replicaSet = reader.string();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.directConnection = reader.bool();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.region = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.warehouseId = reader.string();
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.masterName = reader.string();
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.masterUsername = reader.string();
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.masterPassword = reader.string();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.redisType = dataSource_RedisTypeFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSource {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      type: isSet(object.type) ? dataSourceTypeFromJSON(object.type) : DataSourceType.DATA_SOURCE_UNSPECIFIED,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      useSsl: isSet(object.useSsl) ? globalThis.Boolean(object.useSsl) : false,
      sslCa: isSet(object.sslCa) ? globalThis.String(object.sslCa) : "",
      sslCert: isSet(object.sslCert) ? globalThis.String(object.sslCert) : "",
      sslKey: isSet(object.sslKey) ? globalThis.String(object.sslKey) : "",
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      srv: isSet(object.srv) ? globalThis.Boolean(object.srv) : false,
      authenticationDatabase: isSet(object.authenticationDatabase)
        ? globalThis.String(object.authenticationDatabase)
        : "",
      sid: isSet(object.sid) ? globalThis.String(object.sid) : "",
      serviceName: isSet(object.serviceName) ? globalThis.String(object.serviceName) : "",
      sshHost: isSet(object.sshHost) ? globalThis.String(object.sshHost) : "",
      sshPort: isSet(object.sshPort) ? globalThis.String(object.sshPort) : "",
      sshUser: isSet(object.sshUser) ? globalThis.String(object.sshUser) : "",
      sshPassword: isSet(object.sshPassword) ? globalThis.String(object.sshPassword) : "",
      sshPrivateKey: isSet(object.sshPrivateKey) ? globalThis.String(object.sshPrivateKey) : "",
      authenticationPrivateKey: isSet(object.authenticationPrivateKey)
        ? globalThis.String(object.authenticationPrivateKey)
        : "",
      externalSecret: isSet(object.externalSecret)
        ? DataSourceExternalSecret.fromJSON(object.externalSecret)
        : undefined,
      authenticationType: isSet(object.authenticationType)
        ? dataSource_AuthenticationTypeFromJSON(object.authenticationType)
        : DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED,
      saslConfig: isSet(object.saslConfig) ? SASLConfig.fromJSON(object.saslConfig) : undefined,
      additionalAddresses: globalThis.Array.isArray(object?.additionalAddresses)
        ? object.additionalAddresses.map((e: any) => DataSource_Address.fromJSON(e))
        : [],
      replicaSet: isSet(object.replicaSet) ? globalThis.String(object.replicaSet) : "",
      directConnection: isSet(object.directConnection) ? globalThis.Boolean(object.directConnection) : false,
      region: isSet(object.region) ? globalThis.String(object.region) : "",
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      warehouseId: isSet(object.warehouseId) ? globalThis.String(object.warehouseId) : "",
      masterName: isSet(object.masterName) ? globalThis.String(object.masterName) : "",
      masterUsername: isSet(object.masterUsername) ? globalThis.String(object.masterUsername) : "",
      masterPassword: isSet(object.masterPassword) ? globalThis.String(object.masterPassword) : "",
      redisType: isSet(object.redisType)
        ? dataSource_RedisTypeFromJSON(object.redisType)
        : DataSource_RedisType.REDIS_TYPE_UNSPECIFIED,
    };
  },

  toJSON(message: DataSource): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== DataSourceType.DATA_SOURCE_UNSPECIFIED) {
      obj.type = dataSourceTypeToJSON(message.type);
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.useSsl === true) {
      obj.useSsl = message.useSsl;
    }
    if (message.sslCa !== "") {
      obj.sslCa = message.sslCa;
    }
    if (message.sslCert !== "") {
      obj.sslCert = message.sslCert;
    }
    if (message.sslKey !== "") {
      obj.sslKey = message.sslKey;
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.srv === true) {
      obj.srv = message.srv;
    }
    if (message.authenticationDatabase !== "") {
      obj.authenticationDatabase = message.authenticationDatabase;
    }
    if (message.sid !== "") {
      obj.sid = message.sid;
    }
    if (message.serviceName !== "") {
      obj.serviceName = message.serviceName;
    }
    if (message.sshHost !== "") {
      obj.sshHost = message.sshHost;
    }
    if (message.sshPort !== "") {
      obj.sshPort = message.sshPort;
    }
    if (message.sshUser !== "") {
      obj.sshUser = message.sshUser;
    }
    if (message.sshPassword !== "") {
      obj.sshPassword = message.sshPassword;
    }
    if (message.sshPrivateKey !== "") {
      obj.sshPrivateKey = message.sshPrivateKey;
    }
    if (message.authenticationPrivateKey !== "") {
      obj.authenticationPrivateKey = message.authenticationPrivateKey;
    }
    if (message.externalSecret !== undefined) {
      obj.externalSecret = DataSourceExternalSecret.toJSON(message.externalSecret);
    }
    if (message.authenticationType !== DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED) {
      obj.authenticationType = dataSource_AuthenticationTypeToJSON(message.authenticationType);
    }
    if (message.saslConfig !== undefined) {
      obj.saslConfig = SASLConfig.toJSON(message.saslConfig);
    }
    if (message.additionalAddresses?.length) {
      obj.additionalAddresses = message.additionalAddresses.map((e) => DataSource_Address.toJSON(e));
    }
    if (message.replicaSet !== "") {
      obj.replicaSet = message.replicaSet;
    }
    if (message.directConnection === true) {
      obj.directConnection = message.directConnection;
    }
    if (message.region !== "") {
      obj.region = message.region;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.warehouseId !== "") {
      obj.warehouseId = message.warehouseId;
    }
    if (message.masterName !== "") {
      obj.masterName = message.masterName;
    }
    if (message.masterUsername !== "") {
      obj.masterUsername = message.masterUsername;
    }
    if (message.masterPassword !== "") {
      obj.masterPassword = message.masterPassword;
    }
    if (message.redisType !== DataSource_RedisType.REDIS_TYPE_UNSPECIFIED) {
      obj.redisType = dataSource_RedisTypeToJSON(message.redisType);
    }
    return obj;
  },

  create(base?: DeepPartial<DataSource>): DataSource {
    return DataSource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataSource>): DataSource {
    const message = createBaseDataSource();
    message.id = object.id ?? "";
    message.type = object.type ?? DataSourceType.DATA_SOURCE_UNSPECIFIED;
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.useSsl = object.useSsl ?? false;
    message.sslCa = object.sslCa ?? "";
    message.sslCert = object.sslCert ?? "";
    message.sslKey = object.sslKey ?? "";
    message.host = object.host ?? "";
    message.port = object.port ?? "";
    message.database = object.database ?? "";
    message.srv = object.srv ?? false;
    message.authenticationDatabase = object.authenticationDatabase ?? "";
    message.sid = object.sid ?? "";
    message.serviceName = object.serviceName ?? "";
    message.sshHost = object.sshHost ?? "";
    message.sshPort = object.sshPort ?? "";
    message.sshUser = object.sshUser ?? "";
    message.sshPassword = object.sshPassword ?? "";
    message.sshPrivateKey = object.sshPrivateKey ?? "";
    message.authenticationPrivateKey = object.authenticationPrivateKey ?? "";
    message.externalSecret = (object.externalSecret !== undefined && object.externalSecret !== null)
      ? DataSourceExternalSecret.fromPartial(object.externalSecret)
      : undefined;
    message.authenticationType = object.authenticationType ?? DataSource_AuthenticationType.AUTHENTICATION_UNSPECIFIED;
    message.saslConfig = (object.saslConfig !== undefined && object.saslConfig !== null)
      ? SASLConfig.fromPartial(object.saslConfig)
      : undefined;
    message.additionalAddresses = object.additionalAddresses?.map((e) => DataSource_Address.fromPartial(e)) || [];
    message.replicaSet = object.replicaSet ?? "";
    message.directConnection = object.directConnection ?? false;
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    message.warehouseId = object.warehouseId ?? "";
    message.masterName = object.masterName ?? "";
    message.masterUsername = object.masterUsername ?? "";
    message.masterPassword = object.masterPassword ?? "";
    message.redisType = object.redisType ?? DataSource_RedisType.REDIS_TYPE_UNSPECIFIED;
    return message;
  },
};

function createBaseDataSource_Address(): DataSource_Address {
  return { host: "", port: "" };
}

export const DataSource_Address = {
  encode(message: DataSource_Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSource_Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSource_Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.port = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSource_Address {
    return {
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      port: isSet(object.port) ? globalThis.String(object.port) : "",
    };
  },

  toJSON(message: DataSource_Address): unknown {
    const obj: any = {};
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    return obj;
  },

  create(base?: DeepPartial<DataSource_Address>): DataSource_Address {
    return DataSource_Address.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataSource_Address>): DataSource_Address {
    const message = createBaseDataSource_Address();
    message.host = object.host ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBaseInstanceResource(): InstanceResource {
  return {
    title: "",
    engine: Engine.ENGINE_UNSPECIFIED,
    engineVersion: "",
    dataSources: [],
    activation: false,
    name: "",
    environment: "",
  };
}

export const InstanceResource = {
  encode(message: InstanceResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.engine !== Engine.ENGINE_UNSPECIFIED) {
      writer.uint32(16).int32(engineToNumber(message.engine));
    }
    if (message.engineVersion !== "") {
      writer.uint32(26).string(message.engineVersion);
    }
    for (const v of message.dataSources) {
      DataSource.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.activation === true) {
      writer.uint32(40).bool(message.activation);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.environment !== "") {
      writer.uint32(58).string(message.environment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstanceResource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstanceResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.engine = engineFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.engineVersion = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dataSources.push(DataSource.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.activation = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.environment = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstanceResource {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      engine: isSet(object.engine) ? engineFromJSON(object.engine) : Engine.ENGINE_UNSPECIFIED,
      engineVersion: isSet(object.engineVersion) ? globalThis.String(object.engineVersion) : "",
      dataSources: globalThis.Array.isArray(object?.dataSources)
        ? object.dataSources.map((e: any) => DataSource.fromJSON(e))
        : [],
      activation: isSet(object.activation) ? globalThis.Boolean(object.activation) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      environment: isSet(object.environment) ? globalThis.String(object.environment) : "",
    };
  },

  toJSON(message: InstanceResource): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.engine !== Engine.ENGINE_UNSPECIFIED) {
      obj.engine = engineToJSON(message.engine);
    }
    if (message.engineVersion !== "") {
      obj.engineVersion = message.engineVersion;
    }
    if (message.dataSources?.length) {
      obj.dataSources = message.dataSources.map((e) => DataSource.toJSON(e));
    }
    if (message.activation === true) {
      obj.activation = message.activation;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    return obj;
  },

  create(base?: DeepPartial<InstanceResource>): InstanceResource {
    return InstanceResource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstanceResource>): InstanceResource {
    const message = createBaseInstanceResource();
    message.title = object.title ?? "";
    message.engine = object.engine ?? Engine.ENGINE_UNSPECIFIED;
    message.engineVersion = object.engineVersion ?? "";
    message.dataSources = object.dataSources?.map((e) => DataSource.fromPartial(e)) || [];
    message.activation = object.activation ?? false;
    message.name = object.name ?? "";
    message.environment = object.environment ?? "";
    return message;
  },
};

function createBaseSASLConfig(): SASLConfig {
  return { krbConfig: undefined };
}

export const SASLConfig = {
  encode(message: SASLConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.krbConfig !== undefined) {
      KerberosConfig.encode(message.krbConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SASLConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSASLConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.krbConfig = KerberosConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SASLConfig {
    return { krbConfig: isSet(object.krbConfig) ? KerberosConfig.fromJSON(object.krbConfig) : undefined };
  },

  toJSON(message: SASLConfig): unknown {
    const obj: any = {};
    if (message.krbConfig !== undefined) {
      obj.krbConfig = KerberosConfig.toJSON(message.krbConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<SASLConfig>): SASLConfig {
    return SASLConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SASLConfig>): SASLConfig {
    const message = createBaseSASLConfig();
    message.krbConfig = (object.krbConfig !== undefined && object.krbConfig !== null)
      ? KerberosConfig.fromPartial(object.krbConfig)
      : undefined;
    return message;
  },
};

function createBaseKerberosConfig(): KerberosConfig {
  return {
    primary: "",
    instance: "",
    realm: "",
    keytab: new Uint8Array(0),
    kdcHost: "",
    kdcPort: "",
    kdcTransportProtocol: "",
  };
}

export const KerberosConfig = {
  encode(message: KerberosConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primary !== "") {
      writer.uint32(10).string(message.primary);
    }
    if (message.instance !== "") {
      writer.uint32(18).string(message.instance);
    }
    if (message.realm !== "") {
      writer.uint32(26).string(message.realm);
    }
    if (message.keytab.length !== 0) {
      writer.uint32(34).bytes(message.keytab);
    }
    if (message.kdcHost !== "") {
      writer.uint32(42).string(message.kdcHost);
    }
    if (message.kdcPort !== "") {
      writer.uint32(50).string(message.kdcPort);
    }
    if (message.kdcTransportProtocol !== "") {
      writer.uint32(58).string(message.kdcTransportProtocol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KerberosConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKerberosConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.primary = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instance = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.realm = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.keytab = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.kdcHost = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.kdcPort = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.kdcTransportProtocol = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KerberosConfig {
    return {
      primary: isSet(object.primary) ? globalThis.String(object.primary) : "",
      instance: isSet(object.instance) ? globalThis.String(object.instance) : "",
      realm: isSet(object.realm) ? globalThis.String(object.realm) : "",
      keytab: isSet(object.keytab) ? bytesFromBase64(object.keytab) : new Uint8Array(0),
      kdcHost: isSet(object.kdcHost) ? globalThis.String(object.kdcHost) : "",
      kdcPort: isSet(object.kdcPort) ? globalThis.String(object.kdcPort) : "",
      kdcTransportProtocol: isSet(object.kdcTransportProtocol) ? globalThis.String(object.kdcTransportProtocol) : "",
    };
  },

  toJSON(message: KerberosConfig): unknown {
    const obj: any = {};
    if (message.primary !== "") {
      obj.primary = message.primary;
    }
    if (message.instance !== "") {
      obj.instance = message.instance;
    }
    if (message.realm !== "") {
      obj.realm = message.realm;
    }
    if (message.keytab.length !== 0) {
      obj.keytab = base64FromBytes(message.keytab);
    }
    if (message.kdcHost !== "") {
      obj.kdcHost = message.kdcHost;
    }
    if (message.kdcPort !== "") {
      obj.kdcPort = message.kdcPort;
    }
    if (message.kdcTransportProtocol !== "") {
      obj.kdcTransportProtocol = message.kdcTransportProtocol;
    }
    return obj;
  },

  create(base?: DeepPartial<KerberosConfig>): KerberosConfig {
    return KerberosConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KerberosConfig>): KerberosConfig {
    const message = createBaseKerberosConfig();
    message.primary = object.primary ?? "";
    message.instance = object.instance ?? "";
    message.realm = object.realm ?? "";
    message.keytab = object.keytab ?? new Uint8Array(0);
    message.kdcHost = object.kdcHost ?? "";
    message.kdcPort = object.kdcPort ?? "";
    message.kdcTransportProtocol = object.kdcTransportProtocol ?? "";
    return message;
  },
};

export type InstanceServiceDefinition = typeof InstanceServiceDefinition;
export const InstanceServiceDefinition = {
  name: "InstanceService",
  fullName: "bytebase.v1.InstanceService",
  methods: {
    getInstance: {
      name: "GetInstance",
      requestType: GetInstanceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          800010: [new Uint8Array([16, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 103, 101, 116])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              24,
              18,
              22,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    listInstances: {
      name: "ListInstances",
      requestType: ListInstancesRequest,
      requestStream: false,
      responseType: ListInstancesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([0])],
          800010: [new Uint8Array([17, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 108, 105, 115, 116])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              52,
              90,
              35,
              18,
              33,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              18,
              13,
              47,
              118,
              49,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
            ]),
          ],
        },
      },
    },
    /** Deprecated. */
    searchInstances: {
      name: "SearchInstances",
      requestType: SearchInstancesRequest,
      requestStream: false,
      responseType: SearchInstancesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([0])],
          800016: [new Uint8Array([2])],
          578365826: [
            new Uint8Array([
              66,
              90,
              42,
              18,
              40,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              58,
              115,
              101,
              97,
              114,
              99,
              104,
              18,
              20,
              47,
              118,
              49,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              58,
              115,
              101,
              97,
              114,
              99,
              104,
            ]),
          ],
        },
      },
    },
    createInstance: {
      name: "CreateInstance",
      requestType: CreateInstanceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([8, 105, 110, 115, 116, 97, 110, 99, 101])],
          800010: [
            new Uint8Array([19, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 99, 114, 101, 97, 116, 101]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              25,
              58,
              8,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              34,
              13,
              47,
              118,
              49,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
            ]),
          ],
        },
      },
    },
    updateInstance: {
      name: "UpdateInstance",
      requestType: UpdateInstanceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            new Uint8Array([
              20,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              44,
              117,
              112,
              100,
              97,
              116,
              101,
              95,
              109,
              97,
              115,
              107,
            ]),
          ],
          800010: [
            new Uint8Array([
              19,
              98,
              98,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              46,
              117,
              112,
              100,
              97,
              116,
              101,
            ]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              43,
              58,
              8,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              50,
              31,
              47,
              118,
              49,
              47,
              123,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              46,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    deleteInstance: {
      name: "DeleteInstance",
      requestType: DeleteInstanceRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          800010: [
            new Uint8Array([
              19,
              98,
              98,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              24,
              42,
              22,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    undeleteInstance: {
      name: "UndeleteInstance",
      requestType: UndeleteInstanceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [
            new Uint8Array([
              21,
              98,
              98,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              46,
              117,
              110,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              36,
              58,
              1,
              42,
              34,
              31,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              58,
              117,
              110,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
        },
      },
    },
    syncInstance: {
      name: "SyncInstance",
      requestType: SyncInstanceRequest,
      requestStream: false,
      responseType: SyncInstanceResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [new Uint8Array([17, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 115, 121, 110, 99])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              32,
              58,
              1,
              42,
              34,
              27,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              58,
              115,
              121,
              110,
              99,
            ]),
          ],
        },
      },
    },
    batchSyncInstances: {
      name: "BatchSyncInstances",
      requestType: BatchSyncInstancesRequest,
      requestStream: false,
      responseType: BatchSyncInstancesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [new Uint8Array([17, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 115, 121, 110, 99])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              28,
              58,
              1,
              42,
              34,
              23,
              47,
              118,
              49,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              58,
              98,
              97,
              116,
              99,
              104,
              83,
              121,
              110,
              99,
            ]),
          ],
        },
      },
    },
    addDataSource: {
      name: "AddDataSource",
      requestType: AddDataSourceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [
            new Uint8Array([
              19,
              98,
              98,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              46,
              117,
              112,
              100,
              97,
              116,
              101,
            ]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              58,
              97,
              100,
              100,
              68,
              97,
              116,
              97,
              83,
              111,
              117,
              114,
              99,
              101,
            ]),
          ],
        },
      },
    },
    removeDataSource: {
      name: "RemoveDataSource",
      requestType: RemoveDataSourceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [
            new Uint8Array([
              19,
              98,
              98,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              46,
              117,
              112,
              100,
              97,
              116,
              101,
            ]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              44,
              58,
              1,
              42,
              34,
              39,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              58,
              114,
              101,
              109,
              111,
              118,
              101,
              68,
              97,
              116,
              97,
              83,
              111,
              117,
              114,
              99,
              101,
            ]),
          ],
        },
      },
    },
    updateDataSource: {
      name: "UpdateDataSource",
      requestType: UpdateDataSourceRequest,
      requestStream: false,
      responseType: Instance,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [
            new Uint8Array([
              19,
              98,
              98,
              46,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              46,
              117,
              112,
              100,
              97,
              116,
              101,
            ]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              44,
              58,
              1,
              42,
              50,
              39,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              58,
              117,
              112,
              100,
              97,
              116,
              101,
              68,
              97,
              116,
              97,
              83,
              111,
              117,
              114,
              99,
              101,
            ]),
          ],
        },
      },
    },
    syncSlowQueries: {
      name: "SyncSlowQueries",
      requestType: SyncSlowQueriesRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          800010: [new Uint8Array([17, 98, 98, 46, 105, 110, 115, 116, 97, 110, 99, 101, 115, 46, 115, 121, 110, 99])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              91,
              58,
              1,
              42,
              90,
              44,
              58,
              1,
              42,
              34,
              39,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              58,
              115,
              121,
              110,
              99,
              83,
              108,
              111,
              119,
              81,
              117,
              101,
              114,
              105,
              101,
              115,
              34,
              40,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              58,
              115,
              121,
              110,
              99,
              83,
              108,
              111,
              119,
              81,
              117,
              101,
              114,
              105,
              101,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
