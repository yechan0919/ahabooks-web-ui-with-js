import Pagination from "../common/Pagination";

export default function RecordedBookList() {
  return (
    <div className="table-responsive browser_users px-2 pr-0 lg:pr-4">
      <table className="table mb-0">
        <thead className="table-light">
          <tr>
            <th className="border-top-0 min-w-[24px] pl-4">책 제목 / 버전</th>
            <th className="border-top-0">녹음 일시</th>
            <th className="border-top-0">녹음 시간</th>
            <th className="border-top-0">녹음 파일</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2].map((element, index) => {
            return (
              <tr
                key={index}
                className="table-request hover:bg-gray-50 transition duration-100 delay-50"
              >
                <td className="min-w-[9rem] xl:w-auto xl:flex-1">
                  <div className="h-full col-td text-ellipsis">
                    <p>우리동네 에이스</p>
                    <p className="text-muted">쉬운말</p>
                  </div>
                </td>
                <td className="w-48 min-w-[9rem]">20.05.05</td>
                <td className="w-48 min-w-[9rem]">3'24''</td>
                <td className="w-48 min-w-[9rem]">에이스_1.mp3</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
