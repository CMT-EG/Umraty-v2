export const arabicOrdinals = (num: number): string => {
  const ones = [
    "",
    "الأول",
    "الثاني",
    "الثالث",
    "الرابع",
    "الخامس",
    "السادس",
    "السابع",
    "الثامن",
    "التاسع",
  ];
  const teens = [
    "الحادي عشر",
    "الثاني عشر",
    "الثالث عشر",
    "الرابع عشر",
    "الخامس عشر",
    "السادس عشر",
    "السابع عشر",
    "الثامن عشر",
    "التاسع عشر",
  ];
  const tens = [
    "",
    "العاشر",
    "العشرون",
    "الثلاثون",
    "الأربعون",
    "الخمسون",
    "الستون",
    "السبعون",
    "الثمانون",
    "التسعون",
  ];
  const hundreds = [
    "",
    "المائة",
    "المئتان",
    "الثلاثمائة",
    "الأربعمائة",
    "الخمسمائة",
    "الستمائة",
    "السبعمائة",
    "الثمانمائة",
    "التسعمائة",
  ];

  if (num === 1) return "الأول";
  if (num >= 2 && num <= 9) return ones[num];
  if (num >= 11 && num <= 19) return teens[num - 11];
  if (num % 10 === 0 && num < 100) return tens[num / 10];

  const remainder = num % 10;
  const base = Math.floor(num / 10) * 10;

  if (base === 10) return `ال${ones[remainder]} عشر`;
  if (remainder === 1) return `الحادي ${tens[base / 10]}`;
  if (remainder === 2) return `الثاني ${tens[base / 10]}`;
  const result = `${ones[remainder]} و${tens[base / 10]}`;

  const hundredPart = Math.floor(num / 100);
  const remainderPart = num % 100;
  if (hundredPart > 0) {
    if (remainderPart === 0) return hundreds[hundredPart];
    return `${hundreds[hundredPart]} و${arabicOrdinals(remainderPart)}`;
  }

  return result;
};
