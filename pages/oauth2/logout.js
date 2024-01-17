import { useEffect } from "react";
import { useRouter } from "next/router";
import { LoginService } from "../../services/LoginService";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    logout();
    removeInfo();
  }, []);

  const logout = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? sessionStorage.getItem("accessToken")
          : null;
      if (token) {
        const res = await LoginService.logout(token);
      }
    } catch {}
  };

  const removeInfo = async () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("role");

    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/app/home`);
  };
  return <></>;
}
