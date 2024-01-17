import React from "react";
import Link from "next/link";

const PaymentBlockBox = () => {
  return (
    <div className="flex justify-around flex-wrap gap-16 xl:gap-0">
      <div className=" w-[24rem] border-2 border-gray-50 rounded-xl shadow-lg px-8 flex flex-col gap-8 items-center py-8">
        <h1
          className={"text-left font-bold text-2xl lg:text-3xl text-[#EC6310]"}
        >
          월 정기구독
        </h1>
        <div className={"w-full flex flex-col gap-2 text-center"}>
          <p className={"text-lg"}>기본료</p>
          <div
            className={"w-full bg-[#F3F3F3] font-bold text-xl py-4 rounded-xl "}
          >
            <span className={"line-through"}>9,800원</span>
            {", "}
            <span className={"text-md text-base font-medium"}>현재 무료</span>
          </div>
        </div>

        <div className={"w-full flex flex-col gap-2 text-center"}>
          <p className={"text-lg"}>취약계층 할인</p>
          <p className={"text-[#888888]"}>(50% 할인)</p>
          <div
            className={"w-full bg-[#F3F3F3] font-bold text-xl py-4 rounded-xl"}
          >
            <span className={"line-through"}>4,900원</span>
            {", "}
            <span className={"text-md text-base font-medium"}>현재 무료</span>
          </div>
        </div>
        {/*<Link href="/app/payment/1">*/}
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.ahabooksbeta&hl=ko"
          }
        >
          <a
            className={
              "w-full bg-[#EC6310] font-bold text-xl py-4 rounded-xl text-white text-center"
            }
          >
            선택하기
          </a>
        </Link>
      </div>
      <div className=" w-[24rem] border border-gray-100 rounded-xl shadow-xl px-8 flex flex-col gap-8 items-center py-8">
        <h1
          className={"text-left font-bold text-2xl lg:text-3xl text-[#EC6310]"}
        >
          연 정기구독
        </h1>
        <div className={"w-full flex flex-col gap-2 text-center"}>
          <p className={"text-lg"}>기본료</p>
          <div className={"w-full bg-[#F3F3F3] py-4 rounded-xl"}>
            <span className={"font-bold text-xl"}>
              <span className={"line-through"}>108,000원</span>
            </span>
            <span className={"text-md font-base"}>
              <span className={"line-through"}>/월 9,000원</span>
              {", "}
            </span>
            <span>현재 무료</span>
          </div>
        </div>
        <div className={"w-full flex flex-col gap-2 text-center"}>
          <p className={"text-lg"}>취약계층 할인</p>
          <p className={"text-[#888888]"}>(50% 할인)</p>
          <div
            className={"w-full bg-[#F3F3F3] font-bold text-xl py-4 rounded-xl"}
          >
            <span className={"line-through"}>58,500원</span>
            {", "}
            <span className={"text-md text-base font-medium"}>현재 무료</span>
          </div>
        </div>
        {/*<Link href="/app/payment/2">*/}
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.ahabooksbeta&hl=ko"
          }
        >
          <a
            className={
              "w-full bg-[#EC6310] font-bold text-xl py-4 rounded-xl text-white text-center"
            }
          >
            선택하기
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PaymentBlockBox;
