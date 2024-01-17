import HeadTitle from "../../common/HeadTitle";

export default function UploadLayout({ children, step }) {
  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 책 업로드"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">책 업로드</h4>
              <ol className="breadcrumb">아책 / 책 업로드</ol>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col py-[1rem]">
          <div className="card">
            <div className="card-header">
              <div className="row items-center ">
                <div className="col">
                  <h4 className="card-title">
                    <b>책 업로드</b>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className={"form-material wizard  "}>
                <div className="steps clearfix mb-4">
                  <ul role="tablist" className={"flex flex-row gap-8"}>
                    <li
                      role="tab"
                      className={step === 1 ? "first current" : "done"}
                      aria-disabled="false"
                      aria-selected="true"
                    >
                      <a
                        id="form-horizontal-t-0"
                        aria-controls="form-horizontal-p-0"
                      >
                        <span className="current-info audible">
                          current step:{" "}
                        </span>
                        <span className="number">1.</span> 도서 정보 입력
                      </a>
                    </li>
                    <li
                      role="tab"
                      className={step === 1 ? "done" : "first current"}
                      aria-disabled="false"
                      aria-selected="false"
                    >
                      <a
                        id="form-horizontal-t-0"
                        aria-controls="form-horizontal-p-0"
                      >
                        <span className="number">2.</span> 완료
                      </a>
                    </li>
                  </ul>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
