import HeadTitle from "../../../components/common/HeadTitle";
import { useEffect, useState } from "react";
import { AccountService } from "../../../services/AccountService";

export default function Mypage() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    try {
      const { data } = await AccountService.getAccountDetail(
        sessionStorage.getItem("userId")
      );
      setUserInfo(data);
    } catch (e) {}
  };

  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 마이페이지"} />
      <div className="row">
        <div className="col-sm-12 ">
          <div className="page-title-box">
            <div className="col ">
              <h4 className="page-title">마이페이지</h4>
              <ol className="breadcrumb">아책 / 마이페이지</ol>
            </div>
          </div>
        </div>
      </div>
      <div className={"row"}>
        <div className={"w-full flex flex-row flex-wrap "}>
          <div className="flex flex-col gap-4 mb-4 w-full lg:w-1/2 pr-0 lg:pr-4">
            <label className="ml-2 text-sm">이름 (한글)</label>
            <input
              type="text"
              className="form-control"
              maxLength="25"
              value={userInfo.name}
              disabled
            />
          </div>
          <div className="flex flex-col gap-4 mb-4 w-full lg:w-1/2 pr-0 lg:pr-4">
            <label className="ml-2 text-sm">아이디</label>
            <input
              type="text"
              className="form-control"
              maxLength="25"
              value={userInfo.email}
              disabled
            />
          </div>
          <div className="flex flex-col gap-4 mb-4 w-full lg:w-1/2 pr-0 lg:pr-4">
            <label className="ml-2 text-sm">권한</label>
            <input
              type="text"
              className="form-control"
              maxLength="25"
              value={userInfo.role}
              disabled
            />
          </div>

          <div className="flex flex-col gap-4 mb-4 w-full lg:w-1/2 pr-0 lg:pr-4">
            <label className="ml-2 text-sm">연락처</label>
            <input
              type="text"
              className="form-control"
              maxLength="25"
              value={userInfo.phone}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
