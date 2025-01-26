import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/global/shadcn/ui/accordion";
import Link from "next/link";

export default function Product() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {Array(6)
        .fill(1)
        ?.map((_, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>
              كيفية البدء في استخدام موقع حجز عمرة؟
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
              <p>
                يعمل موقع حجز عمرة على تسهيل تجربة الحجز للمستخدمين من خلال
                واجهة مستخدم بسيطة وسهلة الاستخدام. يمكن للمستخدمين البحث عن
                العروض المتاحة، اختيار الحزمة المناسبة، وإتمام عملية الحجز عبر
                خطوات واضحة. يوفر الموقع أيضًا معلومات شاملة عن كل عرض، بما في
                ذلك التفاصيل والأسعار، مما يساعد المستخدمين على اتخاذ قرارات
                مستنيرة. كما يتيح لهم إمكانية الدفع عبر الإنترنت باستخدام خيارات
                متعددة، مما يجعل العملية سريعة وآمنة.
              </p>
              <Link
                href="#"
                className="inline-flex justify-center items-center gap-3 border-[#e5e8eb] border-2 mt-5 px-6 py-4 rounded-[90px] w-[200px]"
              >
                تعرف على المزيد
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
