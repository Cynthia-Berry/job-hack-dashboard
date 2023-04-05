import {instance as Axios} from "./axios.service";

const ProfileService = {
  getProfile(id: string){
    return Axios({
      method: "GET",
      url: `/admin-profile/${id}`
    })
  }
};

export default ProfileService;