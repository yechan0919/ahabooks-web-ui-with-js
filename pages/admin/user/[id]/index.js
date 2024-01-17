import { useRouter } from "next/router";
import HeadTitle from "../../../../components/common/HeadTitle";
import Link from "next/link";
import Pagination from "../../../../components/admin/common/Pagination";
import { useCallback, useEffect, useState } from "react";
import ProfileList from "../../../../components/admin/list/ProfileList";
import RecordedBookList from "../../../../components/admin/list/RecordedBookList";
import TestBookList from "../../../../components/admin/list/TestBookList";
import { AccountService } from "../../../../services/AccountService";

export default function Index() {
  const [selectedTab, setSelectedTab] = useState(1);
  const router = useRouter();
  const id = router.query.id;
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (id) getUserDetail();
  }, [id]);

  const getUserDetail = async () => {
    const { data } = await AccountService.getAccountDetail(id);
    setUserInfo(data);
  };

  const printDeadline = (endDate) => {
    return "";
  };

  const SubscribeComponent = (info) => {
    let periodOfUse = "";
    let nextPayDay = "";

    if (
      userInfo.subscriptionDeadline &&
      userInfo.subscriptionStatus === "YEARLY"
    ) {
      const endDate = new Date(userInfo.subscriptionDeadline);
      const startDate = new Date(userInfo.subscriptionDeadline).setFullYear(
        endDate.getFullYear() - 1
      );
      const next = new Date(endDate).setDate(endDate.getDate() + 1);
      const startString =
        new Date(startDate).getFullYear() +
        "." +
        (new Date(startDate).getMonth() + 1) +
        "." +
        new Date(startDate).getDate() +
        ".";
      const endString =
        endDate.getFullYear() +
        "." +
        (endDate.getMonth() + 1) +
        "." +
        endDate.getDate() +
        ".";

      periodOfUse = startString + " ~ " + endString;
      nextPayDay =
        new Date(next).getFullYear() +
        "." +
        (Number(new Date(next).getMonth()) + 1) +
        "." +
        new Date(next).getDate();
    } else if (
      userInfo.subscriptionDeadline &&
      userInfo.subscriptionStatus === "MONTHLY"
    ) {
      const endDate = new Date(userInfo?.subscriptionDeadline);
      const startDate = new Date(userInfo.subscriptionDeadline).setMonth(
        endDate.getMonth() - 1
      );
      const next = new Date(endDate).setDate(endDate.getDate() + 1);

      const startString =
        new Date(startDate).getFullYear() +
        "." +
        (new Date(startDate).getMonth() + 1) +
        "." +
        new Date(startDate).getDate();
      const endString =
        endDate.getFullYear() +
        "." +
        (endDate.getMonth() + 1) +
        "." +
        endDate.getDate();
      periodOfUse = startString + " ~ " + endString;
      nextPayDay =
        new Date(next).getFullYear() +
        "." +
        (Number(new Date(next).getMonth()) + 1) +
        "." +
        new Date(next).getDate();
    }

    return (
      <div
        className={
          "flex flex-col hover:bg-gray-50 transition delay-50 duration-150 hover:shadow-md border border-gray-300 rounded-md h-auto mr-0 lg:mr-4 mt-4 p-4"
        }
      >
        <h3 className={"text-lg mb-2"}>
          {userInfo.subscriptionStatus === "MONTHLY"
            ? "월 정기구독 이용중"
            : userInfo.subscriptionStatus === "YEARLY"
            ? "연 정기구독 이용중"
            : "미구독 상태입니다."}
        </h3>
        {userInfo.subscriptionStatus !== "UNSUBSCRIBE" && (
          <>
            <div className="flex flex-row mb-1 text-gray-400">
              <div className="w-24">구독 기간</div>
              <div>{periodOfUse}</div>
            </div>
            <div className="flex flex-row text-gray-400">
              <div className="w-24">다음 결제일</div>
              <div>{nextPayDay}</div>
            </div>
          </>
        )}{" "}
      </div>
    );
  };

  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 회원 관리"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="pt-4">
            <div className="w-4 cursor-pointer">
              <Link href={"/admin/user"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">회원 상세 정보</h4>
              <ol className="breadcrumb">아책 / 회원 관리 / 회원 상세 정보</ol>
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
                    <b>사용자 정보</b>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className={"w-full flex flex-row flex-wrap "}>
                <div className="flex flex-col gap-4 mb-4 w-full lg:w-1/2 pr-0 lg:pr-4">
                  <label className="ml-2 text-sm">사용자 명</label>
                  <input
                    type="text"
                    className="form-control"
                    maxLength="25"
                    value={userInfo.name}
                    disabled
                  />
                </div>
                {/*<div className="flex flex-col gap-4 mb-4 w-full lg:w-1/2 pr-0 lg:pr-4">*/}
                {/*  <label className="ml-2 text-sm">아이디</label>*/}
                {/*  <input*/}
                {/*    type="text"*/}
                {/*    className="form-control"*/}
                {/*    maxLength="25"*/}
                {/*    value={userInfo.email}*/}
                {/*    disabled*/}
                {/*  />*/}
                {/*</div>*/}
                <div className="flex flex-col gap-4 mb-4 w-full lg:w-1/2 pr-0 lg:pr-4">
                  <label className="ml-2 text-sm">이메일 주소</label>
                  <input
                    type="text"
                    className="form-control"
                    maxLength="25"
                    value={userInfo.email}
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
              </div>
              {SubscribeComponent()}
              {/* hr */}
              <div className={"py-8 pr-0 lg:pr-4"}>
                <hr />
              </div>

              <div className={"flex flex-row mb-4"}>
                <div
                  className={
                    "text-sm lg:text-base w-48 py-2 flex justify-center align-center cursor-pointer transition delay-50 duration-150 " +
                    (selectedTab === 1
                      ? "bg-[#1761fd] text-gray-100 rounded-md"
                      : "bg-gray-100 text-[#1761fd]")
                  }
                  onClick={() => setSelectedTab(1)}
                >
                  생성된 프로필
                </div>
                {/*<div*/}
                {/*  className={*/}
                {/*    "text-sm lg:text-base w-48 py-2 flex justify-center align-center cursor-pointer transition delay-50 duration-150 " +*/}
                {/*    (selectedTab === 2*/}
                {/*      ? "bg-[#1761fd] text-gray-100 rounded-md"*/}
                {/*      : "bg-gray-100 text-[#1761fd]")*/}
                {/*  }*/}
                {/*  onClick={() => setSelectedTab(2)}*/}
                {/*>*/}
                {/*  녹음된 동화책*/}
                {/*</div>*/}
                {/*<div*/}
                {/*  className={*/}
                {/*    "text-sm lg:text-base w-48 py-2 flex justify-center align-center cursor-pointer transition delay-50 duration-150 " +*/}
                {/*    (selectedTab === 3*/}
                {/*      ? "bg-[#1761fd] text-gray-100 rounded-md"*/}
                {/*      : "bg-gray-100 text-[#1761fd]")*/}
                {/*  }*/}
                {/*  onClick={() => setSelectedTab(3)}*/}
                {/*>*/}
                {/*  테스트 동화책*/}
                {/*</div>*/}
              </div>
              {selectedTab === 1 && (
                <ProfileList profiles={userInfo.profiles} />
              )}
              {selectedTab === 2 && <RecordedBookList />}
              {selectedTab === 3 && <TestBookList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
