import {getYear} from "../../../utils/helpers/logicHelper";
import {GeneralAppInfo} from "../../../utils/helpers/constants";

const Footer = () =>  (
  <div className="main-footer text-center">
    <div className="container">
      <div className="row row-sm">
        <div className="col-md-12">
            <span>Copyright © {getYear()}
              <a href="https://www.mytruq.com/"> {GeneralAppInfo.APP_NAME}</a>.&nbsp;All rights reserved.
            </span>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
