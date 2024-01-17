import axios from "axios";
axios.defaults.baseURL = "http://3.39.4.193:8080";

const headers = {
  accept: "*/*",
  "Content-Type": "multipart/form-data",
  // "Access-Control-Allow-Headers": "*",
};

export const FileService = {
  uploadFile: async (param) => {
    const { data } = await axios.post("/api/file/upload", param, {
      headers: headers,
    });
    return data;
  },
};
