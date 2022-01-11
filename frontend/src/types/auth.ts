// Auth

// For now, a single user's auth provider should either belong to BYTEBASE or GITLAB_SELF_HOST
export type AuthProviderType = "GITLAB_SELF_HOST" | "BYTEBASE" | "";

export type LoginInfo = {
  AuthPro: AuthProviderType;
  payload: GitlabLoginInfo | BytebaseLoginInfo;
};

export type SignupInfo = {
  email: string;
  password: string;
  name: string;
};

export type ActivateInfo = {
  email: string;
  password: string;
  name: string;
  token: string;
};

export type BytebaseLoginInfo = {
  email: string;
  password: string;
};

export type AuthProvider = {
  type: AuthProviderType;
  name: string;
  instanceUrl: string;
  applicationId: string;
  secret: string;
};

export const EmptyAuthProvider: AuthProvider = {
  type: "",
  name: "",
  instanceUrl: "",
  applicationId: "",
  secret: "",
};

export type GitlabLoginInfo = {
  applicationId: string;
  secret: string;
  instanceUrl: string;
  accessToken: string;
};
