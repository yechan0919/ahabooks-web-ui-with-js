import Link from "next/link";

export default function Section4() {
  return (
    <div className={"h-auto md:h-[20rem] w-full bg-[#EC6310]"}>
      <div className="h-full flex flex-col md:flex-row mx-8 px-4 lg:px-24 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10">
        <div
          className={
            "h-full w-full md:w-1/2 flex flex-col gap-8 justify-center justify-center items-center md:items-start py-8 "
          }
        >
          <div className={"w-full flex flex-col gap-2 justify-center"}>
            <h1
              className={
                "text-white font-bold text-xl md:text-2xl text-center md:text-left"
              }
            >
              어플을 다운로드 받고,
            </h1>
            <h1
              className={
                "text-white font-bold text-xl md:text-2xl text-center md:text-left"
              }
            >
              모든 서비스를 이용하세요.
            </h1>
          </div>
          <div
            className={
              "w-full flex flex-row gap-4 mb-4 justify-center md:justify-start"
            }
          >
            <button
              className={
                "h-[44px] max-w-80 w-full w-40 bg-black text-sm text-white rounded-lg flex flex-row gap-2 justify-center items-center"
              }
            >
              <img src={"/images/apple.png"} className={"w-4"} />
              App Store
            </button>
            <button
              className={
                "h-[44px] max-w-80 w-full w-40 bg-black text-sm text-white rounded-lg flex flex-row gap-2 justify-center items-center"
              }
            >
              <img src={"/images/googleplay.png"} className={"w-4"} />
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.ahabooksbeta&hl=ko"
                }
              >
                Google Play
              </Link>
            </button>
          </div>
        </div>
        <div
          className={
            "w-full md:w-1/2 h-full flex flex-col justify-end items-center md:items-start"
          }
        >
          <img
            src={"/images/background/home-app.png"}
            className={"h-[20rem] object-cover"}
          />
        </div>
      </div>
    </div>
  );
}
