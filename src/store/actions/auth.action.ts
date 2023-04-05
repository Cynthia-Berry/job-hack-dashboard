import { Dispatch } from "redux";
import { Role } from "../../models/Enums";
import TokenHelper from "../../utils/helpers/tokenHelper";
import CacheHelper from "../../utils/helpers/cacheHelper";
import CookieHelper from "../../utils/helpers/cookieHelper";
import {Configs} from "../../utils/helpers/constants";
import ActionCreator, {actionType} from "../../utils/helpers/actionCreator";
import * as AuthConstants from "../constants/auth.constant";

export const setLoggedInUser = (userToken: string, user: { userId: string; role: Role; adminId: string; }) => async () => {
  await TokenHelper.saveToken(userToken);
  await TokenHelper.saveUserId(user.userId);
  await TokenHelper.saveUserRole(user.role);
  await TokenHelper.saveAdminId(user.adminId);
  const token = TokenHelper.checkIfLoggedIn();
  if(!token) {
    await removeLoggedInUser();
  }
};

export const removeLoggedInUser = () => async (dispatch: Dispatch<actionType<any>>) => {
  const isLoggedIn = TokenHelper.checkIfLoggedIn();
  // await AuthService.logout();
  dispatch(ActionCreator(AuthConstants.LOG_OUT));
  dispatch(ActionCreator(AuthConstants.SET_LOGGED_IN_USER, !isLoggedIn));
  CookieHelper.remove(Configs.KEY);
  CookieHelper.remove(Configs.ADMIN_ID);
  CookieHelper.remove(Configs.USER_KEY);
  CookieHelper.remove(Configs.USER_ROLE);
  CacheHelper.clear();
  window.location.href = '/auth/login';
};


