import BookUnit from "../book/BookUnit";

export default function Section2_3({ bookList }) {
  return (
    <div className={"relative"}>
      <div className={"absolute right-12 top-24 z-10"}>
        <div className={"w-24 lg:w-36"}>
          <img
            src={"/images/background/home-section2-bg3.png"}
            className={"object-contain w-full"}
          />
        </div>
      </div>
      <div className={"py-16 relative w-full h-full left-0 top-0 z-20"}>
        <div className="w-full flex flex-row justify-center mb-12">
          <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
            <h1>
              <span
                className={
                  "text-left font-bold text-2xl md:text-3xl lg:text-4xl text-[#EC6310]"
                }
              >
                새로 나온{" "}
              </span>
              <span
                className={
                  "text-left font-bold text-2xl md:text-3xl lg:text-4xl"
                }
              >
                책
              </span>
            </h1>
            {/*<p className={"text-left font-semibold text-[#888888]"}>*/}
            {/*  더보기 ->*/}
            {/*</p>*/}
          </div>
        </div>
        <div className={"flex flex-col gap-12 "}>
          {bookList && bookList.length > 0 ? (
            <div className=" w-full flex flex-row gap-2 justify-between w-full z-20 overflow-scroll">
              {bookList.reverse().map((element, index) => {
                return (
                  <BookUnit
                    imageUrl={element.coverImageUrl}
                    title={element.name}
                    writer={element.auth}
                    step={element.step}
                  />
                );
              })}
            </div>
          ) : (
            <div className=" w-full flex flex-row gap-2 justify-between w-full z-20 overflow-scroll">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].reverse().map((element, index) => {
                return (
                  <BookUnit
                    imageUrl={`/images/book/book${element}.png`}
                    title={"책 이름"}
                    writer={"작가 이름"}
                    step={1}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
