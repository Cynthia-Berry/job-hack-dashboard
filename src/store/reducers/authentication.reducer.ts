import {Loading} from "../../utils/helpers/constants";
import * as AuthConstants from "../constants/auth.constant"
import {AuthenticationStateType} from "../stateTypes/authentication.stateType";

const authenticationState: AuthenticationStateType = {
    isAuthenticated: false,
    userId: "",
};

const authReducer = (state = authenticationState, action: { type: any; payload: { id: string; }; }) => {
    switch (action.type) {
        case AuthConstants.LOGIN_REQUEST:
            return {...state, loginStatus: Loading.FETCHING};

        case AuthConstants.LOGIN_SUCCESS:
            return {...state, userId: action.payload.id};

        case AuthConstants.LOGIN_FAILURE:
            return {...state, loginStatus: Loading.ERROR};

        case AuthConstants.SET_LOGGED_IN_USER:
            return {...state, isAuthenticated: true};

        default:
            return state;
    }
};

export default authReducer;