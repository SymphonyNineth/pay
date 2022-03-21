const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  number: {
    type: String,
    required: true,
  },
  exprDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: Number,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

module.exports = model("Card", cardSchema);

// - Card Number
// - Expiration Date
// - CVV
// - Amount

// 2) Валидация:
// - Card Number - (только цифры, длина значения 16)
// - Expiration Date (формат даты MM/YYYY)
// - CVV (только цифры, длина значения 3)
// - Amount (только цифры)
