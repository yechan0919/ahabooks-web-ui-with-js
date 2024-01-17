import React from "react";
import HeadTitle from "../../common/HeadTitle";

const UpdateBookLayout = ({ children, info }) => {
  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 책 수정하기"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">책 수정하기</h4>
              <ol className="breadcrumb">아책 / 책 수정하기</ol>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col py-[1rem]">
          <div className="card">
            {/*<div className="card-header">*/}
            {/*  <div className="row items-center ">*/}
            {/*    <div className="col">*/}
            {/*      <h4 className="card-title">*/}
            {/*        <b>책 정보 수정</b>*/}
            {/*      </h4>*/}
            {/*      /!*<p>파일 내용은 수정이 불가합니다.</p>*!/*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="card-body">
              <div className={"form-material wizard  "}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookLayout;
