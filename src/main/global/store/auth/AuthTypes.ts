export type AuthUser = {
  email: string;
  firstName: string;
  id?: string;
  type: string;
  lastName: string;
  phone: string;
  picture?: string;
};

export type AuthState = {
  token: string | null;
  message: string | null;
  user: AuthUser | null;
};

export type AuthActions = {
  setToken: (token: string) => void;
  setMessage: (message: string) => void;
  setUser: (user: AuthUser) => void;
  logout: () => void;
  setLoginData: (data: AuthState) => void;
};
