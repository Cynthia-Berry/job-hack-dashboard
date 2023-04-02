import {NavLink} from "react-router-dom";

const Error401 = () => {
  return (
    <div>
      you are not authenticated kindly
      &nbsp;<NavLink to="/auth/login">LOGIN</NavLink> or
      &nbsp;<NavLink to="/auth/register">REGISTER</NavLink> to access Application
    </div>
  )
};

export default Error401;