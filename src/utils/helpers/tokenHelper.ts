import {Configs} from "./constants";
import {Role} from "../../models/Enums";
import CookieHelper from "./cookieHelper";

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
    CookieHelper.set(Configs.USER_KEY, userId, Configs.COOKIE_EXPIRY_PERIOD);
  },

  getUserId() {
    return CookieHelper.get(Configs.USER_KEY);
  },

  saveUserRole(role: Role) {
    CookieHelper.set(Configs.USER_ROLE, role, Configs.COOKIE_EXPIRY_PERIOD);
  },

  getUserRole() {
    return CookieHelper.get(Configs.USER_ROLE);
  },

  saveAdminId(adminId: string) {
    CookieHelper.set(Configs.ADMIN_ID, adminId, Configs.COOKIE_EXPIRY_PERIOD);
  },

  getAdminId() {
    return CookieHelper.get(Configs.ADMIN_ID);
  },
};

export default TokenHelper;
