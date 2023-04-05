import HeaderNav from "./HeaderNav";
import {useAppSelector} from "../../hooks/useAppSelector";
import {RootState} from "../../../store/store";


const Header = () => {
  const profile = useAppSelector((state: RootState) => state.profileReducer);


  return (<HeaderNav profile={profile.profile}/>);
}

export default Header;
