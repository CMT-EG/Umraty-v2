
export function validateCreditCardType(cardNumber: string) {
  const sanitized = cardNumber.replace(/\D/g, "");

  if (/^4\d{12}(\d{3})?$/.test(sanitized)) {
    return "Visa";
  } else if (
    /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/.test(
      sanitized
    )
  ) {
    return "MasterCard";
  } else {
    return null;
  }
}

export function validateCreditCardNumber(cardNumber: string) {
  const sanitized = cardNumber.replace(/\D/g, "");

  const cardType = validateCreditCardType(cardNumber);
  if (!cardType) return false;

  // Validate using Luhn algorithm
  let sum = 0;
  let shouldDouble = false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  const isValid = sum % 10 === 0;
  return isValid;
}
