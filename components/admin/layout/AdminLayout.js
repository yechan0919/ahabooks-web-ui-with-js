import ContentLayout from "./ContentLayout";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useRecoilState } from "recoil";
import { sidebarState, toggleState } from "../../../states/components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const [toggle, setToggle] = useRecoilState(toggleState);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const _token =
      typeof window !== "undefined"
        ? sessionStorage.getItem("accessToken")
        : null;
    const _userName =
      typeof window !== "undefined" ? sessionStorage.getItem("userName") : null;
    const _userId =
      typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
    const _role =
      typeof window !== "undefined" ? sessionStorage.getItem("role") : null;
    // if (!_token || !_userName || _role !== "ADMIN") {
    //   router.push("/app/login");
    // }
  };

  return (
    <div>
      {/* GnB */}
      <Sidebar />
      {/* Main */}
      <div className={"page-wrapper"}>
        <Header />
        <ContentLayout>{children}</ContentLayout>
      </div>
    </div>
  );
};

export default AdminLayout;
