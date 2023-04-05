import {NavLink, useNavigate} from "react-router-dom";
import {FC} from "react";
import {AdminProfile} from "../../../models/Profile";
import Logo from "../../../assets/images/pngs/gravatar.png";
import Gravatar from "../../../assets/images/pngs/gravatar.png";

type Props = { profile: AdminProfile }

const HeaderNav: FC<Props> = ({profile}) => {
  const navigate = useNavigate();
  const goToProfile = () => navigate('/profile');


  return (
    <div className="header navbar justify-content-between navbar-expand-lg">
      <div className="header-logo d-none d-lg-block">
        <NavLink to="dashboard.html" className="header-logo-link">
          <img src={Logo} alt="Job Hack Logo"  width={50} height={50}/>
        </NavLink>
      </div>
      <div className="header-end d-flex align-items-center">
        <i className="zmdi zmdi-notifications-active zmdi-hc-lg"/>
        <div className="header-end-profile d-flex align-items-end ms-4 px-0 pointer-event">
          <img onClick={goToProfile} src={Gravatar} alt="Profile" className="rounded-circle" width={40} height={40}/>
        </div>
        <button className="navbar-toggler d-flex justify-content-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default HeaderNav;
