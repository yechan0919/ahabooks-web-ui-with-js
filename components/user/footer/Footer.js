import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const goPage = async (url) => {
    router.push(url).then(() => {
      document.body.scrollTo(0, 0);
    });
  };

  return (
    <footer className="bg-[#2F2F2F] text-white">
      <div className="flex flex-col gap-8 py-8 lg:py-12 px-8 lg:px-20 mx-auto xl:max-w-[80rem]">
        <div className="flex flex-wrap gap-8 justify-between h-auto">
          <img
            src="/images/logo2.png"
            className="h-[48px] lg:h-[72px] object-contain cursor-pointer"
          />
          <div className="flex flex-row items-center gap-4 h-auto flex-wrap">
            <Link
              href={
                "https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000767404"
              }
            >
              <button
                className={
                  "h-[44px] max-w-80 w-full w-40 bg-black text-sm text-white rounded-lg flex flex-row gap-2 justify-center items-center"
                }
              >
                <img src={"/images/onestore.png"} className={"w-4"} />
                One Store
              </button>
            </Link>
            <Link href={""}>
              <button
                className={
                  "h-[44px] max-w-80 w-full w-40 bg-black text-sm text-white rounded-lg flex flex-row gap-2 justify-center items-center"
                }
                onClick={() => alert("곧 출시될 예정입니다.")}
              >
                <img src={"/images/apple.png"} className={"w-4"} />
                App Store
              </button>
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.ahabooksbeta&hl=ko"
              }
            >
              <button
                className={
                  "h-[44px] max-w-80 w-full w-40 bg-black text-sm text-white rounded-lg flex flex-row gap-2 justify-center items-center"
                }
              >
                <img src={"/images/googleplay.png"} className={"w-4"} />
                Google Play
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <p className="cursor-pointer">이용약관</p>
          <p>|</p>
          <p className="cursor-pointer" onClick={() => goPage("/app/policy")}>
            개인정보처리방침
          </p>
        </div>
        <div className="flex flex-col text-[#BCBCBC]">
          <p>상호명:이음발달지원센터(주) 대표이사:김혜진</p>
          <p>
            사용자등록번호:828-81-01629 주소:대구시 북구 칠곡중앙대로 434. 202호
          </p>
        </div>
        <div className="text-[#888888]">
          <p>Copyright 2022. 000, Co., Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
