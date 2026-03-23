export interface InitialUser {
    user : User;
    isAuthenticated : boolean;
    error : string | null;
    setCookies : (credentials: string) => void;
    dispatch : React.ActionDispatch<[{type: string; payload?: any}]>;
}

export interface User {
    id: string;
    email: string;
    fullname: string;
    role: string;
}

export interface LoginUser{
    email: string;
    password: string;
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

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repassword: string;
}

export interface AuthState {
    user : User;
    isAuthenticated : boolean;
    error : string | null;
}