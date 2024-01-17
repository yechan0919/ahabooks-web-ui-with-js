export class CreatePaymentRequest {
  accountId; // 구매자 id
  amount; // 지불금액
  customerEmail; // 구매자 이메일
  customerName; // 구매자 이름
  orderName; // 주문 상품 이름
  payType; // 지불방법 (BOOK_GIFT_CERTIFICATE, CARD, CULTURE_GIFT_CERTIFICATE, GAME_GIFT_CERTIFICATE, MOBILE_PHONE, TOSSPAY, TRANSFER, VIRTUAL_ACCOUNT)
}
