import { useEffect } from "react";
import { useRouter } from "next/router";
import { AccountService } from "../../services/AccountService";
import { useRecoilState } from "recoil";
import { loginUserState } from "../../states/loginUser";

export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    if (router.query.accessToken && router.query.id)
      redirect(router.query.accessToken, router.query.id);
  }, [router.query]);

  const redirect = async (accessToken, id) => {
    const userId = id;
    const { data } = await AccountService.getAccountDetail(userId);
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("userEmail", data.email);
    sessionStorage.setItem("userId", data.id);
    sessionStorage.setItem("userName", data.name);
    sessionStorage.setItem("role", data.role);
    if (data.role === "ADMIN") router.push("/admin/dashboard");
    else router.push("/app/home");
  };
  return <></>;
}
