import HeadTitle from "../../../components/common/HeadTitle";
import Pagination from "../../../components/admin/common/Pagination";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AccountService } from "../../../services/AccountService";

export default function User() {
  const router = useRouter();
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const goDetail = (id) => {
    router.push(`/admin/user/${id}`);
  };

  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = async () => {
    try {
      const res = await AccountService.getAccountList({
        page: page,
        size: size,
      });
      setUserList([...res.data]);
      setTotalElements(res.page.totalElements);
      setTotalPages(res.page.totalPages);
    } catch (e) {}
  };

  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 회원 관리"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">회원 관리</h4>
              <ol className="breadcrumb">아책 / 회원 관리</ol>
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
                    <b>회원 목록 및 관리</b>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive browser_users px-2">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="border-top-0 min-w-[24px]">
                        부모 이름 / 아이디
                      </th>
                      <th className="border-top-0">가입날짜</th>
                      <th className="border-top-0">구독정보</th>
                      <th className="border-top-0">총 결제금액</th>
                      <th className="border-top-0">프로필 수</th>
                      {/*<th className="border-top-0">취약계층 여부</th>*/}
                      <th className="border-top-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList && userList.length > 0 ? (
                      userList.map((element, index) => {
                        if (element.email !== "" && element.email)
                          return (
                            <tr
                              key={index}
                              onClick={() => goDetail(element.id)}
                              className="table-request hover:bg-gray-50 transition duration-100 delay-50 cursor-pointer"
                            >
                              <td className="min-w-[9rem] xl:w-auto xl:flex-1">
                                <div className="h-full col-td text-ellipsis">
                                  <p>{element.name}</p>
                                  <p className="text-muted">{element.email}</p>
                                </div>
                              </td>
                              <td className="w-40 min-w-[8rem]">
                                {new Date(element.createdAt).getUTCFullYear()}.{" "}
                                {new Date(element.createdAt).getMonth() + 1}.{" "}
                                {new Date(element.createdAt).getDate()}
                              </td>
                              <td className="w-48 min-w-[9rem]">
                                {element.subscriptionStatus === "MONTHLY"
                                  ? "월 정기구독"
                                  : element.subscriptionStatus === "YEARLY"
                                  ? "연 정기구독"
                                  : "미구독"}
                              </td>
                              <td className="w-48 min-w-[6rem]">
                                ₩{element?.totalPayment?.toLocaleString()}
                              </td>
                              <td className="w-24 min-w-[9rem]">
                                {element?.profileCount?.toLocaleString()}
                              </td>
                              {/*<td className="w-24 min-w-[9rem]">*/}
                              {/*  {element.profileCount}*/}
                              {/*</td>*/}
                              <td className="w-12 min-w-[9rem]"></td>
                            </tr>
                          );
                      })
                    ) : (
                      <tr
                        key={1}
                        className="table-request hover:bg-gray-50 transition duration-100 delay-50 cursor-pointer"
                      >
                        <td className="min-w-[9rem] xl:w-auto xl:flex-1">
                          <div className="h-full col-td text-ellipsis">
                            <p>홍길동</p>
                            <p className="text-muted">gildong@gmail.com</p>
                          </div>
                        </td>
                        <td className="w-40 min-w-[8rem]">2022.01.12</td>
                        <td className="w-48 min-w-[9rem]">미구독 </td>
                        <td className="w-48 min-w-[6rem]">108,000</td>
                        <td className="w-24 min-w-[9rem]">3</td>
                        <td className="w-24 min-w-[9rem]"></td>
                        <td className="w-12 min-w-[9rem]"></td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <Pagination
                  current={page}
                  setPage={setPage}
                  totalElements={totalElements}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
