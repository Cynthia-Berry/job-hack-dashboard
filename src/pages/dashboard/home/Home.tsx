import {useEffect} from "react";
import {batch} from "react-redux";
import Body from "./Body";
import {RootState} from "../../../store/store";
import PageLayout from "../../../components/layouts/PageLayout";
import {getProfile} from "../../../store/actions/profile.action";
import {Loading, menuType} from "../../../utils/helpers/constants";
import {useAppDispatch} from "../../../components/hooks/useAppDispatch";
import {useAppSelector} from "../../../components/hooks/useAppSelector";


const Home = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state: RootState) => state.profileReducer);
  const loadedState = profile.loadingProfile !== Loading.SUCCESS;
  // const store = useAppSelector((state: RootState) => state)
  // const {profile, auth} = {profile: store.profileReducer, auth: store.authReducer};
  console.log(profile)

  useEffect(() => {
    batch(() => {
      if(profile.loadingProfile !== Loading.SUCCESS) dispatch(getProfile());
    })
  }, [dispatch, profile.loadingProfile])


  return (
    <PageLayout active={menuType.HOME}>
      {loadedState ?
        <div className="h-100 d-flex align-items-center justify-content-center">
          <h6 className="text-center top-50 position-absolute">Loading...</h6>
        </div>
        : <Body profile={profile.profile}/>
      }
    </PageLayout>
  )
}

export default Home;