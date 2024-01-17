import { useEffect, useState } from "react";
import BookUnit from "../../../components/user/book/BookUnit";
import Link from "next/link";
import Section1 from "../../../components/user/home/Section1";
import Section2_1 from "../../../components/user/home/Section2_1";
import Section2_2 from "../../../components/user/home/Section2_2";
import Section2_3 from "../../../components/user/home/Section2_3";
import Section2_4 from "../../../components/user/home/Section2_4";
import Section3 from "../../../components/user/home/Section3";
import Section4 from "../../../components/user/home/Section4";
import Section5 from "../../../components/user/home/Section5";
import Section6 from "../../../components/user/home/Section6";
import HeadTitle from "../../../components/common/HeadTitle";
import { BookService } from "../../../services/BookService";
import { GetBookListRequest } from "../../../typings/Book";

export default function Home() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getBookList();
  }, []);

  const getBookList = async () => {
    const getBookListRequest = new GetBookListRequest();
    getBookListRequest.size = 30;
    getBookListRequest.page = 0;
    getBookListRequest.sort = "createdAt,desc";
    const res = await BookService.getBookList(getBookListRequest);
    setBookList([...res.data]);
  };
  return (
    <div className={" h-full flex flex-col overflow-hidden"}>
      <HeadTitle title={"아책"} />

      {/* -> wrapper */}
      {/* section 1 : 책이 이해될 때 아하!*/}
      <Section1 />

      {/*/!* section 2_1 : 언어발달 전문가가 분류한 단계별 책 *!/*/}
      <Section2_1 bookList={bookList} />

      {/*/!* section 2_2 : 가장 많은 어린이가 추천한 책 *!/*/}
      <Section2_2 bookList={bookList} />

      {/* section 2_3 : 새로 나온 책 */}
      <Section2_3 bookList={bookList} />

      {/* section 2_3 : 문학 / 비문학*/}
      <Section2_4 bookList={bookList} />

      {/* section 3 : 아책만의 특별한 3가지 특징 */}
      <Section3 />

      {/* section 4 : 어플을 다운로드 받고, 모든 서비스를 이용하세요. */}
      <Section4 />

      {/* section 5 : 몽당 월 9,000원 */}
      <Section5 />

      {/* section 6 */}
      <Section6 />

      {/* Wrapper -> */}
    </div>
  );
}
