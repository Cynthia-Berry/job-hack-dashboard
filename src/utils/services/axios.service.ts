import axios from "axios";
import CacheHelper from "../helpers/cacheHelper";
import TokenHelpers from "../helpers/tokenHelpers";
import CookieHelper from "../helpers/cookieHelper";
import {Configs, GeneralAppInfo} from "../helpers/constants";


const instance = axios.create({
  baseURL: GeneralAppInfo.BASE_URL,
});

instance.interceptors.request.use(config => {
  let token = TokenHelpers.getToken(), authorization = `JWT ${token}`, contentType = 'application/json';
  if(TokenHelpers.checkIfLoggedIn()) {
    config.headers['Authorization'] = authorization;
    config.headers['Content-Type'] = contentType;
  } else config.headers['Content-Type'] = contentType;
  return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(response => response, error => {
  let token = TokenHelpers.getToken();
  if(error.response.status === 403) window.location.href = '/403';
  else if(error.response.status === 401 && token) {
    CookieHelper.remove(Configs.KEY);
    CacheHelper.clear();
    window.location.href = '/auth/login';
  } else return error.response;
});

export {instance};