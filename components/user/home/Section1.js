import Link from "next/link";

export default function Section1() {
  return (
    <>
      <div className="overflow-hidden relative text-center sm:text-left h-[508px] 2xl:h-[865px] z-10">
        <div
          className="h-full absolute overflow-hidden -z-10 "
          style={{ left: "0px", right: "0px", top: "0px" }}
        >
          <img
            src="/images/background/home-bg1.png"
            alt="main image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mx-8 px-8 lg:mx-auto lg:px-32 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] grid grid-rows-2 gap-4 py-104 z-10 h-[508px] 2xl:h-[865px]">
          <div
            className={
              "flex flex-col gap-2 md:gap-3 items-start justify-end h-full pb-8"
            }
          >
            <h1 className={"font-bold text-3xl lg:text-5xl"}>책이 이해될 때</h1>
            <h1 className={"font-bold text-3xl lg:text-5xl text-[#EC6310]"}>
              아하!
            </h1>
            <p className={"font-semibold text-[#888888]"}>
              당신에게 딱 맞는 책을 추천합니다.
            </p>
          </div>
          <div
            className={
              "flex flex-col justify-center sm:justify-start h-full items-center sm:items-start w-full"
            }
          >
            <div className={"w-full"}>
              <div className={"w-full flex flex-col sm:flex-row gap-4 mb-4"}>
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
            <p
              className={"font-bold md:font-light text-black md:text-[#888888]"}
            >
              앱으로 다운받으세요!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
