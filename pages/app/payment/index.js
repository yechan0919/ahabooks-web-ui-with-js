import Link from "next/link";
import HeadTitle from "../../../components/common/HeadTitle";
import { useState } from "react";
import PaymentBlockBox from "../../../components/user/payment/PaymentBlockBox";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className={" h-full flex flex-col"}>
      <HeadTitle title={"아책 결제하기"} />

      <div className="overflow-hidden relative text-center sm:text-left h-full z-10">
        <div className="mx-8 px-8 lg:px-20 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10 h-full">
          {/* Section 1 */}
          <div className="flex items-center mx-8 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10 py-8 md:py-0 h-auto md:h-[250px] lg:h-[300px]">
            <div className="flex flex-col items-start gap-2 md:gap-4">
              <h1
                className={
                  "text-left font-bold text-2xl md:text-3xl lg:text-4xl text-[#EC6310]"
                }
              >
                아하! 책방을 구독하고
              </h1>
              <h1
                className={
                  "text-left font-bold text-2xl md:text-3xl lg:text-4xl"
                }
              >
                다양한 동화책 서비스를 누려보세요!
              </h1>
              <p className={"text-left font-semibold text-[#888888]"}>
                무제한 도서, 오디오 북, 읽기 유창성 평가, 동영상 강의 모두 월
                9,800원으로 만나보세요.
              </p>
            </div>
          </div>
          {/* Section 2 */}
          <div className="mb-24 mx-8 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10 h-auto">
            <PaymentBlockBox />
          </div>
          {/* Section 3 */}
          {/*<div className="flex items-start mx-8 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10 pb-48 md:py-0 h-auto md:h-[300px] lg:h-[300px]">*/}
          {/*  <div className="flex flex-col items-start gap-2">*/}
          {/*    <h1*/}
          {/*      className={"text-left flex flex-row gap-1"}*/}
          {/*      onMouseOver={() => setTooltip(true)}*/}
          {/*      onMouseLeave={() => setTooltip(false)}*/}
          {/*    >*/}
          {/*      <span*/}
          {/*        className={"text-[#EC6310] font-bold text-lg lg:text-2xl"}*/}
          {/*      >*/}
          {/*        잠깐! 취약계층 기준에 해당하시나요?{" "}*/}
          {/*      </span>*/}
          {/*      <div className={"relative"}>*/}
          {/*        <span className={"text-gray-300"}>*/}
          {/*          <svg*/}
          {/*            xmlns="http://www.w3.org/2000/svg"*/}
          {/*            fill="none"*/}
          {/*            viewBox="0 0 24 24"*/}
          {/*            strokeWidth={1.5}*/}
          {/*            stroke="currentColor"*/}
          {/*            className="w-6 h-6"*/}
          {/*          >*/}
          {/*            <path*/}
          {/*              strokeLinecap="round"*/}
          {/*              strokeLinejoin="round"*/}
          {/*              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"*/}
          {/*            />*/}
          {/*          </svg>*/}
          {/*        </span>*/}
          {/*        {tooltip && (*/}
          {/*          <div*/}
          {/*            className={*/}
          {/*              "absolute w-[16rem] md:w-[25rem] ]lg:w-[33rem] right-2 top-2 md:left-2 z-40 p-4 shadow-lg border border-gray-200 rounded-lg bg-white"*/}
          {/*            }*/}
          {/*          >*/}
          {/*            가구 월 평균소득이 전국 가구 월 평균소득의 100분의 60*/}
          {/*            이하인 사람*/}
          {/*          </div>*/}
          {/*        )}*/}
          {/*      </div>*/}
          {/*    </h1>*/}
          {/*    <h1 className={"text-left font-bold text-lg lg:text-2xl"}>*/}
          {/*      취약계층 인증 후 50%할인된 금액으로 아책을 구독하세요!*/}
          {/*    </h1>*/}
          {/*    <div className={"relative z-10"}>*/}
          {/*      <button*/}
          {/*        className={*/}
          {/*          "bg-gray-200 text-gray-600 h-10 px-6 mt-4 rounded-lg"*/}
          {/*        }*/}
          {/*        onMouseOver={() => setDropdown(true)}*/}
          {/*        onMouseLeave={() => setDropdown(false)}*/}
          {/*      >*/}
          {/*        취약계층 인증은 어떻게 받나요?*/}
          {/*      </button>*/}
          {/*      {dropdown && (*/}
          {/*        <div*/}
          {/*          className={*/}
          {/*            "absolute w-[20rem] md:w-[25rem] ]lg:w-[33rem] top-16 left-0 z-40 p-4 shadow-lg border border-gray-200 rounded-lg"*/}
          {/*          }*/}
          {/*        >*/}
          {/*          관련서류(수급자확인서, 장애인확인서 등)를 이름, 아책 아이디,*/}
          {/*          연락처와 함께 achaek@gmail.com 으로 보내주세요. <br></br>*/}
          {/*          인증 완료시 남겨주신 연락처로 안내드리겠습니다.*/}
          {/*        </div>*/}
          {/*      )}*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        {/*<div className="w-full bg-[#FAFAFA] z-30">*/}
        {/*  <div className="text-left py-8 lg:py-12 px-8 lg:px-20 mx-auto xl:max-w-[80rem]">*/}
        {/*    <div className="mb-4">*/}
        {/*      <h1>*/}
        {/*        <b>유의사항</b>*/}
        {/*      </h1>*/}
        {/*    </div>*/}
        {/*    <ul className="flex flex-col gap-1 text-sm list-disc px-6">*/}
        {/*      <li>*/}
        {/*        구독 결제는 구독기간 마지막 날 진행되며 결제 후 구독기간은 자동*/}
        {/*        갱신됩니다.*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        구독 결제 갱신을 중단하고자 할 경우 구독기간 종료 하루 전까지*/}
        {/*        구독을 해지하셔야 합니다.*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        모든 정기구독은 결제 후 7일간 미사용 시 취소할 수 있습니다.*/}
        {/*      </li>*/}
        {/*      <li>구독료 적용 시간 및 날짜 - 결제 후 바로 사용 가능한지?</li>*/}
        {/*      <li>*/}
        {/*        구독 해지 - 결제된 날짜는 그대로 진행하고 다음 달/연 부터 환불?*/}
        {/*        (보통 월 결제는 위처럼 진행하고 연 결제는 미리 약속된 수수료?를*/}
        {/*        제하고 환불해줌)*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        구독 해지 및 환불 관련 - 구독 종류별로 환불 방법? (결제방법으로*/}
        {/*        다시 환불? 새로 입력받기?)*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        구독 해지 및 환불 관련 - 구독 종류별로 환불 방법? (정기구독/코인*/}
        {/*        별 기간 및 환불 금액 산정 방법?)*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
