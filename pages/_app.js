import AdminLayout from "components/admin/layout/AdminLayout";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Layout from "components/user/layout/Layout";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  return (
    <RecoilRoot>
      {router.pathname.includes("/admin") &&
      !router.pathname.includes("/admin/login") ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : router.pathname.includes("/app") ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </RecoilRoot>
  );
}

export default MyApp;
