import {FC, ReactNode} from "react";
import SideMenu from "./sideMenu/SideMenu";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const PageLayout: FC<{active: string, children: ReactNode}> = ({active, children}) => {
  return (
    <div className="d-flex flex-column">
      <div>
        <Header/>
        <div className="app-wrapper d-flex flex-column">
          <SideMenu active={active}/>
          <div className="m-5">
            {children}
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}


export default PageLayout;
