import {AdminProfile} from "../../models/Profile";
import {Loading} from "../../utils/helpers/constants";
import {ProfileDataType} from "../storeDataType/profile.data.type";
import * as ProfileConstants from "../constants/profile.constant";


const profileState: ProfileDataType = {
  profile: {} as AdminProfile,
  loadingProfile: ""
};

const profileReducer = (state = profileState, action: { type: any; payload: any; }): ProfileDataType => {
  switch(action.type) {
    case ProfileConstants.FETCH_PROFILE_REQUEST:
      return {...state, loadingProfile: Loading.FETCHING};

    case ProfileConstants.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        loadingProfile: Loading.SUCCESS,
        profile: action.payload,
      };

    case ProfileConstants.FETCH_PROFILE_FAILURE:
      return {...state, loadingProfile: Loading.ERROR}

    default:
      return state;
  }
};

export default profileReducer;