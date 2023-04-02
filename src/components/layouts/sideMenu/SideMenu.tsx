import {FC} from "react";
import {NavLink} from "react-router-dom";
import {menuType} from "../../../utils/helpers/constants";

const SideMenu: FC<{active: string}> = ({active}) => {

  return (
    <div id="sidebar" className="sidebar d-flex flex-column offcanvas-lg offcanvas-end">
      <div className="sidebar-logo d-lg-none d-flex align-items-center justify-content-between">
        <NavLink to="/">
          <h4>JOB HACK</h4>
          {/*<img src={Logo} alt=""/>*/}
        </NavLink>
        <span className="close-menu" data-bs-target="#sidebar" data-bs-dismiss="offcanvas" aria-label="Close">x</span>
      </div>
      <div className="sidebar-menu d-flex flex-column pt-4">
        <div className={`sidebar-menu-item d-flex mb-2 ${active === menuType.HOME ? 'active' : ''}`}>
          <NavLink className="d-flex align-items-center" to="/">
            {/*<img src={HomeSvg} alt=""/>*/}
            <i className="fa fa-home"/>
            <span className="ms-2">Home</span>
          </NavLink>
        </div>
        <div className={`sidebar-menu-item d-flex mb-2 ${active === menuType.PROFILE ? 'active' : ''}`}>
          <NavLink className="d-flex align-items-center" to="/profile">
            {/*<img src={SettingsSvg} alt=""/>*/}
            <i className="zmdi zmdi-settings"/>
            <span className="ms-2">Profile</span>
          </NavLink>
        </div>
      </div>
    </div>

  );
}

export default SideMenu;
