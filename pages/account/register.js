import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 *
 */
export default function Register() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.accessToken && router.query.id)
      saveToken(router.query.accessToken, router.query.id);
  }, [router.query]);

  const saveToken = async (token, id) => {
    sessionStorage.setItem("loginToken", token);
    sessionStorage.setItem("userId", id);

    router.push("/app/login/register");
  };

  return <></>;
}
