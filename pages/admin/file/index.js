import HeadTitle from "../../../components/common/HeadTitle";

export default function File() {
  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 파일 관리"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">파일 관리</h4>
              <ol className="breadcrumb">아책 / 파일 관리</ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
