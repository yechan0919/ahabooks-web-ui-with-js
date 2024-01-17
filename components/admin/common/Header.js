import { sidebarState, toggleState } from "../../../states/components";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { RecoilUtils } from "../../../utils/recoilUtils";

export default function Header() {
  const [toggle, setToggle] = useRecoilState(toggleState);

  const toggleSidebar = () => {
    RecoilUtils.toggleEvent("sidebar", toggle, setToggle);
  };

  return (
    <div className="w-full z-[1001] h-[52px]">
      <nav className="navbar-custom ">
        <ul className="pl-0 mt-0 mb-0 list-none h-[52px] flex flex-row">
          <li className="h-full">
            <button className="nav-link" onClick={() => toggleSidebar()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </li>
        </ul>
        {/* 알림 */}
        {/*<ul className="pl-0 mt-0 mb-0 list-none h-[52px] flex flex-row">*/}
        {/*  <li className="h-full">*/}
        {/*    <button className="nav-link">*/}
        {/*      <svg*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*        fill="none"*/}
        {/*        viewBox="0 0 24 24"*/}
        {/*        strokeWidth={1.5}*/}
        {/*        stroke="currentColor"*/}
        {/*        className="w-6 h-6"*/}
        {/*      >*/}
        {/*        <path*/}
        {/*          strokeLinecap="round"*/}
        {/*          strokeLinejoin="round"*/}
        {/*          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"*/}
        {/*        />*/}
        {/*      </svg>*/}
        {/*      <span className="text-white badge bg-danger rounded-pill noti-icon-badge">*/}
        {/*        2*/}
        {/*      </span>*/}
        {/*    </button>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </nav>
    </div>
  );
}
