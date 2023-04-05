import {Dispatch} from "redux";
import {AdminProfile} from "../../models/Profile";
import ActionCreator, {actionType} from "../../utils/helpers/actionCreator";
import * as ProfileConstants from "../constants/profile.constant";
import ProfileService from "../../utils/services/profile.service";
import TokenHelper from "../../utils/helpers/tokenHelper";
import {ResponseObj} from "../../models/Response";


export const getProfile = () => async (dispatch: Dispatch<actionType<ResponseObj<AdminProfile>>>):Promise<void>  => {
    try {
    dispatch(ActionCreator(ProfileConstants.FETCH_PROFILE_REQUEST, undefined));
    const {data: responseData}= await ProfileService.getProfile(TokenHelper.getUserId());
    dispatch(ActionCreator(ProfileConstants.FETCH_PROFILE_SUCCESS, responseData.data));
  } catch (error) {
    console.log(error)
    dispatch(ActionCreator(ProfileConstants.FETCH_PROFILE_FAILURE, undefined));
  }
}

/****** OR ******/
/*
export function getProfile(): (dispatch: Dispatch<actionType<ResponseObj<AdminProfile>>>) => Promise<void> {
  return async (dispatch: Dispatch<actionType<ResponseObj<AdminProfile>>>) => {
    try {
      dispatch(ActionCreator(ProfileConstants.FETCH_PROFILE_REQUEST, undefined));
      const {data: responseData}= await ProfileService.getProfile(TokenHelper.getUserId());
      console.log(responseData)
      dispatch(ActionCreator(ProfileConstants.FETCH_PROFILE_SUCCESS, responseData.data));
    } catch (error) {
      console.log(error)
      dispatch(ActionCreator(ProfileConstants.FETCH_PROFILE_FAILURE, undefined));
    }
  };
}*/
