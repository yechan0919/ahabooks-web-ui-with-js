import Link from "next/link";
import { useRouter } from "next/router";

export default function Section5() {
  const router = useRouter();

  const goPage = async (url) => {
    router.push(url).then(() => {
      document.body.scrollTo(0, 0);
    });
  };

  return (
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
                토탈
                {/*몽땅*/}
              </span>
              <span
                className={
                  "font-bold text-xl lg:text-3xl xl:text-4xl text-[#EC6310]"
                }
              >
                {/*월 9,900원*/}
                서비스
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
                {/*월 9,900원에 */}
                만나보세요.
              </p>
            </div>
            <button
              className={
                "h-[44px] max-w-80 w-full w-40 md:w-32 bg-black text-sm text-white rounded-lg flex flex-row gap-2 justify-center items-center"
              }
              onClick={() => goPage("/app/payment")}
            >
              구독
              {/*및 결제*/}
            </button>
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
            <div className={"flex flex-row md:flex-col justify-center gap-2"}>
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
  );
}
