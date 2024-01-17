import React, { useEffect, useState } from "react";
import BlackButton from "../../common/button/BlackButton";
import Link from "next/link";
import { useRouter } from "next/router";

const Navs = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getToken();
  }, []);

  const goPage = async (url) => {
    router.push(url).then(() => {
      document.body.scrollTo(0, 0);
    });
  };

  const logout = async () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("loginToken");
    router.push(
      `https://kauth.kakao.com/oauth/logout?client_id=` +
        process.env.NEXT_PUBLIC_CLIENT_ID +
        `&logout_redirect_uri=` +
        process.env.NEXT_PUBLIC_DOMAIN +
        `/oauth2/logout`
    );
  };

  const getToken = async () => {
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
    setUserName(_userName ? _userName : "");
    setUserId(_userId ? _userId : 0);
    setToken(_token ? _userId : "");
    setRole(_role ? _role : "");
  };

  return (
    <nav className="h-[72px] w-full border-b border-[#E2E2E2] fixed bg-white z-[100]">
      <div className="h-full mx-8 lg:mx-auto lg:px-20 xl:max-w-[80rem] 2xl:max-w-[120rem]">
        <div className="flex justify-between" style={{ height: "72px" }}>
          <div className="flex items-center ">
            <button
              onClick={() => goPage("/app/home")}
              className="mr-[24px] flex items-center"
            >
              <div>
                <img
                  src="/images/logo2.png"
                  className="h-[48px] lg:h-[72px] object-contain cursor-pointer"
                />
              </div>
            </button>
          </div>
          {token !== "" && userId !== 0 ? (
            <div className="flex items-center gap-4 lg:gap-8">
              <p className="text-sm lg:text-base">
                반갑습니다, <span className={"text-[#EC6310]"}>{userName}</span>
                님
              </p>
              {role === "ADMIN" ? (
                <Link
                  href={process.env.NEXT_PUBLIC_DOMAIN + "/admin/dashboard"}
                >
                  <button className="text-sm lg:text-base bg-blue-400 text-bold text-white px-4 py-2 rounded-md">
                    관리
                  </button>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => goPage("/app/payment")}
                    className="text-sm lg:text-base"
                  >
                    구독
                    {/*및 결제*/}
                  </button>
                  <button
                    onClick={() => goPage("/app/mypage")}
                    className="text-sm lg:text-base"
                  >
                    마이페이지
                  </button>
                </>
              )}

              <button
                onClick={logout}
                className="text-sm lg:text-base bg-black text-bold text-white px-4 py-2 rounded-md"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 lg:gap-8">
              <button
                onClick={() => goPage("/app/payment")}
                className="text-sm lg:text-base"
              >
                구독
                {/*및 결제*/}
              </button>
              <button
                onClick={() => goPage("/app/login")}
                className="text-sm lg:text-base bg-black text-bold text-white px-4 py-2 rounded-md"
              >
                로그인
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navs;
