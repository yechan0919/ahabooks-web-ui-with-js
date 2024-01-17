import axios from "axios";
axios.defaults.baseURL = "http://3.39.4.193";

const headers = {
  Authorization: "Basic ",
};

/**
 * 1. 서버 쪽 successURL 가기
 * 2. 금액 검증?
 * 3.
 *
 */
export const PayService = {
  sendRequestToServer: async (param) => {
    const { data } = await axios.post("/api/payment", {
      ...param,
      sort: "createdAt,desc",
    });
    return data;
  },

  getPaymentList: async (userId) => {
    const { data } = await axios.get(`/api/accounts/${userId}/payment`);
    return data;
  },

  requestToToss: async (param) => {
    const { data } = await axios.post(
      `https://api.tosspayments.com/v1/payments/confirm`,
      {
        orderId: param.orderId,
        paymentKey: param.orderId,
        amount: param.orderId,
      },
      {
        headers: headers,
      }
    );
    return data;
  },
};
