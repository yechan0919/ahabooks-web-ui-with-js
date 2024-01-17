import axios from "axios";
axios.defaults.baseURL = "3.39.4.193";

export const LoginService = {
  kakaoLogin: async () => {
    const { data } = await axios.get("/oauth2/authorization/kakao");
    return data;
  },

  kakaoLogout: async () => {
    const { data } = await axios.get("");
    return data;
  },

  logout: async (token) => {
    const { data } = await axios.post(`/api/redirect/logout`, token);
    return data;
  },
};
