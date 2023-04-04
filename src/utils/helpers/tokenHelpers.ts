import CookieHelper from "./cookieHelper";
import {Configs} from "./constants";

const TokenHelper = {
  checkIfLoggedIn() {
    const TOKEN = CookieHelper.get(Configs.KEY);
    return !!TOKEN;
  },

  saveToken(token: string) {
    CookieHelper.set(Configs.KEY, token, Configs.COOKIE_EXPIRY_PERIOD);
    localStorage.setItem(Configs.KEY, token);
  },

  getToken() {
    return CookieHelper.get(Configs.KEY);
  },

  saveUserId(userId: string) {
    CookieHelper.set(Configs.USER_ID, userId, Configs.COOKIE_EXPIRY_PERIOD);
  },

  getUserId() {
    return CookieHelper.get(Configs.USER_ID);
  },
};

export default TokenHelper;
