import {NavLink, useNavigate} from "react-router-dom";


const HeaderNav = () => {
  const navigate = useNavigate();
  const goToProfile = () => navigate('/profile');


  return (
    <div className="header navbar justify-content-between navbar-expand-lg">
      <div className="header-logo d-none d-lg-block">
        <NavLink to="dashboard.html" className="header-logo-link">
          {/*<img src={Logo} alt="Super App Logo"/>*/}
        </NavLink>
      </div>
      <div className="header-end d-flex align-items-center">
        <div className="header-end-notif px-sm-4 px-2">
          {/*<img src={NotificationSvg} alt="notifications"/>*/}
        </div>
        <div className="header-end-profile d-flex align-items-center px-md-5 px-0 pointer-event">
          {/*<img onClick={goToProfile} src={Gravatar} alt="Profile"/>*/}
          <div onClick={goToProfile} className="ms-sm-3 ms-1">
            <p className="mb-0 d-lg-none d-block">Welcome Back,</p>
            <p className="mb-0 role-text">Cynthia Ebere</p>
            <p className="mb-0 role-text type">
              {/*{renderDomType()}*/}
            </p>
          </div>
          <div className="header-end-notif px-sm-4 px-2 pointer-event">
            {/*<img src={UpArrowSvg} alt="Exit"/>*/}
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default HeaderNav;
