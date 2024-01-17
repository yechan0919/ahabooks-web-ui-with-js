import Link from "next/link";
import { FiCircle } from "react-icons/fi";
import { sidebarState, toggleState } from "states/components";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { RecoilUtils } from "utils/recoilUtils";
import { MenuObj, icon } from "../../../constant/menu-contant";
import _ from "lodash";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const [toggle, setToggle] = useRecoilState(toggleState);
  const [menuObj, setMenuObj] = useState(Object.keys(MenuObj));
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setSelectedMenu(sidebar.menu);
    setLoading(true);
  }, [sidebar.menu]);

  useEffect(() => {
    const pathname = router.pathname.split("/");

    RecoilUtils.clickMenu(pathname[2], "", sidebar, setSidebar, true);
  }, [router.pathname]);

  const goPage = (id) => {
    router.push(`/admin/${id}`);
  };

  const logout = async () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("loginToken");
    router.push(
      `https://kauth.kakao.com/oauth/logout?client_id=` +
        process.env.NEXT_PUBLIC_CLIENT_ID +
        `&logout_redirect_uri=` +
        process.env.NEXT_PUBLIC_DOMAIN +
        `/oauth2/logout`
    );
  };

  return (
    <div className={"left-sidenav"}>
      {/* brand */}
      <div className="brand">
        <Link href="/app/home">
          <span className="logo h-full">
            <img src="/images/logo.png" className="h-full object-contain" />
          </span>
        </Link>
      </div>
      {/* Main */}
      <div className="flex flex-col justify-between flex-1">
        {/* menu wrapper */}
        <div className="p-[16px]">
          <ul className="menu-ul">
            {/* menu label */}
            <li className="menu-label">Main</li>
            <hr></hr>
            {/* menu */}
            {menuObj.map((element, index) => {
              if (index < menuObj.length - 2) {
                return (
                  <li key={element}>
                    <a
                      className={
                        loading && selectedMenu === MenuObj[element].id
                          ? "menu active"
                          : "menu"
                      }
                      onClick={() => goPage(MenuObj[element].id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={MenuObj[element].iconPath}
                          // d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>

                      <span>{MenuObj[element].name}</span>
                    </a>
                  </li>
                );
              }
            })}
            <hr className="hr-dashed hr-menu"></hr>
            {menuObj.map((element, index) => {
              if (menuObj.length - 3 < index) {
                return (
                  <li key={element}>
                    <a
                      className={
                        loading && selectedMenu === MenuObj[element].id
                          ? "menu active"
                          : "menu"
                      }
                      onClick={
                        MenuObj[element].id === "logout"
                          ? logout
                          : () => goPage(MenuObj[element].id)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={MenuObj[element].iconPath}
                          // d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>

                      <span>{MenuObj[element].name}</span>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        {/* <div className='p-[16px]'>
          <a className='rounded-full menu profile-wrapper'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>

            <span className='flex-1 text-center'>관리자</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
