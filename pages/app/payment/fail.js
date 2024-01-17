import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Fail() {
  const router = useRouter();
  useEffect(() => {
    if (router.query.errorMsg && router.query.errorCode)
      init(router.query.errorMsg, router.query.errorCode);
  }, [router.query]);
  const init = async (message, code) => {
    alert("결제에 실패하였습니다. 다시 시도해주세요.");

    router.push("/app/payment");
  };
  return <></>;
}
