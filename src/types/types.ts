import { JwtPayload } from "jwt-decode";

export interface UserState {
  id: string;
  username: string;
  token: string;
}

export interface UserStructure extends UserState {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  sub: string;
  username: string;
}

export enum Routes {
  login = "/login",
}
