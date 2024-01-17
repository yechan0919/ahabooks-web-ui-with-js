import HeadTitle from "../../../components/common/HeadTitle";

export default function Payment() {
  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 결제 관리"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">결제 관리</h4>
              <ol className="breadcrumb">아책 / 결제 관리</ol>
            </div>
          </div>
        </div>
      </div>
      <div className={"row"}>
        결제된 내역들을 볼 수 있는 페이지 (2차 개발 예정)
      </div>
    </div>
  );
}
