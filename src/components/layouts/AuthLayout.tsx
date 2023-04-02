import {FC, ReactNode} from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({children}) => {
  return (
    <div className="page main-signin-wrapper">
      <div className="row">
        <div className="col-md-12 d-flex flex-column align-items-center">
          {children}
        </div>
      </div>
    </div>
  )
};

export default AuthLayout;