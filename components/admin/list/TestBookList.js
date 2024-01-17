import Pagination from "../common/Pagination";

export default function TestBookList() {
  return (
    <div className={"w-full h-full"}>
      <div className={"flex flex-col px-2 mb-4"}>
        {[0, 1, 2, 3, 4].map((element, index) => {
          return (
            <div className={"border border-gray-300 px-4 py-4 rounded-md"}>
              치카치카 이닦기
            </div>
          );
        })}
      </div>
      <Pagination
        current={3}
        first={1}
        last={8}
        total={120}
        beforePage={() => alert("before")}
        afterPage={() => alert("after")}
      />
    </div>
  );
}
