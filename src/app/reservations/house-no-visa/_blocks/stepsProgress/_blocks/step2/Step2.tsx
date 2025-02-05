"use client";

import React from "react";
import { Button } from "@/global/shadcn/ui/button";
import TButton from "@/global/components/TForm/TButton";
import useMediaQuery from "@/global/hooks/mediaQuery/useMediaQuery";
import DisplayViewField from "@/global/components/displayViewField/DisplayViewField";
import PageFromV2 from "@/global/components/pageFromV2/PageFromV2";
import ServiceTitle from "@/global/components/serviceTitle/ServiceTitle";
import BackButton from "@/global/components/backButton/BackButton";

type Props = {
  form: any;
  prev: any;
  next: any;
};
export default function Step2({ form: _form, prev, next }: Props) {
  // form.watch("")
  const isDesktop = useMediaQuery("(min-width: 1314px)");

  return (
    <div className="flex flex-col gap-3">
      <BackButton text={"الرجوع للخلف"} prev={prev} />

      <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-[#8b6343]">
        {Array(1)
          .fill(1)
          ?.map((_item, index) => (
            <div key={index} className="flex flex-col">
              <ServiceTitle title={"باقة الخدمة"} />
              <hr className="block w-full my-4" />
              <PageFromV2 title={"الخدمة رقم 1"}>
                <>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                      <DisplayViewField
                        value={"باقة الخدمة الأساسية ( غير شامل السكن)"}
                        label={"نوع الخدمة"}
                        labelClassName={"min-w-[280px]"}
                        isHorizontal={isDesktop ? true : false}
                      />
                      <DisplayViewField
                        value={"مركز التجمع 1 , مدينة جدة"}
                        label={"نقطة الانطلاق"}
                        labelClassName={"min-w-[280px]"}
                        isHorizontal={isDesktop ? true : false}
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                      <DisplayViewField
                        value={"22/02/2025"}
                        label={"تاريخ الذهاب "}
                        labelClassName={"min-w-[280px]"}
                        isHorizontal={isDesktop ? true : false}
                      />
                      <DisplayViewField
                        value={"29/02/2025"}
                        label={"تاريخ العودة"}
                        labelClassName={"min-w-[280px]"}
                        isHorizontal={isDesktop ? true : false}
                      />
                    </div>
                    <DisplayViewField
                      value={"4"}
                      label={"عدد الأشخاص"}
                      labelClassName={"min-w-[280px]"}
                      isHorizontal={isDesktop ? true : false}
                    />
                    <hr className="my-4" />

                    <DisplayViewField
                      value={"700 ريال"}
                      label={"سعر الشخص"}
                      labelClassName={"min-w-[280px]"}
                      isHorizontal={isDesktop ? true : false}
                    />
                    <DisplayViewField
                      value={"210 ريال"}
                      label={"ضريبة القيمة المضافة"}
                      labelClassName={"min-w-[280px]"}
                      isHorizontal={isDesktop ? true : false}
                    />
                    <DisplayViewField
                      value={"1820 ريال"}
                      label={"الإجمالي"}
                      labelClassName={"min-w-[280px]"}
                      isHorizontal={isDesktop ? true : false}
                    />
                    <DisplayViewField
                      items={[
                        "- يجب على المعتمرين تقديم جواز سفر ساري المفعول.",
                        "- يجب دفع المبلغ الكامل قبل 30 يومًا من موعد الرحلة.",
                        "- يمكن إلغاء الحجز مع استرداد جزئي قبل 15 يومًا من الرحلة.",
                        "- يتم توفير وجبات إفطار مجانية خلال فترة الإقامة.",
                      ]}
                      label={"شروط الخدمة"}
                      labelClassName={"min-w-[280px]"}
                      isHorizontal={isDesktop ? true : false}
                    />
                  </div>
                </>
              </PageFromV2>
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-[#8b6343]">
        <div className="flex flex-col">
          <ServiceTitle title={"إجمالي تكلفة الخدمات"} />
          <hr className="block w-full my-4" />
          <PageFromV2>
            <>
              <div className="flex flex-col gap-4 w-full">
                <DisplayViewField
                  value={"80 ريال"}
                  label={"الإجمالي غير شامل الضريبة"}
                  labelClassName={"min-w-[280px]"}
                  isHorizontal={isDesktop ? true : false}
                />
                <DisplayViewField
                  value={"15 ريال"}
                  label={"ضريبة  القيمة المضافة 15 %"}
                  labelClassName={"min-w-[280px]"}
                  isHorizontal={isDesktop ? true : false}
                />
                <DisplayViewField
                  value={"95 ريال"}
                  label={"الاجمالي شامل ضريبة القيمة المضافة"}
                  labelClassName={"min-w-[280px]"}
                  isHorizontal={isDesktop ? true : false}
                />
              </div>
            </>
          </PageFromV2>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-[#8b6343]">
        <p className="text-[#131416] text-2xl font-extrabold font-Alexandria">
          إجمالي المطلوب للدفع : 415 ريال
        </p>
      </div>

      <div className="flex flex-col gap-2 self-end mt-4 w-full">
        <Button
          type="button"
          onClick={next}
          className={
            "h-[60px] px-24 py-[22px] bg-[#8b6343] rounded-[90px] justify-center items-center w-full text-base font-extrabold"
          }
        >
          تأكيد الحجز
        </Button>
      </div>
    </div>
  );
}
