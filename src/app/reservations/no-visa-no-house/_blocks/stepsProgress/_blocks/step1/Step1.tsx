"use client";
import { Button } from "@/global/shadcn/ui/button";
import TReactSelect from "@/global/components/TForm/reactSelect/TReactSelect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/global/shadcn/ui/accordion";
import { arabicOrdinals } from "@/global/utils/arabic";
import TFormField from "@/global/components/TForm/TFormField";
import BackButton from "@/global/components/backButton/BackButton";
import TFormFieldWithMenu from "@/global/components/suggestionsDropdown/TFormFieldWithMenu";

type Props = {
  form: any;
  next: any;
};

export default function Step1({ form, next }: Props) {
  const data: any[] = [
    {
      name: "أحمد محمد علي",
      gender: "بيانات 1",
      nationality: "بيانات 2",
      passportNumber: "بيانات 3",
      dateOfBirth: "بيانات 4",
      expiryDate: "بيانات 5",
    },
    {
      name: "أحمد السيد أحمد",
      gender: "بيانات أ",
      nationality: "بيانات ب",
      passportNumber: "بيانات ج",
      dateOfBirth: "بيانات د",
      expiryDate: "بيانات هـ",
    },
    {
      name: "أحمد علي محمد",
      gender: "بيانات أ",
      nationality: "بيانات ب",
      passportNumber: "بيانات ج",
      dateOfBirth: "بيانات د",
      expiryDate: "بيانات هـ",
    },
    {
      name: "ناصر علي أحمد",
      gender: "بيانات أ",
      nationality: "بيانات ب",
      passportNumber: "بيانات ج",
      dateOfBirth: "بيانات د",
      expiryDate: "بيانات هـ",
    },
  ];

  // Track active dropdown index

  const handleSelectItem = (item: any, index?: number) => {
    form?.setValue(`name.${index}`, item.name);
    form?.setValue(`gender.${index}`, item.gender);
    form?.setValue(`nationality.${index}`, item.nationality);
    form?.setValue(`passportNumber.${index}`, item.passportNumber);
    form?.setValue(`dateOfBirth.${index}`, item.dateOfBirth);
    form?.setValue(`expiryDate.${index}`, item.expiryDate);
  };

  return (
    <div className="flex flex-col gap-y-3">
      <Accordion
        defaultValue="item-1"
        type="single"
        collapsible
        className="w-full flex flex-col gap-[40px]"
      >
        <BackButton text={"الرجوع للصفحة الرئيسية"} toHome />
        <AccordionItem value={`item-1`} className="border-b-0">
          <AccordionTrigger className="bg-primary-600 rounded-xl px-6 text-white">
            كيفية البدء في استخدام موقع حجز عمرة؟
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 mt-[40px]">
            <div className="flex flex-col gap-y-3">
              {Array(12)
                .fill(1)
                ?.map((_, index) => (
                  <div key={index} className="flex flex-col gap-y-3">
                    <h3 className="text-base font-bold">{`${
                      index + 1
                    }- بيانات المسافر ${arabicOrdinals(index + 1)}`}</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(248px,1fr))] gap-2 px-1">
                      <TFormFieldWithMenu
                        index={index}
                        form={form}
                        name={`name.${index}`}
                        label={"الاسم كامل بالعربية"}
                        placeholder="الاسم"
                        isRequiredStyle
                        labelClassName="text-black/60 text-xs font-bold"
                        className={
                          "placeholder:text-[#888888] placeholder:text-xs placeholder:font-bold bg-[#f6f6f6]"
                        }
                        data={data}
                        handleSelectItem={handleSelectItem}
                      />
                      <TReactSelect
                        form={form}
                        name={`gender.${index}`}
                        label={"الجنس"}
                        placeholder="الجنس"
                        isRequiredStyle
                        options={[
                          { value: "male", label: "ذكر" },
                          { value: "female", label: "انثى" },
                        ]}
                        labelClassName="text-black/60 text-xs font-bold"
                        placeholderStyle={{
                          color: "#888888",
                          fontWeight: "normal",
                          fontSize: "12px",
                        }}
                        triggerBackground={"#f6f6f6"}
                      />
                      <TReactSelect
                        form={form}
                        name={`nationality.${index}`}
                        label={"الجنسية"}
                        placeholder="الجنسية"
                        isRequiredStyle
                        options={[]}
                        labelClassName="text-black/60 text-xs font-bold"
                        placeholderStyle={{
                          color: "#888888",
                          fontWeight: "normal",
                          fontSize: "12px",
                        }}
                        triggerBackground={"#f6f6f6"}
                      />
                      <TReactSelect
                        form={form}
                        name={`passportType.${index}`}
                        label={"نوع الهويه"}
                        placeholder="نوع الهويه"
                        isRequiredStyle
                        options={[]}
                        labelClassName="text-black/60 text-xs font-bold"
                        placeholderStyle={{
                          color: "#888888",
                          fontWeight: "normal !important",
                          fontSize: "12px",
                        }}
                        triggerBackground={"#f6f6f6"}
                      />
                      <TFormField
                        type="number"
                        form={form}
                        name={`passportNumber.${index}`}
                        label={"رقم الهويه"}
                        placeholder={"رقم الهوية الوطنية (10 أرقام)"}
                        isRequiredStyle
                        labelClassName="text-black/60 text-xs font-bold"
                        className={
                          "placeholder:text-[#888888] placeholder:text-xs placeholder:font-bold bg-[#f6f6f6]"
                        }
                      />
                    </div>
                  </div>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        type="button"
        onClick={next}
        className={
          "h-[60px] px-24 py-[22px] bg-[#8b6343] rounded-[90px] justify-center items-center w-full text-base font-extrabold"
        }
      >
        التالي
      </Button>
    </div>
  );
}
