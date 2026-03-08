export interface User {
  id: string;
  email: string;
  fullname: string;
  role: string;
}

export interface Credentials {
  token: string;
  expiration: Date;
}

export interface CredentialsToken {
  sub: string;
  email: string;
  name: string;
  role: string;
}