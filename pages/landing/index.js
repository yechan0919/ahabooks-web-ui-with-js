import Link from "next/link";
import React from "react";
import HeadTitle from "../../components/common/HeadTitle";
import Section3 from "../../components/user/home/Section3";

export default function Index() {
  return (
    <>
      <nav className="border-b border-[#E2E2E2]">
        <div className="mx-8 lg:mx-auto lg:px-20 xl:max-w-[80rem] 2xl:max-w-[120rem]">
          <div className="flex justify-between" style={{ height: "72px" }}>
            <div className="flex items-center ">
              <Link
                href="/landing"
                className="mr-[24px] flex items-center border border-red-500"
              >
                <div>
                  <img
                    src="/images/logo2.png"
                    className="h-[48px] lg:h-[72px] object-contain cursor-pointer"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={" h-full flex-col"}>
        <HeadTitle title={"아하! 책방"} />

        {/* -> wrapper */}

        {/* section 1 : 책이 이해될 때 아하!*/}
        <div className="overflow-hidden relative text-center sm:text-left h-[508px] 2xl:h-[865px] z-10 hidden lg:block">
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
          <div className="mx-8 px-8 lg:mx-auto lg:px-32 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] grid grid-rows-1 gap-4 z-10 h-[508px] 2xl:h-[865px]">
            <div
              className={
                "flex flex-col gap-2 md:gap-3 items-start justify-center h-full pb-8"
              }
            >
              <h1 className={"font-bold text-3xl lg:text-4xl mb-2"}>
                책이 이해될 때 <span className={"text-[#EC6310]"}>아하!</span>
              </h1>
              <h1 className={"font-bold text-4xl lg:text-5xl mb-8"}>
                아하 책방이 <span className={"text-[#EC6310]"}>곧 출시</span>
                됩니다!
              </h1>
              <div className={"w-full lg:w-1/2 text-center"}>
                <p className={"text-xl lg:text-2xl font-light"}>
                  <span className={"text-[#EC6310]"}>11월 중순</span> 앱으로
                  다운받으세요!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"relative"}>
          <div className={"absolute left-0 top-0 z-10 z-10 h-[35rem] w-full"}>
            <div className={"w-full h-full"}>
              <img
                src={"/images/background/landing-image1.png"}
                className={"h-[35rem] object-cover w-full"}
              />
            </div>
          </div>

          <div className={"py-48 px-0 md:px-8 h-[35rem]"}>
            <div
              className={
                "flex flex-col items-center justify-center mx-0 md:mx-8 lg:mx-auto lg:px-32 xl:max-w-[80rem] 2xl:max-w-[120rem]"
              }
            >
              <div
                className={"flex flex-col gap-4 items-center justify-center"}
              >
                <h1 className={"font-bold text-7xl text-shadow text-center"}>
                  Coming Soon!
                </h1>
                <h3 className={"font-bold text-4xl text-center lg:text-left"}>
                  <div className={"text-shadow inline-block"}>11월 중순,</div>
                  <div className={"inline-block mt-4 lg:mt-0"}>
                    <span className={"text-[#EC6310] ml-2"}> 아책</span>
                    <span className={"text-shadow"}>이 곧 출시됩니다!</span>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* section 5 : 몽당 월 9,000원 */}
        <div className={"py-16 px-0 md:px-8"}>
          <div
            className={
              "flex flex-col mx-0 md:mx-8 gap-16 lg:mx-auto lg:px-32 xl:max-w-[80rem] 2xl:max-w-[120rem]"
            }
          >
            <div className={"flex flex-col md:flex-row w-full h-full"}>
              <div className={"w-full md:w-1/2"}>
                <img
                  src={"/images/background/home-section4-bg1.png"}
                  className={"w-full object-cover"}
                />
              </div>
              <div
                className={
                  "w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 px-8 py-8 md:py-0"
                }
              >
                <div className={"flex flex-row justify-center gap-2"}>
                  <span className={"font-bold text-xl lg:text-3xl xl:text-4xl"}>
                    몽땅{" "}
                  </span>
                  <span
                    className={
                      "font-bold text-xl lg:text-3xl xl:text-4xl text-[#EC6310]"
                    }
                  >
                    월 9,900원
                  </span>
                </div>

                <div>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    무제한 도서, 오디오 북, 읽기 유창성 평가, 동영상 강의 모두
                  </p>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    월 9,900원에 만나보세요.
                  </p>
                </div>
              </div>
            </div>
            <div className={"flex flex-col md:flex-row-reverse w-full h-full"}>
              <div className={"w-full md:w-1/2"}>
                <img
                  src={"/images/background/home-section4-bg2.png"}
                  className={"w-full object-cover"}
                />
              </div>
              <div
                className={
                  "w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 px-8 py-8 md:py-0"
                }
              >
                <div
                  className={"flex flex-row md:flex-col justify-center gap-2"}
                >
                  <span className={"font-bold text-xl lg:text-3xl xl:text-4xl"}>
                    딱 맞는 책을{" "}
                  </span>
                  <span className={"font-bold text-xl lg:text-3xl xl:text-4xl"}>
                    찾아보세요.
                  </span>
                </div>

                <div>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    나에게 딱 맞는 책은 어떤 책일까요?
                  </p>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    학년별 필수 고빈도 어휘, 문장 구조, 책 볼륨 등 쉽고
                  </p>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    재미있게 이해할 수 있는 나에게 딱 맞는 책을 확인해보세요.
                  </p>
                </div>
              </div>
            </div>
            <div className={"flex flex-col md:flex-row w-full h-full"}>
              <div className={"w-full md:w-1/2"}>
                <img
                  src={"/images/background/home-section4-bg3.png"}
                  className={"w-full object-cover"}
                />
              </div>
              <div
                className={
                  "w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 px-8 py-8 md:py-0"
                }
              >
                <div className={"flex flex-col justify-center gap-0 lg:gap-2"}>
                  <span className={"font-bold text-xl lg:text-3xl xl:text-4xl"}>
                    모두가 함께 배울 수 있는
                  </span>
                  <span
                    className={
                      "font-bold text-xl lg:text-3xl xl:text-4xl text-[#EC6310]"
                    }
                  >
                    쉬운말 동시 서비스 제공
                  </span>
                </div>

                <div>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    2,3단계의 책은 모두 1단계 수준의 쉬운말로 동시에 제공됩니다.
                  </p>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    같은 내용, 다른 글 난이도를 경험해보세요.
                  </p>
                  <p
                    className={
                      "font-semibold text-center md:text-left text-[#888888]"
                    }
                  >
                    동생과 함께, 통합교육 현장에서도 사용할 수 있어요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 : 아책만의 특별한 3가지 특징 */}
        <div className={"py-16 bg-[#FAFAFA]"}>
          <div
            className={
              "flex flex-col gap-2 mx-8 lg:mx-auto lg:px-32 xl:max-w-[80rem] 2xl:max-w-[120rem] mb-16 z-40"
            }
          >
            <h1
              className={
                "text-left font-bold text-2xl md:text-3xl lg:text-4xl text-[#EC6310]"
              }
            >
              아책만의 특별한
            </h1>
            <h1
              className={"text-left font-bold text-2xl md:text-3xl lg:text-4xl"}
            >
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
                      나의 읽기 실력은 어느 정도일까요? 인공지능과
                      언어발달전문가가 함께 당신의 읽기 실력을 평가해드립니다.
                      (읽기 속도, 틀린 글자 수, 의미 단위로 끊어 읽기,
                      자연스러운 호흡 등)
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
                      모델링을 통해 유창하게 읽기를 연습해보세요. 내가 연습한
                      부분을 녹음하고 직접 들어볼 수도 있어요.
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
                    <h1 className={"text-2xl font-bold"}>
                      아책M (이달의 아책)
                    </h1>
                    <p>
                      각 단계별 이달의 아책을 만나보세요. 단계별 추천 아책을
                      읽고 다양한 커뮤니티 활동을 참여해보세요. 아책 M퀴즈 대회
                      참여권, 아책 M 강의 영상이 무료로 제공됩니다.
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

        <div className={"relative"}>
          <div className={"absolute left-0 top-0 z-10 z-10 h-[35rem] w-full"}>
            <div className={"w-full h-full hidden xl:block"}>
              <img
                src={"/images/background/landing-image2-responsive.png"}
                className={"h-full object-cover w-full"}
              />
            </div>
            <div className={"w-full h-full block xl:hidden"}>
              <img
                src={"/images/background/landing-image2.png"}
                className={"h-full object-cover w-full"}
              />
            </div>
          </div>

          <div className={"py-48 px-0 md:px-8 h-[35rem]"}>
            <div
              className={
                "flex flex-col items-center justify-center mx-0 md:mx-8 lg:mx-auto lg:px-32 xl:max-w-[80rem] 2xl:max-w-[120rem]"
              }
            >
              <div
                className={"flex flex-col gap-4 items-center justify-center"}
              >
                <h1 className={"font-bold text-7xl text-shadow text-center"}>
                  Coming Soon!
                </h1>
                <h3 className={"font-bold text-4xl text-center lg:text-left"}>
                  <div className={"text-shadow inline-block"}>11월 중순,</div>
                  <div className={"inline-block mt-4 lg:mt-0"}>
                    <span className={"text-[#EC6310] ml-2"}> 아책</span>
                    <span className={"text-shadow"}>이 곧 출시됩니다!</span>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Wrapper -> */}
      </div>
    </>
  );
}
