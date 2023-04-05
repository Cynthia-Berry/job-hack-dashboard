import {instance as Axios} from "./axios.service";
import {AdminLogin} from "../../models/Authentication";

const AuthService = {
  login(payload: AdminLogin) {
    return Axios({
     method: 'POST',
      url: `admin/login`,
      data: payload,
    })
  }
};

export default AuthService;