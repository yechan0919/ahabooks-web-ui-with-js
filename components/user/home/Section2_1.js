import BookUnit from "../book/BookUnit";
import { useEffect, useRef } from "react";

export default function Section2_1({ bookList }) {
  const s1Ref = useRef();
  const s2Ref = useRef();
  const s3Ref = useRef();

  useEffect(() => {
    s1Ref.current.scrollTo({ right: 0, top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={"relative z-40"}>
      <div className={"absolute left-12 top-44 sm:top-32 z-10 "}>
        <div className={"w-24 lg:w-36"}>
          <img
            src={"/images/background/home-section2-bg1.png"}
            className={"object-contain w-full"}
          />
        </div>
      </div>
      <div className={"py-16 w-full h-full relative z-20"}>
        <div className="w-full flex flex-row justify-center mb-12 z-40">
          <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
            <h1>
              <span
                className={
                  "text-left font-bold text-2xl md:text-3xl lg:text-4xl text-[#EC6310]"
                }
              >
                언어발달 전문가
              </span>
              <span
                className={
                  "text-left font-bold text-2xl md:text-3xl lg:text-4xl"
                }
              >
                가 분류한 단계별 책
              </span>
            </h1>
            <p className={"text-left font-semibold text-[#888888]"}>
              첫달 무료구독을 통해 나에게 딱 맞는 책을 확인해보세요.
            </p>
          </div>
        </div>
        {bookList && bookList.length > 0 ? (
          <div className={"flex flex-col gap-12 "}>
            <div
              ref={s1Ref}
              className="slide_bookList_left w-full flex flex-row gap-2 justify-between w-full"
            >
              {bookList.map((element, index) => {
                return (
                  <BookUnit
                    imageUrl={element.coverImageUrl}
                    title={""}
                    writer={""}
                    step={""}

                    // imageUrl={`/images/book/book${element}.png`}
                    // title={"책 이름"}
                    // writer={"작가 이름"}
                  />
                );
              })}
            </div>
            <div
              ref={s2Ref}
              className="slide_bookList_right w-full flex flex-row gap-2 justify-between w-full"
            >
              {bookList &&
                bookList.length > 0 &&
                bookList.map((element, index) => {
                  return (
                    <BookUnit
                      imageUrl={element.coverImageUrl}
                      title={""}
                      writer={""}
                      step={""}
                    />
                  );
                })}
            </div>
            <div
              ref={s3Ref}
              className="slide_bookList_left w-full flex flex-row gap-2 justify-between w-full"
            >
              {bookList &&
                bookList.length > 0 &&
                bookList.map((element, index) => {
                  return (
                    <BookUnit
                      imageUrl={element.coverImageUrl}
                      title={""}
                      writer={""}
                      step={""}
                    />
                  );
                })}
            </div>
          </div>
        ) : (
          <div className={"flex flex-col gap-4 "}>
            <div
              ref={s1Ref}
              className="slide_bookList_left w-full flex flex-row gap-2 justify-between w-full"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element, index) => {
                return (
                  <BookUnit
                    imageUrl={`/images/book/book${element}.png`}
                    // imageUrl={
                    //   "https://kbook-bucket.s3.ap-northeast-2.amazonaws.com/contents_fixed/1%EB%8B%A8%EA%B3%84%28%ED%8E%98%29/%EA%B3%B6%EA%B0%90%EA%B3%BC%20%ED%98%B8%EB%9E%91%EC%9D%B4/image.jpg"
                    // }
                    title={""}
                    writer={""}
                    step={""}
                  />
                );
              })}
            </div>
            <div
              ref={s2Ref}
              className="slide_bookList_right w-full flex flex-row gap-2 justify-between w-full"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element, index) => {
                return (
                  <BookUnit
                    imageUrl={`/images/book/book${element}.png`}
                    // imageUrl={
                    //   "https://kbook-bucket.s3.ap-northeast-2.amazonaws.com/contents_fixed/1%EB%8B%A8%EA%B3%84%28%ED%8E%98%29/%EA%B3%B6%EA%B0%90%EA%B3%BC%20%ED%98%B8%EB%9E%91%EC%9D%B4/image.jpg"
                    // }
                    title={""}
                    writer={""}
                    step={""}
                  />
                );
              })}
            </div>
            <div
              ref={s3Ref}
              className="slide_bookList_left w-full flex flex-row gap-2 justify-between w-full"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element, index) => {
                return (
                  <BookUnit
                    imageUrl={`/images/book/book${element}.png`}
                    // imageUrl={
                    //   "https://kbook-bucket.s3.ap-northeast-2.amazonaws.com/contents_fixed/1%EB%8B%A8%EA%B3%84%28%ED%8E%98%29/%EA%B3%B6%EA%B0%90%EA%B3%BC%20%ED%98%B8%EB%9E%91%EC%9D%B4/image.jpg"
                    // }
                    title={""}
                    writer={""}
                    step={""}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
