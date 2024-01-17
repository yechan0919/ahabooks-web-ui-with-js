import { useRouter } from "next/router";
import PaymentBlockBox from "../payment/PaymentBlockBox";

export default function Section6() {
  const router = useRouter();

  const goPage = async (url) => {
    router.push(url).then(() => {
      document.body.scrollTo(0, 0);
    });
  };

  return (
    <div className={"py-16 bg-[#FAFAFA]"}>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4 mb-8">
        <h1>
          <span
            className={"text-left font-bold text-2xl md:text-3xl lg:text-4xl"}
          >
            첫 달은 무료 체험으로 간편하게!
          </span>
        </h1>
        <p className={"text-left font-semibold text-[#888888]"}>
          요금제를 자유롭게 선택하세요
        </p>
      </div>
      <PaymentBlockBox />
    </div>
  );
}
