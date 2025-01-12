import { z } from "zod";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

export const phoneSchema = z.object({
  phone: z
    .object({
      phone_number: z.string().min(1, "رقم الهاتف مطلوب"),
      phone_code: z.string().min(1, "رمز المدينة مطلوب"),
    })
    .refine(
      (val) => {
        if (!val.phone_number || !val.phone_code) {
          return true;
        }
        try {
          return phoneUtil.isValidNumber(
            phoneUtil.parseAndKeepRawInput(
              `+${val.phone_code}${val.phone_number}`
            )
          );
        } catch {
          return false;
        }
      },
      { message: "رقم الهاتف غير صحيح" }
    ),
});
