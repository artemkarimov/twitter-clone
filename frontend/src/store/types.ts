export interface AuthState {
  user: string | null;
  authenticated: boolean;
}

export interface LoginData {
  login: string;
  password: string;
}
