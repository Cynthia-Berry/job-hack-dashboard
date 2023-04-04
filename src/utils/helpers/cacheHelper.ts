import encryptHelper from "./encryptHelper";

const CacheHelper = {
  get: (key: any) => encryptHelper.decrypt(localStorage.getItem(key)),

  set: (key: string, data: any) => {
    const dataEncrypted = encryptHelper.encrypt(data);
    if(typeof dataEncrypted === "string") {
      localStorage.setItem(key, dataEncrypted);
    }
  },

  remove: (key: string) => localStorage.removeItem(key),

  clear: () => localStorage.clear()
};

export default CacheHelper;
