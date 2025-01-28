import { z } from "zod";

export const getEvaluationSchema = (_t?: any) =>
  z.object({
    name_en: z
      .string({
        required_error: "الاسم مطلوب",
      })
      .min(1, { message: "الاسم مطلوب" }),
    name_ar: z
      .string({
        required_error: "الاسم مطلوب",
      })
      .min(1, { message: "الاسم مطلوب" }),
      // vehicleRegistration: z.instanceof(File).nullable().optional(),
      // operatingCard: z.instanceof(File).nullable().optional(),
  });
