import axios from "axios";
// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// "http://localhost:8080";
axios.defaults.baseURL = "http://3.39.4.193";

export const BookService = {
  getBookList: async (param) => {
    const { data } = await axios.get("/api/books", {
      params: {
        size: param.size,
        page: param.page,
        sort: param.sort,
      },
    });
    return data;
  },

  createBook: async (param) => {
    const { data } = await axios.post("/api/books", param);
    return data;
  },
  updateBook: async (param, id) => {
    const { data } = await axios.put(`/api/books/${id}`, param);
    return data;
  },
  deleteBook: async (bookId) => {
    const { data } = await axios.delete(`/api/books/${bookId}`);
    return data;
  },

  searchBook: async (param) => {
    const query = `${param.keyword === "" ? "" : param.keyword + "?"}display=${
      param.display
    }&start=${param.start}`;

    const url = `/total/` + query;
    const res = await axios.post(url);
    return res;
  },

  /**
   * 도서 세부 정보 조회
   */
  getBookDetail: async (param) => {
    const { data } = await axios.get(`/api/books/${param}`);
    return data;
  },

  getBooksContents: async (id) => {
    const { data } = await axios.get(`/api/books/${id}/read`);
    return data;
  },
};
