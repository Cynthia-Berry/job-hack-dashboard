import {getYear} from "../../../utils/helpers/logicHelper";
import {GeneralAppInfo} from "../../../utils/helpers/constants";

const Footer = () =>  (
  <footer className="main-footer ps-5 w-100">
    <div className="container-fluid">
      <div className="row row-sm ps-5">
        <div className="col-md-12 ps-5">
            <span>
              Job Hack Dashboard by <a href="mailto:nwakaemecynthia@gmail.com">nwakaemecynthia@gmail.com</a>.
              Copyright © {getYear()}
              <a href="https://www.mytruq.com/"> {GeneralAppInfo.APP_NAME}</a>.&nbsp;All rights reserved.
            </span>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
