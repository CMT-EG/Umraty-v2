export type LoginAuth = {
  sendValues: {
    phone?: string;
  };
};

export type ActivatePhoneAuth = {
  otp?: string;
};

export type AuthUser = {
  email: string;
  firstName: string;
  id?: string;
  type: string;
  lastName: string;
  phone: string;
  picture?: string;
};

export type ReSendActivateState = {
  message: string;
};

export type SetNewPasswordAuth = {
  sendValues: {
    token?: string;
    otp?: string;
    phone?: string;
    phoneCode?: string;
    email?: string;
    password?: string;
    license?: string;
    type?: string;
  };
  type: string;
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
