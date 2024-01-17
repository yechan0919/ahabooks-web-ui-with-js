import React from "react";
import HeadTitle from "../../../components/common/HeadTitle";

const Policy = () => {
  return (
    <div className="overflow-hidden relative text-left h-full z-10">
      <HeadTitle title={"개인정보처리방침"} />

      <div className="mx-8 px-8 lg:px-20 overflow-hidden mx-auto xl:max-w-[80rem] 2xl:max-w-[120rem] z-10 h-full">
        <h1 className={"font-bold text-2xl my-8"}>개인정보 처리방침</h1>
        <div
          className={
            "w-full h-full flex flex-col bg-[#FCF9F1] rounded-lg p-4 md:p-12 mb-16"
          }
        >
          <div className={"flex flex-col gap-6"}>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>1. 개인정보의 처리 목적</h1>
              <p>
                <b>
                  {"<"}웨이워커스{">"}(‘www.ahabooks.co.kr’이하 ‘웨이워커스’)
                </b>{" "}
                는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적
                이외의 용도로는 이용하지 않습니다. <br /> – 고객 가입의사 확인,
                고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격
                유지.관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는
                서비스의 공급.배송 등
              </p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>2. 개인정보의 처리 및 보유 기간</h1>
              <p>
                ① ‘웨이워커스’는 정보주체로부터 개인정보를 수집할 때 동의 받은
                개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간
                내에서 개인정보를 처리․보유합니다.
              </p>
              <p>
                ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다. – 고객
                가입 및 관리 : 카카오계정을 통한 회원가입 및 관리 – 보유 기간 :
                카카오채널 탈퇴 시, 즉시 삭제
              </p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>
                3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법
              </h1>{" "}
              <p>
                이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
              </p>{" "}
              <p>
                ① 정보주체는 ‘웨이워커스’ 에 대해 언제든지 다음 각 호의 개인정보
                보호 관련 권리를 행사할 수 있습니다.
              </p>{" "}
              <div
                className={
                  "border-l border-gray-300 ml-2 pl-4 flex flex-col gap-2"
                }
              >
                <p>
                  1. 개인정보 열람요구 <br />
                  2. 오류 등이 있을 경우 정정 요구 <br />
                  3. 삭제요구 <br />
                  4. 처리정지 요구
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>4. 처리하는 개인정보의 항목 작성</h1>
              <p>① ‘웨이워커스’는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <div
                className={
                  "border-l border-gray-300 ml-2 pl-4 flex flex-col gap-2"
                }
              >
                <p>
                  <b>
                    {"<"}‘웨이워커스’에서 수집하는 개인정보 항목{">"}
                  </b>
                </p>
                <p>
                  ‘웨이워커스’ 회원 가입 및 고객 문의 시, 제공 동의를 해주시는
                  개인정보 수집 항목입니다.{" "}
                </p>
                <p>
                  ■ 회원 가입 시(회원)
                  <br /> – 필수항목 : 이름, 이메일, 전화번호, 성별, 생년월일{" "}
                  <br />– 선택항목 : 없음 <br />– 수집목적 : 웨이워커스 회원관리{" "}
                  <br />– 보유기간 : 회원 탈퇴 또는 동의철회 시 지체없이 파기
                </p>
                <p>
                  ■ 고객 문의 시(비회원) <br />– 필수항목 : 문의종류, 이름,
                  휴대폰번호, 이메일, 문의사항 <br />– 수집목적 : 고객문의 및
                  상담요청에 대한 회신, 상담을 위한 서비스 이용기록 조회 <br />–
                  보유기간 : 문의 접수 후 2년 간 보관 (단, 관계 법령이 정한
                  시점까지 보존)
                </p>
                <p>
                  <b>
                    {"<"}카카오 개인정보 제3자 제공 동의{">"}
                  </b>
                </p>
                <p>
                  아래는 ‘웨이워커스’ 회원 가입 시(카카오 계정을 통한 간편
                  가입시) 제공 동의를 해주시는 자동 수집 항목입니다. <br />–
                  필수항목 : 프로필 정보(닉네임/프로필 사진) <br />– 선택항목 :
                  카카오계정(이메일), 카카오계정(전화번호), 성별, 연령대, 생일,
                  출생연도 <br />– 수집목적 : 웨이워커스 카카오채널을 통한
                  회원관리 <br />– 보유기간 : 카카오채널 탈퇴 또는 동의철회 시
                  지체없이 파기
                </p>
              </div>

              <p>
                ② ‘웨이워커스’는 만 14세 미만 아동의 개인정보를 보호하기 위하여
                회원가입은 만14세 이상만 가능하도록 함으로써 아동의 개인정보를
                수집하지 않습니다.
              </p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>5. 개인정보의 파기</h1>
              <p>
                ‘웨이워커스’는 원칙적으로 개인정보 처리목적이 달성된 경우에는
                지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은
                다음과 같습니다.
              </p>{" "}
              <div
                className={
                  "border-l border-gray-300 ml-2 pl-4 flex flex-col gap-2"
                }
              >
                <div className={"flex flex-col gap-1"}>
                  <p>
                    <b>- 파기절차</b>
                  </p>{" "}
                  <p>
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에
                    옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련
                    법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때,
                    DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른
                    목적으로 이용되지 않습니다.
                  </p>
                </div>
                <div className={"flex flex-col gap-1"}>
                  <p>
                    <b>- 파기기한</b>
                  </p>{" "}
                  <p>
                    이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
                    보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적
                    달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가
                    불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로
                    인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>
                6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
              </h1>
              <p>
                ① ‘웨이워커스’는 정보주체의 이용정보를 저장하고 수시로 불러오는
                ‘쿠키(cookie)’를 사용하지 않습니다.
              </p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>7. 개인정보 보호책임자 작성</h1>
              <p>
                {" "}
                ① ‘웨이워커스’는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을
                위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div
                className={
                  "border-l border-gray-300 ml-2 pl-4 flex flex-col gap-2"
                }
              >
                <p>
                  <b>▶ 개인정보 보호책임자</b> <br />
                  성명 : 이종민
                  <br /> 직책 : 대표
                  <br />
                  직급 : CEO
                  <br /> 연락처 : rexlee2001@gmail.com
                </p>
              </div>
              <p>
                ② ‘웨이워커스’의 서비스(또는 사업)을 이용하시면서 발생한 모든
                개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
                개인정보 보호책임자 로 문의하실 수 있습니다. <br />
                ‘웨이워커스’는 정보주체의 문의에 대해 지체 없이 답변 및
                처리해드릴 것입니다.
              </p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>8. 개인정보 처리방침 변경</h1>
              <p>
                ① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에
                따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의
                시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>9. 개인정보의 안전성 확보 조치</h1>{" "}
              <p>
                ‘웨이워커스’는 개인정보보호법 제29조에 따라 다음과 같이 안전성
                확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
              </p>{" "}
              <div
                className={
                  "border-l border-gray-300 ml-2 pl-4 flex flex-col gap-2"
                }
              >
                <p>
                  <b>① 개인정보 취급</b> <br />
                  직원의 최소화 및 교육 개인정보를 취급하는 직원을 지정하고
                  담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을
                  시행하고 있습니다.
                </p>
                <p>
                  <b>② 해킹 등에 대비한 기술적 대책</b>
                  <br /> ‘웨이워커스’는 해킹이나 컴퓨터 바이러스 등에 의한
                  개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고
                  주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에
                  시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.{" "}
                </p>
                <p>
                  <b>③ 개인정보의 암호화</b>
                  <br /> 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및
                  관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및
                  전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의
                  별도 보안기능을 사용하고 있습니다.{" "}
                </p>
                <p>
                  <b>④ 접속기록의 보관 및 위변조 방지</b>
                  <br /> 개인정보처리시스템에 접속한 기록을 최소 6개월 이상
                  보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지
                  않도록 보안기능 사용하고 있습니다.{" "}
                </p>
                <p>
                  <b>⑤ 개인정보에 대한 접근 제한</b>
                  <br /> 개인정보를 처리하는 데이터베이스시스템에 대한
                  접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를
                  위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여
                  외부로부터의 무단 접근을 통제하고 있습니다.
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h1 className={"font-bold"}>
                10. 정보주체의 권익침해에 대한 구제방법{" "}
              </h1>
              <p>
                아래의 기관은 <b>(주)웨이워커스</b>와는 별개의 기관으로서,
                ‘웨이워커스’의 자체적인 개인정보 불만처리, 피해구제 결과에
                만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여
                주시기 바랍니다.
              </p>
              <div
                className={
                  "border-l border-gray-300 ml-2 pl-4 flex flex-col gap-2"
                }
              >
                <div className={"flex flex-col gap-1"}>
                  <p>
                    <b>▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)</b>
                  </p>
                  <p>
                    – 소관업무 : 개인정보 침해사실 신고, 상담 신청 <br />–
                    홈페이지 : privacy.kisa.or.kr <br />– 전화 : (국번없이) 118{" "}
                    <br />– 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2)
                    3층 개인정보침해신고센터
                  </p>
                </div>
                <div className={"flex flex-col gap-1"}>
                  <p>
                    <b>▶ 개인정보 분쟁조정위원회</b>
                  </p>
                  <p>
                    – 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적
                    해결) <br />– 홈페이지 : www.kopico.go.kr <br />– 전화 :
                    (국번없이) 1833-6972 <br />– 주소 : (03171)서울특별시 종로구
                    세종대로 209 정부서울청사 4층
                  </p>
                </div>
                <div className={"flex flex-col gap-1"}>
                  <p>
                    <b>▶ 대검찰청 사이버범죄수사단</b>
                  </p>
                  <p>- 연락처 : 02-3480-3573 (www.spo.go.kr)</p>
                </div>
                <div className={"flex flex-col gap-1"}>
                  <p>
                    <b>▶ 경찰청 사이버안전국</b>
                  </p>
                  <p>- 연락처 : 182 (http://cyberbureau.police.go.kr)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
