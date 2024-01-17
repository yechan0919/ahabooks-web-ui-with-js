export default function Section3() {
  return (
    <div className={"py-16 bg-[#FAFAFA]"}>
      <div
        className={
          "flex flex-col gap-2 mx-8 lg:mx-auto lg:px-32 xl:max-w-[80rem] 2xl:max-w-[120rem] mb-16"
        }
      >
        <h1
          className={
            "text-left font-bold text-2xl md:text-3xl lg:text-4xl text-[#EC6310]"
          }
        >
          아책만의 특별한
        </h1>
        <h1 className={"text-left font-bold text-2xl md:text-3xl lg:text-4xl"}>
          3가지 특징!
        </h1>
      </div>
      <div className={"w-full flex flex-row justify-end"}>
        <div
          className={
            "w-full flex flex-col md:flex-row justify-end lg:pl-32 xl:max-w-[80rem] 2xl:max-w-[120rem] mb-8 md:mb-16"
          }
        >
          <div className={"w-full md:w-1/3 relative"}>
            <div
              className={
                "absolute top-0 left-0 w-full h-full z-50 px-8 py-8 flex flex-col justify-end"
              }
            >
              <div className="text-white flex flex-col gap-4">
                <h1 className={"text-2xl font-bold"}>평가 시스템</h1>
                <p>
                  나의 읽기 실력은 어느 정도일까요? 인공지능과 언어발달전문가가
                  함께 당신의 읽기 실력을 평가해드립니다. (읽기 속도, 틀린 글자
                  수, 의미 단위로 끊어 읽기, 자연스러운 호흡 등)
                </p>
              </div>
            </div>

            <img
              src={"/images/background/home-bg2.png"}
              className={"w-full object-contain"}
            />
            <div
              className={
                "bg-black absolute top-0 left-0 w-full h-full opacity-50"
              }
            ></div>
          </div>
          <div className={"w-full md:w-1/3 relative"}>
            <div
              className={
                "absolute top-0 left-0 w-full h-full z-50 px-8 py-8 flex flex-col justify-end"
              }
            >
              <div className="text-white flex flex-col gap-4">
                <h1 className={"text-2xl font-bold"}>
                  읽기 유창성 향상 프로그램
                </h1>
                <p>
                  평가결과를 바탕으로 끊어 읽기 하이라이트 표시와 성우의
                  모델링을 통해 유창하게 읽기를 연습해보세요. 내가 연습한 부분을
                  녹음하고 직접 들어볼 수도 있어요.
                </p>
              </div>
            </div>
            <img
              src={"/images/background/home-bg3.png"}
              className={"w-full object-contain"}
            />
            <div
              className={
                "bg-black absolute top-0 left-0 w-full h-full opacity-50"
              }
            ></div>
          </div>
          <div className={"w-full md:w-1/3 relative"}>
            <div
              className={
                "absolute top-0 left-0 w-full h-full z-50 px-8 py-8 flex flex-col justify-end"
              }
            >
              <div className="text-white flex flex-col gap-4">
                <h1 className={"text-2xl font-bold"}>아책M (이달의 아책)</h1>
                <p>
                  각 단계별 이달의 아책을 만나보세요. 단계별 추천 아책을 읽고
                  다양한 커뮤니티 활동을 참여해보세요. 아책 M퀴즈 대회 참여권,
                  아책 M 강의 영상이 무료로 제공됩니다.
                </p>
              </div>
            </div>

            <img
              src={"/images/background/home-bg4.png"}
              className={"w-full object-contain"}
            />
            <div
              className={
                "bg-black absolute top-0 left-0 w-full h-full opacity-50"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
