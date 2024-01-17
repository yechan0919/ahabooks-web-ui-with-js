import axios from "axios";
// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// "http://localhost:8080";
axios.defaults.baseURL = "http://3.39.4.193";

export const RecordService = {
  getEvaluatedList: async (param) => {
    const { data } = await axios.get("/api/evaluation/records", {
      params: {
        isEvaluated: param.isEvaluated,
        page: param.page,
        size: param.size,
        sort: param.sort,
      },
    });
    return data;
  },

  createBook: async (param) => {
    const { data } = await axios.post("/api/books", param);
    return data;
  },
};
