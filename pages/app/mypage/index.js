import HeadTitle from "../../../components/common/HeadTitle";
import { useEffect, useState } from "react";
import { AccountService } from "../../../services/AccountService";
import { PayService } from "../../../services/payService";
import { DateUtils } from "../../../utils/DateUtils";

export default function Mypage() {
  const [infoToggle, setInfoToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [paymentList, setPaymentList] = useState([]);
  const [userName, setUserName] = useState();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const _userId = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");
    if (_userId && userName) {
      getUserInfo(_userId);
      getPaymentList(_userId);
      setUserName(userName);
    } else {
      alert("재로그인해주세요.");
      logout();
    }
  }, []);

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

  const getPaymentList = async (userId) => {
    const { data } = await PayService.getPaymentList(userId);
    if (data) {
      setPaymentList(data);
    }
  };

  const getUserInfo = async (userId) => {
    const { data } = await AccountService.getAccountDetail(userId);
    setNewPhone(data.phone);
    setNewEmail(data.email);
    setUserInfo(data);
  };

  const updateInfo = async (name) => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (userId) {
        if (name === "phone") {
          const res = await AccountService.updateAccount(userId, {
            phone: newPhone,
          });
        } else if (name === "email") {
          const res = await AccountService.updateAccount(userId, {
            email: newEmail,
          });
        }
        alert("저장되었습니다!");
      } else {
        alert("유저 아이디가 존재하지 않습니다.");
      }
    } catch {}
  };

  return (
    <div className={"h-full flex flex-col items-center"}>
      <HeadTitle title={"마이페이지"} />
      <div className={"h-full max-w-[40rem] gap-10 w-full flex flex-col"}>
        <div className={"text-2xl font-bold pl-8 mt-16 mb-6"}>
          안녕하세요, {userName} 님!
        </div>
        {userInfo.subscriptionStatus &&
        userInfo.subscriptionStatus !== "UNSUBSCRIBE" ? (
          <div
            className={
              "h-full flex flex-col gap-2 py-6 bg-[#FCF9F1] items-center"
            }
          >
            <p className={"text-xl"}>
              {userInfo.subscriptionStatus === "YEARLY"
                ? "연 정기구독 서비스 이용중입니다."
                : "월 정기구독 서비스 이용중입니다."}
            </p>
            <p className={"text-gray-400"}>
              다음 결제일:{" "}
              {userInfo.subscriptionStatus === "YEARLY"
                ? DateUtils.getDateString(
                    new Date(userInfo.subscriptionDeadline)
                  )
                : DateUtils.getDateString(
                    new Date(userInfo.subscriptionDeadline)
                  )}
            </p>
          </div>
        ) : (
          <div
            className={
              "h-full flex flex-col gap-2 py-6 bg-[#FCF9F1] items-center"
            }
          >
            <p className={"text-xl"}>정기구독 서비스를 이용하지 않습니다.</p>
            <p className={"text-gray-400"}></p>
          </div>
        )}
        <div className={"flex flex-col gap-4 pb-24 px-4 lg:px-0"}>
          <div className={"border rounded-md border-gray-200 shadow-lg"}>
            {/* 버튼 */}
            <button
              className={
                "w-full h-12 flex justify-between px-6 items-center text-gray-500"
              }
              onClick={() => setInfoToggle(!infoToggle)}
            >
              <div>개인정보 수정</div>
              <div className={"mt-1"}>
                {infoToggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
            </button>
            <div
              className={
                "w-full px-6 py-6 flex flex-col gap-8 overflow-hidden transition delay-100 duration-150 " +
                (infoToggle ? "h-64" : "hidden")
              }
            >
              {/* 휴대폰 번호 */}
              <div className={"flex flex-col gap-2"}>
                <p className={"text-md text-gray-500"}>휴대폰 번호</p>
                <div className={"flex flex-row gap-4 items-center"}>
                  <input
                    className={
                      "bg-gray-100 h-12 flex-1 border border-gray-300 px-6 rounded-sm"
                    }
                    placeholder={"휴대폰 번호를 입력하세요(- 포함)"}
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                  />
                  <button
                    className={
                      "bg-yellow-200 w-24 h-10 border border-gray-200 rounded-sm"
                    }
                    onClick={() => updateInfo("phone")}
                  >
                    수정하기
                  </button>
                </div>
              </div>
              <div className={"flex flex-col gap-2"}>
                <p className={"text-md text-gray-500"}>이메일</p>
                <div className={"flex flex-row gap-4 items-center"}>
                  <input
                    className={
                      "bg-gray-100 h-12 flex-1 border border-gray-300 px-6 rounded-sm"
                    }
                    placeholder={"이메일 주소를 입력하세요."}
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                  <button
                    className={
                      "bg-yellow-200 w-24 h-10 border border-gray-200 rounded-sm"
                    }
                    onClick={() => updateInfo("email")}
                  >
                    수정하기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={"border rounded-md border-gray-200 shadow-lg"}>
            {/* 버튼 */}
            <button
              className={
                "w-full h-12 flex justify-between px-6 items-center text-gray-500"
              }
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <div>결제내역 확인</div>
              <div className={"mt-1"}>
                {paymentToggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
            </button>
            <div
              className={
                "w-full flex-col px-6 gap-3 pt-4 pb-6 flex h-96 overflow-scroll " +
                (paymentToggle ? "" : "hidden")
              }
            >
              {paymentList &&
                paymentList.length > 0 &&
                paymentList.map((element, index) => {
                  return (
                    <div
                      className={
                        "w-full h-18 flex flex-col gap-2 bg-gray-100 border border-gray-300 shadow-ld px-6 py-2"
                      }
                    >
                      <div className={"text-lg"}>
                        {element.amount === 108000
                          ? "연 정기구독"
                          : "월 정기구독"}
                      </div>
                      <div
                        className={"flex flex-row justify-between font-thin"}
                      >
                        <div>
                          {/*결제일(사용일){" "}*/}
                          {new Date(element.createdAt).getUTCFullYear()}.{" "}
                          {new Date(element.createdAt).getMonth() + 1}.{" "}
                          {new Date(element.createdAt).getDate()}
                        </div>
                        <div>
                          {element.amount === 108000 ? "108,000" : "9,800"}원
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
