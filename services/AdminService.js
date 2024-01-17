import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = "http://3.39.4.193";

export const AdminService = {
  getDashboardInfo: async () => {
    const { data } = await axios.get("/api/home");
    return data;
  },
  updateEvaluation: async (param, id) => {
    const { data } = await axios.put(`/api/evaluations/${id}`, param);
    return data;
  },
};
