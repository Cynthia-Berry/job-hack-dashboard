import {menuType} from "../../../utils/helpers/constants";
import PageLayout from "../../../components/layouts/PageLayout";

const Profile = () => {
  return(
    <PageLayout active={menuType.PROFILE}>
      <h1>MY profile</h1>
    </PageLayout>
    )
};

export default Profile;