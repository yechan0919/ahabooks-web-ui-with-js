import BookUnit from "../book/BookUnit";
import { useState } from "react";

export default function Section2_4({ bookList }) {
  const [tab, setTab] = useState("문학");

  return (
    <div className={"relative"}>
      <div className={"absolute left-0 bottom-0 z-10 "}>
        <div className={"w-full h-full"}>
          <img
            src={"/images/background/home-section2-bg5.png"}
            className={"object-contain w-full"}
          />
        </div>
      </div>
      <div className={"py-16 relative w-full h-full z-20"}>
        {/* button wrapper */}
        <div className={"w-full flex flex-row justify-center mb-16"}>
          <div className={"flex flex-row gap-16"}>
            <div className={"h-full"}>
              <button
                className={
                  "h-full z-40 text-2xl md:text-3xl lg:text-4xl font-bold " +
                  (tab === "문학" ? "text-black " : "text-[#C8C8C8]")
                }
                onClick={() => setTab("문학")}
              >
                문학
                <div
                  className={
                    "-mt-2 h-full z-10 w-full -mb-4 border-t-4 md:border-t-8 " +
                    (tab === "문학" ? "border-[#EC6310]" : "border-white")
                  }
                ></div>
              </button>
            </div>
            <div className={"h-full"}>
              <button
                className={
                  "h-full z-40 text-2xl md:text-3xl lg:text-4xl font-bold " +
                  (tab === "비문학" ? "text-black " : "text-[#C8C8C8]")
                }
                onClick={() => setTab("비문학")}
              >
                비문학
                <div
                  className={
                    "-mt-2 h-full z-10 w-full -mb-4 border-t-4 md:border-t-8 " +
                    (tab === "비문학" ? "border-[#EC6310]" : "border-white")
                  }
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* contents wrapper */}
        <div className={"w-full flex flex-row justify-center "}>
          {bookList && bookList.length > 0 ? (
            <div
              className={
                "flex md:grid overflow-scroll md:grid-cols-3 gap-x-4 gap-y-8"
              }
            >
              {bookList.map((element, index) => {
                if (index < 9)
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
          ) : tab === "문학" ? (
            <div
              className={
                "flex md:grid overflow-scroll md:grid-cols-3 gap-x-4 gap-y-8"
              }
            >
              {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((element, index) => {
                if (index < 9)
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
          ) : (
            <div
              className={
                "flex md:grid overflow-scroll md:grid-cols-3 gap-x-4 gap-y-8"
              }
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element, index) => {
                if (index < 10)
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
