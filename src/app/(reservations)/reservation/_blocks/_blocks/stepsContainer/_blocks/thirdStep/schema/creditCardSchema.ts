import { validateCreditCardNumber } from "@/global/utils/creditCards";
import { z } from "zod";

export const creditCardSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^\d+$/, "رقم البطاقة غير صالح")
    .min(13, "رقم البطاقة يحب ان لا يقل عن 13 رقم")
    .max(19, "رقم البطاقة يحب ان لا يزيد عن 19 رقم ")
    .refine(validateCreditCardNumber, "رقم البطاقة غير صالح"),
  expDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "تاريخ انتهاء الصلاحية يحب ان يكون MM/YY"
    )
    .refine(
      (val) => {
        const [month, year] = val.split("/");
        const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
        return expDate > new Date();
      },
      { message: "تاريخ انتهاء الصلاحية غير صالح" }
    ),
  cvv: z
    .string()
    .regex(/^\d+$/, "رمز التحقق من البطاقة  غير صالح")
    .min(3, "رمز التحقق من البطاقة يجب ان لا يقل عن 3 ارقام")
    .max(4, "رمز التحقق من البطاقة يجب ان لا يزيد عن 4 ارقام"),
  holderName: z.string(),
  country: z.string(),
});
