import Link from "next/link";

export default function Index() {
  return (
    <div
      className={
        "flex flex-row justify-center items-center mx-auto mx-8 xl:px-96 py-24 2xl:py-60"
      }
    >
      <div
        className={
          "py-16 lg:py-24 max-w-[40rem] mx-8 lg:mx-auto lg:px-20 w-full border border-gray-100 shadow-xl rounded-2xl h-full flex flex-col gap-12 items-center"
        }
      >
        <div className={"h-24"}>
          <img src={"/images/logo2.png"} className={"h-full"} />
        </div>
        <div className={"text-center gap-2 flex flex-col"}>
          <div className={"font-bold text-xl lg:text-3xl"}>
            간단하게 로그인하고
          </div>
          <div className={"font-bold text-xl lg:text-3xl text-[#EC6310]"}>
            아책의 모든 서비스를 이용해보세요!
          </div>
        </div>
        <div>
          <button
            className={
              "h-12 bg-[#FFDC5C] flex gap-2 items-center rounded-full px-8 lg:px-16"
            }
          >
            <div className={"inline-block"}>
              <img src={"/images/kakao.png"} className={"w-8 object-cover"} />
            </div>
            {/*<div onClick={login}>*/}
            {/*  <span className={"font-semibold"}>카카오톡으로 시작하기</span>*/}
            {/*</div>*/}
            <Link href={`http://3.39.4.193:8080/oauth2/authorization/kakao`}>
              <span className={"font-semibold"}>카카오톡으로 시작하기</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
