import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../states/components";
import HeadTitle from "../../../components/common/HeadTitle";
import Pagination from "../../../components/admin/common/Pagination";
import { AdminService } from "../../../services/AdminService";
import { RecordService } from "../../../services/RecordService";
import DashboardEvaluatedRow from "../../../components/admin/list/DashboardEvaluatedRow";
import EvaluationPopup from "../../../components/admin/popup/EvaluationPopup";

export default function Dashboard() {
  const [modal, setModal] = useRecoilState(modalState);
  const [dashboardInfo, setDashboardInfo] = useState({});
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [evaluatedList, setEvaluatedList] = useState([]);
  const [evaluationPopup, setEvaluationPopup] = useState();
  const [refresh, setRefresh] = useState(new Date());
  const [targetInfo, setTargetInfo] = useState({
    account: {
      id: 0,
      name: "string",
    },
    averageTime: 160,
    bookCoverImageUrl: `/images/book/book1.png`,
    bookName: "우당탕탕",
    createdAt: "2022-12-01T06:30:57.525Z",
    expertEvaluation: "전문가의 평가입니다.",
    id: 0,
    evaluationId: 0,
    absoluteScore: 0,
    averageAbsoluteScore: 0,
    misreadingRate: 75,
    profile: {
      id: 1234,
      name: "프로필1",
    },
    speedreadingRate: 80,
    time: 180,
  });

  const getDashboardInfo = async () => {
    const { data } = await AdminService.getDashboardInfo();
    setDashboardInfo(data);
  };

  const toggleEvaluationPopup = async (flag = false) => {
    if (flag) {
      setEvaluationPopup(false);
    } else {
      setEvaluationPopup(!evaluationPopup);
    }
  };

  const getEvaluatedList = async () => {
    try {
      const res = await RecordService.getEvaluatedList({
        isEvaluated: true,
        page: page,
        size: 25,
      });
      setEvaluatedList(res.data || []);
      setTotalElements(res.page.totalElements || 0);
      setTotalPages(res.page.totalPages || 0);
    } catch (e) {}
  };

  const openEvaluationPopup = async (info) => {
    setTargetInfo(info);
    setEvaluationPopup(!evaluationPopup);
  };

  useEffect(() => {
    getDashboardInfo();
  }, []);

  useEffect(() => {
    getEvaluatedList();
  }, [refresh]);

  return (
    <>
      <div className="main-container">
        <HeadTitle title={"아책 어드민 | 대시보드"} />
        {/* Title box */}
        <div className="row">
          <div className="col-sm-12">
            <div className="page-title-box">
              <div className="col">
                <h4 className="page-title">대시보드</h4>
                <ol className="breadcrumb">아책 / 대시보드</ol>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-2 xl:gap-8">
            <div className="card report-card">
              <div className="card-body">
                <div className="flex justify-center row">
                  <div className="col">
                    <p className="mb-0 font-semibold text-black">
                      신규 회원 수
                    </p>
                    <h3>{dashboardInfo?.totalUser?.toLocaleString()}</h3>
                    <p className="mb-0 text-truncate text-muted">
                      금일 추가된 유저 수
                    </p>
                  </div>
                  <div className="col-auto align-self-center">
                    <div className="report-main-icon bg-light-alt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card report-card">
              <div className="card-body">
                <div className="flex justify-center row">
                  <div className="col">
                    <p className="mb-0 font-semibold text-black">신규 결제</p>
                    <h3>₩{dashboardInfo?.totalPayment?.toLocaleString()}</h3>
                    <p className="mb-0 text-truncate text-muted">
                      금일 유저들이 결제한 금액
                    </p>
                  </div>
                  <div className="col-auto align-self-center">
                    <div className="report-main-icon bg-light-alt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card report-card">
              <div className="card-body">
                <div className="flex justify-center row">
                  <div className="col">
                    <p className="mb-0 font-semibold text-black">
                      신규 녹음 횟수
                    </p>
                    <h3>{dashboardInfo?.totalRecord?.toLocaleString()}</h3>
                    <p className="mb-0 text-truncate text-muted">
                      금일 유저들이 녹음한 횟수
                    </p>
                  </div>
                  <div className="col-auto align-self-center">
                    <div className="report-main-icon bg-light-alt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col py-[1rem]">
            <div className="card">
              <div className="card-header">
                <div className="row items-center ">
                  <div className="col">
                    <h4 className="card-title">
                      <b>전문가 평가 요청 항목</b>
                    </h4>
                  </div>
                  {/*<div className="col flex justify-end">*/}
                  {/*  <div className="flex flex-row gap-4">*/}
                  {/*    <input*/}
                  {/*      className="form-control"*/}
                  {/*      placeholder={"유저 이름을 검색하세요."}*/}
                  {/*    />*/}

                  {/*    <div className={"w-24"}>*/}
                  {/*      <OutlineBlueButton content={"검색"} />*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive browser_users px-2">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="border-top-0">유저</th>
                        <th className="border-top-0">책 제목</th>
                        <th className="border-top-0">측정 시간</th>
                        <th className="border-top-0">평가</th>
                      </tr>
                    </thead>
                    <tbody>
                      {evaluatedList.length > 0 &&
                        evaluatedList.map((element, index) => {
                          return (
                            <DashboardEvaluatedRow
                              key={index}
                              data={element}
                              openEvaluationPopup={openEvaluationPopup}
                            />
                          );
                        })}
                    </tbody>
                  </table>
                  {evaluatedList.length > 0 && (
                    <Pagination
                      current={page}
                      setPage={setPage}
                      totalElements={totalElements}
                      totalPages={totalPages}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {evaluationPopup ? (
        <EvaluationPopup
          targetInfo={targetInfo}
          setRefresh={setRefresh}
          onClose={() => toggleEvaluationPopup(false)}
        />
      ) : (
        <></>
      )}
    </>
  );
}
