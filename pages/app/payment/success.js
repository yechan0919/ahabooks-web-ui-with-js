import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AccountService } from "../../../services/AccountService";
import HeadTitle from "../../../components/common/HeadTitle";
import { DateUtils } from "../../../utils/DateUtils";

export default function Success() {
  const router = useRouter();

  const [paymentInfo, setPaymentInfo] = useState({
    type: "monthly", // monthly, yearly
    amount: "9800", //9800, 108000
    payment: "card", // card,
  });

  useEffect(() => {
    if (
      router.query.orderName &&
      router.query.currency &&
      router.query.method &&
      router.query.totalAmount
    )
      init(
        router.query.orderName,
        router.query.currency,
        router.query.method,
        router.query.totalAmount
      );
  }, [router.query]);

  const init = async (orderName, currency, method, totalAmount) => {
    console.log(
      "orderName, currency, method, totalAmount",
      orderName,
      currency,
      method,
      totalAmount
    );
    setPaymentInfo({
      type: orderName.includes("월 정기구독") ? "monthly" : "yearly", // monthly, yearly
      amount: orderName.includes("월 정기구독") ? "9800" : '108000"', //9800, 108000
      payment: "card", // card,
    });
  };
  return (
    <div className="w-full h-full bg-[#F1F1F1]">
      <HeadTitle title={"아책"} />

      <div className="py-8 mx-8 px-8 lg:px-60 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10 flex flex-col gap-12">
        {/* 결제 정보 */}
        <div className="flex flex-col justify-start gap-8">
          <h1 className="text-lg font-bold">결제 내역 확인</h1>
          <div className="rounded-xl shadow-xl bg-white">
            {/* 멤버십 종류 */}
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
                <div className={"text-lg"}>멤버십 종류</div>
                {/*<div>*/}
                {/*  <span className={"text-gray-400"}>(코인 결제) </span>*/}
                {/*  <span className={"text-[#EC6310] font-bold"}>20코인</span>*/}
                {/*</div>*/}

                <div>
                  <span className={"text-[#EC6310] font-bold"}>
                    {paymentInfo.type === "monthly"
                      ? "월 정기구독"
                      : "연 정기구독"}
                  </span>
                </div>
              </div>

              {/* 결제 금액 */}
              <div
                className={
                  "flex flex-row  justify-between items-center pt-4 px-2"
                }
              >
                <div className={"text-lg"}>결제하신 금액</div>
                {/*<div>*/}
                {/*  <span className={"text-gray-400"}>(코인 결제) </span>*/}
                {/*  <span className={"text-[#EC6310] font-bold"}>20코인</span>*/}
                {/*</div>*/}

                <div>
                  <span className={"text-[#EC6310] font-bold"}>
                    ₩ {paymentInfo.type === "monthly" ? "9,800" : "108,000"}
                  </span>
                </div>
              </div>

              {/* 다음 결제 일자 */}
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
              <div
                className={"border-t-2 border-dashed border-gray-200 mx-2"}
              />
              <div
                className={
                  "flex flex-col gap-2 justify-center items-center py-4 px-2 "
                }
              >
                <div className={"text-lg text-center"}>
                  위 결제 내역은 마이페이지 내{" "}
                  <span className={"text-[#EC6310] font-bold"}>
                    [내 결제 내역 확인]
                  </span>
                  에서 확인하실 수 있습니다.
                </div>
                <div className={"text-lg text-center"}>
                  결제해주셔서 감사합니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"w-full h-16"}>
          <button
            className={
              "h-full rounded-md w-full text-white text-lg transition delay-50 duration-150 bg-[#EC6310] hover:bg-orange-100 hover:text-[#EC6310] border border-orange-200"
            }
            onClick={() =>
              router.push("/app/home").then(() => {
                document.body.scrollTo(0, 0);
              })
            }
          >
            홈 화면으로 이동하기
          </button>
        </div>
      </div>
    </div>
  );
}
