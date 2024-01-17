import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = "http://3.39.4.193";

export const AccountService = {
  createAccount: async (param) => {
    const { data } = await axios.post("/api/accounts", {
      name: param.name,
      phone: param.phone1 + "-" + param.phone2 + "-" + param.phone3,
      email: param.email,
    });
    return data;
  },

  /**
   * 정봇 수정 (name, email, phone)
   */
  updateAccount: async (userId, param) => {
    const { data } = await axios.put(`/api/accounts/${userId}`, param);
    return data;
  },

  /**
   * 취약계층 여부 수정
   */
  updatevulnerable: async (userId, param) => {
    const { data } = await axios.put(`/api/accounts/${userId}/vulnerable`, {
      isVulnerable: param.isVulnerable,
    });
  },

  getAccountList: async (param) => {
    const { data } = await axios.get("/api/accounts", {
      params: {
        size: param.size,
        page: param.page,
      },
    });
    return data;
  },
  getAccountDetail: async (param) => {
    const { data } = await axios.get(`/api/accounts/${param}`);
    return data;
  },
};
