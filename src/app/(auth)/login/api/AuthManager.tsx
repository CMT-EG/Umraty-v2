import { ActivatePhoneAuth, AuthState, LoginAuth } from "./AuthTypes";
import axios from "axios";
import _ from "lodash";

class AuthManager {
  static async login(body: LoginAuth): Promise<AuthState> {
    return (await axios.post(`/auth/Login`, body.sendValues)).data;
  }

  static async activatePhone(body: ActivatePhoneAuth) {
    return (await axios.post(`/auth/activatePhone`, body)).data;
  }
}

export default AuthManager;
