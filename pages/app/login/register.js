import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AccountService } from "../../../services/AccountService";
import { useRecoilState } from "recoil";
import { loginUserState } from "../../../states/loginUser";

/**
 * 카카오톡 로그인 > 신규 유저일 경우 회원가입 창
 */
export default function Register() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    id: typeof window !== "undefined" ? sessionStorage.getItem("userId") : null,
    name: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
  });

  useEffect(() => {
    const _loginInfo = { ...loginInfo };
    if (router.query.nickname) {
      _loginInfo.name = router.query.nickname;
    }
    if (router.query.email) {
      _loginInfo.email = router.query.email;
    }
    setLoginInfo(_loginInfo);
  }, [router.query]);

  const onChangeInfo = async (e) => {
    const cp = { ...loginInfo };
    cp[e.target.name] = e.target.value;
    setLoginInfo(cp);
  };

  const saveAccount = async () => {
    if (loginInfo.name === "") {
      alert("이름을 입력해주세요.");
    } else if (
      loginInfo.phone1 === "" ||
      loginInfo.phone2 === "" ||
      loginInfo.phone3 === ""
    )
      alert("핸드폰 번호를 입력해주세요.");
    else if (loginInfo.email === "") {
      alert("이메일을 입력해주세요.");
    } else {
      const token =
        typeof window !== "undefined"
          ? sessionStorage.getItem("loginToken")
          : null;
      const id =
        typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
      const res = await AccountService.updateAccount(id, {
        name: loginInfo.name,
        phone:
          loginInfo.phone1 + "-" + loginInfo.phone2 + "-" + loginInfo.phone3,
        email: loginInfo.email,
      });

      sessionStorage.setItem("accessToken", token);
      sessionStorage.setItem("userId", id);
      sessionStorage.setItem("userName", loginInfo.name);
      sessionStorage.setItem("userEmail", loginInfo.email);
      sessionStorage.removeItem("loginToken");
      alert("로그인되었습니다!");
      router.push("/app/home").then(() => {
        window.location.reload();
      });
    }
  };

  const cancelRegister = () => {
    sessionStorage.removeItem("loginToken");
    router.push("/app/home");
  };

  return (
    <div
      className={
        "flex flex-row justify-center items-center mx-auto mx-8 xl:px-96 py-24 2xl:py-60"
      }
    >
      <div
        className={
          "py-16 lg:py-24 max-w-[40rem] px-20 mx-8 lg:mx-auto lg:px-20 w-full border border-gray-100 shadow-xl rounded-2xl h-full flex flex-col gap-12"
        }
      >
        <div className={"h-24 text-center w-full flex justify-center"}>
          <img src={"/images/logo2.png"} className={"h-full"} />
        </div>
        <div className={"gap-1 flex flex-col"}>
          <div className={"font-bold text-xl lg:text-2xl"}>회원가입을 위한</div>
          <div className={"font-bold text-xl lg:text-2xl"}>
            <span className={"text-[#EC6310]"}>추가정보 기입</span>
            <span>이 필요합니다!</span>
          </div>
          {/* 이메일, 이름, 핸드폰*/}
        </div>
        <div className={"flex flex-col"}>
          <div class="grid grid-cols-1 gap-6">
            <label className="block">
              <span class="text-gray-400">이름 (필수)</span>
              <input
                type="text"
                className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border
                    h-10
                    px-4
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="홍길동"
                value={loginInfo.name}
                name="name"
                onChange={(e) => onChangeInfo(e)}
              />
            </label>
            <label className="block">
              <span class="text-gray-400">핸드폰 (필수)</span>
              <div className={"flex flex-row"}>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border
                    h-10
                    px-4
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="010"
                  value={loginInfo.phone1}
                  name="phone1"
                  onChange={(e) => onChangeInfo(e)}
                />
                <div
                  className={
                    "h-10 mt-1 mx-1 flex flex-col items-center justify-center "
                  }
                >
                  <p>-</p>
                </div>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border
                    h-10
                    px-4
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="0000"
                  value={loginInfo.phone2}
                  name="phone2"
                  onChange={(e) => onChangeInfo(e)}
                />
                <div
                  className={
                    "h-10 mt-1 mx-1 flex flex-col items-center justify-center "
                  }
                >
                  <p>-</p>
                </div>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border
                    h-10
                    px-4
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="0000"
                  value={loginInfo.phone3}
                  name="phone3"
                  onChange={(e) => onChangeInfo(e)}
                />
              </div>
            </label>
            <label className="block">
              <span class="text-gray-400">이메일 (필수)</span>
              <input
                type="email"
                className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border
                    h-10
                    px-4
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="john@example.com"
                value={loginInfo.email}
                name="email"
                onChange={(e) => onChangeInfo(e)}
              />
            </label>
          </div>
          <div className={"flex flex-row gap-2 mt-8"}>
            <button
              className={"h-12 w-1/2 bg-gray-100 rounded-md"}
              onClick={cancelRegister}
            >
              취소
            </button>
            <button
              className={"h-12 w-1/2 bg-blue-100 rounded-md"}
              onClick={saveAccount}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
