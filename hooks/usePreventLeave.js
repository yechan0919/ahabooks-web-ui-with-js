import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { sidebarState } from "../states/components";
import { RecoilUtils } from "../utils/recoilUtils";

/**
 *
 */
const usePreventLeave = () => {
  const router = useRouter();

  const [pass, setPass] = useState(false);
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  // side-effect로 리스너를 달아줌.
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeunload);
    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeError", routerChangeError);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeunload);
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off("routeChangeError", routerChangeError);
    };
  }, []);

  // //* 새로고침 및 타 사이트 이동 방지
  const handleBeforeunload = (e) => {
    e.preventDefault();
    e.returnValue = "beforeunload";
  };

  /**
   * 지금 두 번씩 라우트 되는 것이 문제 : throttle 사용할지 고민중
   * @param url
   */
  const routeChangeStart = (url) => {
    //? 다른 url로 가고 / 변경이 있고/ 승인이 안되었다면
    if (confirm("데이터가 저장되지 않습니다. 나가시겠습니까?")) {
      setPass(true);
    }
    // 페이지 벗어나지 못하게 함.
    else {
      Router.events.emit("routeChangeError");
      throw "Abort route change. Please ignore this error.";
    }
  };

  const routerChangeError = () => {};

  return [pass, setPass];
};

export default usePreventLeave;
