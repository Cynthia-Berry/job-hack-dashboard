import Cookies from "js-cookie";
import EncryptHelper from "./encryptHelper";

const CookieHelper = {

  get: (key: any) => {
    return EncryptHelper.decrypt(Cookies.get(key));
  },

  set: (key: any, data: any, ex: any) => {
    const dataEncrypted = JSON.parse(JSON.stringify(EncryptHelper.encrypt(data)));
    Cookies.set(key, dataEncrypted, {expires: ex});
  },

  remove: (key: any) => {
    Cookies.remove(key);
  }

}

export default CookieHelper;

