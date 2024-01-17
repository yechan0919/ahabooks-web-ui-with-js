import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HeadTitle from "../../../components/common/HeadTitle";
import { DateUtils } from "../../../utils/DateUtils";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { v4 } from "uuid";
import { PayService } from "../../../services/payService";
import { CreatePaymentRequest } from "../../../typings/Book";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  const [paymentInfo, setPaymentInfo] = useState({
    type: "monthly", // monthly, yearly
    amount: "9800", //9800, 108000
    payment: "card", // card,
    allCheck: false,
    firstCheck: false,
    secondCheck: false,
    thirdCheck: false,
  });

  const pay = async () => {
    try {
      if (checkValidation()) {
        const createPaymentRequest = {
          accountId: Number(sessionStorage.getItem("userId")),
          amount: Number(paymentInfo.amount),
          orderName:
            paymentInfo.type === "monthly"
              ? "아책 월 정기구독 신청"
              : "아책 연 정기구독 신청",
          subscriptionStatus: paymentInfo.type.toUpperCase(),
          customerEmail: sessionStorage.getItem("userEmail"),
          customerName: sessionStorage.getItem("userName"),
          payType: "CARD",
        };

        const { data } = await PayService.sendRequestToServer(
          createPaymentRequest,
          sessionStorage.getItem("accessToken")
        );

        const tossPayments = await loadTossPayments(
          process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY
        );

        await tossPayments
          .requestPayment("카드", {
            amount: data.amount,
            accountId: data.accountId,
            orderId: data.orderId,
            orderName: data.orderName,
            customerName: data.customerName,
            // successUrl: data.successUrl,
            // failUrl: data.failUrl,
            successUrl: "http://3.39.4.193/api/redirect/payment/success",
            failUrl: "http://3.39.4.193/api/redirect/payment/fail",
          })
          .then((response) => {
            router.push("/app/home");
          })
          .catch(function (error) {
            console.log("error", error);
            if (error.code === "USER_CANCEL") {
              alert("결제 고객이 결제창을 닫았을 때 에러 처리");
            } else if (error.code === "INVALID_CARD_COMPANY") {
              alert("유효하지 않은 카드 코드에 대한 에러 처리");
            } else if (error.code === "INVALID_REQUEST") {
              alert(error.message);
            }
          });
        // success, fail일 때 나누어서 받는 걸로 하기.
      }
    } catch {}
  };

  useEffect(() => {
    checkLogin();
    checkPaymentInfo();
  }, [id]);

  const checkValidation = () => {
    return paymentInfo.firstCheck && paymentInfo.secondCheck;
  };

  const onChangeCheck = async (type) => {
    const cp = { ...paymentInfo };

    if (type.includes("Check")) {
      cp[type] = !paymentInfo[type];
      if (type === "allCheck") {
        cp["firstCheck"] = !paymentInfo[type];
        cp["secondCheck"] = !paymentInfo[type];
        cp["thirdCheck"] = !paymentInfo[type];
      }
    }
    if (cp.firstCheck && cp.secondCheck) {
      cp["allCheck"] = true;
    } else {
      cp["allCheck"] = false;
    }
    setPaymentInfo(cp);
  };

  const checkPaymentInfo = async () => {
    const _paymentInfo =
      id === "1"
        ? {
            type: "monthly", // monthly, yearly
            amount: "9800", //9800, 108000
            payment: "card", // card,
            allCheck: false,
            firstCheck: false,
            secondCheck: false,
          }
        : {
            type: "yearly", // monthly, yearly
            amount: "108000", //9800, 108000
            payment: "card", // card,
            allCheck: false,
            firstCheck: false,
            secondCheck: false,
          };

    setPaymentInfo(_paymentInfo);
  };

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
    if (!_token || !_userName) {
      router.push("/app/login");
    }
  };

  return (
    <div className="w-full h-full bg-[#F1F1F1]">
      <HeadTitle title={"아책"} />

      <div className="py-8 mx-8 px-8 lg:px-60 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10 flex flex-col gap-12">
        {/* 결제 정보 */}
        <div className="flex flex-col justify-start gap-8">
          <h1 className="text-lg font-bold">결제 정보</h1>
          <div className="rounded-xl shadow-xl bg-white">
            <div className="rounded-t-xl w-full bg-[#FFF2EC] h-16 flex items-center px-6">
              <span>
                <img
                  src="/images/logo2.png"
                  className="h-[48px] object-contain cursor-pointer mr-2"
                />
              </span>
              멤버십
            </div>
            <div className="px-6 flex flex-col">
              <div
                className={
                  "flex flex-row  justify-between items-center pt-4 px-2"
                }
              >
                <div className={"text-lg"}>결제 금액</div>
                {/*<div>*/}
                {/*  <span className={"text-gray-400"}>(코인 결제) </span>*/}
                {/*  <span className={"text-[#EC6310] font-bold"}>20코인</span>*/}
                {/*</div>*/}

                <div>
                  <span className={"text-gray-400"}>
                    (
                    {paymentInfo.type === "monthly"
                      ? "월 정기구독"
                      : "연 정기구독"}
                    ){" "}
                  </span>
                  <span className={"text-[#EC6310] font-bold"}>
                    ₩ {paymentInfo.type === "monthly" ? "9,800" : "108,000"}
                  </span>
                </div>
              </div>

              {/*<div*/}
              {/*  className={*/}
              {/*    "flex flex-row  justify-between items-center py-4 px-2"*/}
              {/*  }*/}
              {/*>*/}
              {/*  <div></div>*/}
              {/*  <div className={"text-[#EC6310] font-bold"}>₩ 20,000</div>*/}
              {/*</div>*/}

              <div
                className={"border-t-2 border-dashed border-gray-200 mt-4 mx-2"}
              />
              <div
                className={
                  "flex flex-row  justify-between items-center py-4 px-2"
                }
              >
                <div className={"text-lg"}>다음 결제 일자</div>
                <div className={"text-[#EC6310] font-bold"}>
                  {paymentInfo.type === "monthly"
                    ? DateUtils.getDateString(DateUtils.getNextDate("month", 1))
                    : DateUtils.getDateString(DateUtils.getNextDate("year", 1))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 결제 방법 */}
        <div className="flex flex-col justify-start gap-8">
          <h1 className="text-lg font-bold">결제 방법</h1>
          <div className="rounded-xl shadow-xl bg-white">
            <div className="px-6 flex flex-col py-4">
              <div
                className={
                  "flex flex-row gap-4 justify-start items-center py-2 px-2"
                }
              >
                <div>
                  <div
                    className={
                      "w-4 h-4 border border-[#EC6310] p-[2px] rounded-full"
                    }
                  >
                    <div
                      className={"h-full w-full bg-[#EC6310] rounded-full"}
                    ></div>
                  </div>
                </div>

                <div>신용카드 결제</div>
              </div>
            </div>
          </div>
        </div>
        {/* 약관 동의 */}
        <div className="flex flex-col justify-start gap-8">
          <h1 className="text-lg font-bold">약관 동의</h1>
          <div className="rounded-xl shadow-xl bg-white">
            <div className="px-6 flex flex-col">
              {/* 약관 전체 동의 */}
              <div
                className={
                  "flex flex-row gap-4 justify-start items-center px-2 py-6"
                }
              >
                <div>
                  <div
                    className={
                      "w-4 h-4 border p-[2px] rounded-full " +
                      (paymentInfo.allCheck
                        ? "border-[#EC6310]"
                        : "border-gray-400")
                    }
                    onClick={() => onChangeCheck("allCheck")}
                  >
                    <div
                      className={
                        "h-full w-full rounded-full transition delay-50 duration-150 " +
                        (paymentInfo.allCheck ? "bg-[#EC6310]" : "bg-white")
                      }
                    ></div>
                  </div>
                </div>
                <div>약관 전체동의</div>
              </div>
              <div
                className={"border-t-2 border-dashed border-gray-200 mx-2"}
              />
              {/* 약관 동의 */}
              <div className={"flex flex-col py-4"}>
                <div
                  className={
                    "flex flex-row gap-4 justify-start items-center py-4 px-2"
                  }
                >
                  <div>
                    <div
                      className={
                        "w-4 h-4 border p-[2px] " +
                        (paymentInfo.firstCheck
                          ? "border-[#EC6310]"
                          : "border-gray-400")
                      }
                      onClick={() => onChangeCheck("firstCheck")}
                    >
                      <div
                        className={
                          "h-full w-full transition delay-50 duration-150 " +
                          (paymentInfo.firstCheck ? "bg-[#EC6310]" : "bg-white")
                        }
                      ></div>
                    </div>
                  </div>
                  <div>[필수] 개인정보 수집 및 이용동의</div>
                </div>
                <div
                  className={
                    "flex flex-row gap-4 justify-start items-center py-4 px-2"
                  }
                >
                  <div>
                    <div>
                      <div
                        className={
                          "w-4 h-4 border p-[2px] " +
                          (paymentInfo.secondCheck
                            ? "border-[#EC6310]"
                            : "border-gray-400")
                        }
                        onClick={() => onChangeCheck("secondCheck")}
                      >
                        <div
                          className={
                            "h-full w-full transition delay-50 duration-150 " +
                            (paymentInfo.secondCheck
                              ? "bg-[#EC6310]"
                              : "bg-white")
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    [필수] 자동결제 상품 인지 및 취소, 환불, 소득 공제 정책 등
                    상품 구매 정책 동의
                  </div>
                </div>
                <div
                  className={
                    "flex flex-row gap-4 justify-start items-center py-4 px-2"
                  }
                >
                  <div>
                    <div>
                      <div
                        className={
                          "w-4 h-4 border p-[2px] " +
                          (paymentInfo.thirdCheck
                            ? "border-[#EC6310]"
                            : "border-gray-400")
                        }
                        onClick={() => onChangeCheck("thirdCheck")}
                      >
                        <div
                          className={
                            "h-full w-full transition delay-50 duration-150 " +
                            (paymentInfo.thirdCheck
                              ? "bg-[#EC6310]"
                              : "bg-white")
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div>[필수] 개인정보 수집 및 이용동의</div>
                </div>
              </div>
              <div
                className={"border-t-2 border-dashed border-gray-200 mx-2"}
              />
              {/* 유의사항 */}
              <div className={"flex flex-col py-8"}>
                <h2 className={"mb-4 text-lg font-bold"}>유의사항</h2>
                <ul className={"flex flex-col list-disc gap-2 pl-6"}>
                  <li>
                    구독 결제는 구독기간 마지막 날 진행되며 결제 후 구독기간은
                    자동 갱신됩니다.
                  </li>
                  <li>
                    구독 및 결제 갱신을 중단하고자 할 경우 구독기간 종료 하루
                    전까지 구독을 해지하셔야 합니다.
                  </li>
                  <li>
                    모든 정기구독은 결제 후 7일간 미사용 시 취소할 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={"w-full h-16"}>
          <button
            className={
              "h-full rounded-md w-full text-white text-lg transition delay-50 duration-150 " +
              (checkValidation()
                ? "bg-[#EC6310] hover:bg-orange-100 hover:text-[#EC6310] border border-orange-200"
                : "bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed")
            }
            onClick={() => pay()}
          >
            {paymentInfo.type === "monthly" ? "9,800" : "108,000"}원 결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
