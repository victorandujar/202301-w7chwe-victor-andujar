export interface UserState {
  id: string;
  username: string;
  token: string;
}

export interface UserStructure extends UserState {
  isLogged: boolean;
}
