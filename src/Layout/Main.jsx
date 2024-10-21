import { Outlet, useLocation } from "react-router-dom";
import HomeLayout from "../component/Home/HomeLayout";

import Context from "../Context/Context";
import Footer from "./../component/Footer/Footer";
import Header from "./../component/Header/Header";

const Main = () => {
  const location = useLocation();
  const noFooter = location.pathname.includes("signIn");
  const noFooterAddTools = location.pathname.includes("addTools");
  

  return (
    <div>
      <Context>
        <Header></Header>
        {noFooter || <HomeLayout></HomeLayout>}
        <Outlet></Outlet>
        {noFooter || noFooterAddTools || <Footer></Footer>}
      </Context>
    </div>
  );
};

export default Main;
