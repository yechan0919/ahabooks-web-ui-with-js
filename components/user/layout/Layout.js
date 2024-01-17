import React from "react";
import Navs from "components/user/navs/Navs";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navs />
      <div className="w-full h-full pt-[72px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
