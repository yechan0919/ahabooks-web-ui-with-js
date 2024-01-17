import GrayButton from "../../common/button/GrayButton";

export default function DashboardEvaluatedRow({ openEvaluationPopup, data }) {
  return (
    <>
      <tr className="table-request">
        <td className="min-w-[6rem]">
          <div className="h-full col-td text-ellipsis">
            <p>{data.profile.name}</p>
            <p className="text-muted">({data.account.name})</p>
          </div>
        </td>
        <td className="w-1/3 min-w-[8rem]">{data.bookName}</td>
        <td className="w-1/4 min-w-[8rem]">
          <div className="col-td text-ellipsis">
            <p>{data.totalTime}초</p>
            <p className="text-muted">또래 평균 : {data.totalAverageTime}초</p>
          </div>
        </td>
        <td className="w-1/6 min-w-[6rem]">
          <GrayButton
            content={"평가하기"}
            onClick={() => openEvaluationPopup(data)}
          />
        </td>
      </tr>
    </>
  );
}
