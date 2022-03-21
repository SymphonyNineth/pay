class Validation {
  static validateBasicNumber(number, length) {
    return !isNaN(number) && number.toString().length === length && number.toString().length;;
  }

  static validatenumber(number) {
    return Validation.validateBasicNumber(number, 16);
  }

  static validateexprDate(timestamp) {
    return timestamp > Date.now();
  }

  static validatecvv(cvv) {
    return Validation.validateBasicNumber(cvv, 3);
  }
  static validateamount(amount) {
    return Validation.validateBasicNumber(amount, amount.toString().length);
  }
}

function validateCard(card) {
  for (const key of Object.keys(card)) {
    if (!Validation[`validate${key}`](card[key])) {
      return { isValid: false, key, msg: `Invalid ${key}` };
    }
  }
  return { isValid: true, msg: "Ok" };
}

module.exports = { validateCard };
