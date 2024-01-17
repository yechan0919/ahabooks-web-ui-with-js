/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "/",
  },
  reactStrictMode: false,
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/landing",
      //   permanent: true,
      // },
      // {
      //   source: "/admin",
      //   destination: "/landing",
      //   permanent: true,
      // },
      // {
      //   source: "/admin/:path",
      //   destination: "/landing",
      //   permanent: true,
      // },
      // {
      //   source: "/app/:path",
      //   destination: "/landing",
      //   permanent: true,
      // },
      // {
      //   source: "/account",
      //   destination: "/landing",
      //   permanent: true,
      // },

      //  경계선
      {
        source: "/admin",
        destination: "/admin/dashboard",
        permanent: true,
      },
      {
        source: "/",
        destination: "/app/home",
        permanent: true,
      },
      {
        source: `/server/:path*`,
        destination: `http://localhost:8080/:path*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
