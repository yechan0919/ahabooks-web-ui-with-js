import HeadTitle from "../../../components/common/HeadTitle";
import OutlineBlueButton from "../../../components/common/button/OutlineBlueButton";
import BlueButton from "../../../components/common/button/BlueButton";
import GrayButton from "../../../components/common/button/GrayButton";
import Pagination from "../../../components/admin/common/Pagination";
import { useEffect, useState } from "react";
import { BookService } from "../../../services/BookService";
import { GetBookListRequest } from "../../../typings/Book";
import { version } from "../../../constant/word-constant";
import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [refresh, setRefresh] = useState(new Date());

  useEffect(() => {
    getBookList();
  }, [page, refresh]);

  const getBookList = async () => {
    const getBookListRequest = new GetBookListRequest();
    getBookListRequest.size = size;
    getBookListRequest.page = page;
    getBookListRequest.sort = "createdAt,desc";
    const res = await BookService.getBookList(getBookListRequest);
    setBookList([...res.data]);
    setTotalElements(res.page.totalElements);
    setTotalPages(res.page.totalPages);
  };

  const deleteBook = async (bookId) => {
    try {
      let result = confirm("삭제하시겠습니까?");
      if (result) {
        const res = await BookService.deleteBook(bookId);
        alert("삭제되었습니다.");
        setRefresh(new Date());
      } else {
      }
    } catch {}
  };

  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 도서 목록"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">도서 목록</h4>
              <ol className="breadcrumb">아책 / 도서 목록</ol>
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
                  <h4 className="card-title flex flex-col gap-2">
                    <b>도서 별 통계 및 관리</b>
                  </h4>
                </div>
                {/*<div className="col flex justify-end">*/}
                {/*  <div className="flex flex-row gap-4">*/}
                {/*    <input*/}
                {/*      className="form-control"*/}
                {/*      placeholder={"도서 명을 검색하세요."}*/}
                {/*    />*/}

                {/*    <div className={"w-24"}>*/}
                {/*      <OutlineBlueButton content={"검색"} />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
            <div className="card-header">
              <div className="row items-center ">
                <div className="col">
                  <h4 className="card-title flex flex-col gap-2">
                    <div className={"text-red-500"}>
                      <p className={"w-full text-red-500 font-bold"}>
                        변환 상태에 대한 설명
                      </p>
                      <p className={"w-full text-red-500"}>
                        - NONE : 원고 파일과 나레이션 파일이 제대로 업로드되지
                        않은 상태이므로 두 파일을 재업로드해야합니다.
                      </p>
                      <p className={"w-full text-red-500"}>
                        - WAITING : 원고 파일과 나레이션 파일이 제대로
                        업로드되지 않은 상태이므로 두 파일를 재업로드해야함.
                      </p>
                      <p className={"w-full text-red-500"}>
                        - NONE : 원고 파일과 나레이션 파일이 제대로 업로드되지
                        않은 상태이므로 두 파일를 재업로드해야함.
                      </p>
                    </div>
                  </h4>
                </div>
                {/*<div className="col flex justify-end">*/}
                {/*  <div className="flex flex-row gap-4">*/}
                {/*    <input*/}
                {/*      className="form-control"*/}
                {/*      placeholder={"도서 명을 검색하세요."}*/}
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
                      <th className="border-top-0 min-w-[24px]">
                        책 제목 / 버전
                      </th>
                      <th className="border-top-0">조회수</th>
                      <th className="border-top-0">변환 상태</th>
                      <th className="border-top-0">최근 수정일</th>
                      <th className="border-top-0">추천단계</th>
                      <th className="border-top-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookList.length > 0 &&
                      bookList.map((element, index) => {
                        return (
                          <tr key={index} className="table-request">
                            <td className="min-w-[10rem] lg:w-[40rem]">
                              <div className="h-full col-td text-ellipsis">
                                <p>{element.name}</p>
                                <p className="text-muted">
                                  {version[element.version]}
                                </p>
                              </div>
                            </td>
                            <td className="w-24 min-w-[6rem]">
                              {element.views}
                            </td>
                            <td className="w-24 min-w-[6rem]">
                              {element.status}
                            </td>
                            <td className="w-36 min-w-[9rem]">
                              <div className="col-td text-ellipsis">
                                <p>
                                  {new Date(
                                    element.modifiedAt
                                  ).getUTCFullYear()}
                                  .{new Date(element.modifiedAt).getMonth() + 1}
                                  .{new Date(element.modifiedAt).getDate()}
                                </p>
                                <p className="text-muted">
                                  {new Date(element.modifiedAt).getHours()}시{" "}
                                  {new Date(element.modifiedAt).getMinutes()}분
                                </p>
                              </div>
                            </td>
                            <td className="w-24 min-w-[6rem]">
                              아책{element.step}
                            </td>
                            <td className="w-[20rem] flex flex-row justify-around border border-red-500">
                              {/*<div className="w-24">*/}
                              {/*  <GrayButton content={"통계보기"} />*/}
                              {/*</div>*/}
                              <div className="w-24">
                                <GrayButton
                                  content={"수정하기"}
                                  onClick={() => {
                                    router.push(
                                      `/admin/book/edit/${element.id}`
                                    );
                                  }}
                                />
                              </div>
                              <div className="w-24">
                                <GrayButton
                                  content={"삭제하기"}
                                  onClick={() => deleteBook(element.id)}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
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
