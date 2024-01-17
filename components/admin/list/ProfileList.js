export default function ProfileList({ profiles }) {
  return (
    <div className="table-responsive browser_users px-2 pr-0 lg:pr-4">
      <table className="table mb-0">
        <thead className="table-light">
          <tr className={"pl-4"}>
            <th className="border-top-0 min-w-[24px] ">이름</th>
            <th className="border-top-0">생년월일</th>
            <th className="border-top-0">성별</th>
            <th className="border-top-0">책 조회수</th>
          </tr>
        </thead>
        {profiles && profiles.length > 0 ? (
          <tbody>
            {profiles.map((element, index) => {
              return (
                <tr
                  key={index}
                  className="table-request hover:bg-gray-50 transition duration-100 delay-50"
                >
                  <td className="min-w-[9rem] xl:w-auto xl:flex-1">
                    {element.name}
                  </td>
                  <td className="w-48 min-w-[9rem]">
                    {element.birthDate.split("-")[0].substr(2, 2) +
                      "." +
                      element.birthDate.split("-")[1] +
                      "." +
                      element.birthDate.split("-")[2]}{" "}
                    {/*(만 2세)*/}
                  </td>
                  <td className="w-48 min-w-[9rem]">
                    {element.gender === "MALE" ? "남" : "여"}
                  </td>
                  <td className="w-48 min-w-[9rem]">{element.views}회</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <></>
        )}
      </table>
      {(!profiles || profiles.length === 0) && (
        <div className={"w-full h-12 flex justify-center items-center"}>
          생성된 프로필이 없습니다.
        </div>
      )}
    </div>
  );
}
