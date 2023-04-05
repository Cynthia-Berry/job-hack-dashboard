import {Loading} from "../../utils/helpers/constants";
import * as AuthConstants from "../constants/auth.constant"
import {AuthDataType} from "../storeDataType/auth.data.type";


const authenticationState: AuthDataType = {
  isAuthenticated: false,
  userId: "",
  loginStatus: ""
};

const authReducer = (state = authenticationState, action: { type: any; payload: any }): AuthDataType => {
  switch(action.type) {
    case AuthConstants.LOGIN_REQUEST:
      return {...state, loginStatus: Loading.FETCHING};

    case AuthConstants.LOGIN_SUCCESS:
      return {...state, isAuthenticated: action.payload};

    case AuthConstants.LOGIN_FAILURE:
      return {...state, loginStatus: Loading.ERROR};

    case AuthConstants.SET_LOGGED_IN_USER:
      return {...state, isAuthenticated: action.payload};

    case AuthConstants.LOG_OUT:
      console.log(action.payload)
      return {...state, isAuthenticated: false};

    default:
      return state;
  }
};

export default authReducer;