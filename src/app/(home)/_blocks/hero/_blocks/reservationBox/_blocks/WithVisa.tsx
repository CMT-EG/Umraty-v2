"use client";
import { TabsContent } from "@/global/shadcn/ui/tabs";
import React from "react";
import { SelectOption } from "@/global/components/selectOption/SelectOption";
// import PreferenceSelector from "@/global/components/PreferenceSelect/PreferenceSelector";
import { useReservation } from "../hooks/useReservation";
import { fakeData } from "../constants/data";
import { HotelIcon, Plane } from "lucide-react";
import CustomRadioGroup from "@/global/components/TForm/CustomRadioGroup";
import { AirlineCombobox } from "../api/withVisa/SelectAirline";

export const WithVisa = ({ isVisa }) => {
  const { step, handleNextStep, handleSelectionChange } = useReservation();
  const options = [
    { value: true, label: "نعم" },
    { value: false, label: "لا" },
  ];

  const handleValueChange = (value: string) => {
    console.log("Selected airline ICAO code:", value);
  };
  return (
    <TabsContent value={isVisa}>
      <div className="w-[95%] mb-8 flex justify-between items-center mx-auto relative">
        <div>
          <div
            className={`w-10 h-10 ${step === 1 ? "bg-primary-600" : "bg-primary-400"
              } rounded-xl flex items-center justify-center mx-auto z-10 relative`}
          >
            <Plane
              className="rotate-[270deg] h-6 w-6"
              fill="#fff"
              color="transparent"
            />
          </div>
          <h3
            className={`text-center text-xl ${step === 1 ? "text-primary-600" : "text-primary-400"
              } font-extrabold`}
          >
            تفاصيل الطيران
          </h3>
        </div>
        <div className="flex-1 border-t border-dashed border-t-primary-500 mb-6 absolute top-1/3 left-1/2 -translate-x-1/2  w-[85%] z-0"></div>
        <div>
          <div
            className={`w-10 h-10 ${step === 1 ? "bg-[#888888]" : "bg-primary-600"
              } rounded-xl flex items-center justify-center mx-auto z-10 relative`}
          >
            <HotelIcon color="#fff" className="h-6 w-6" />
          </div>
          <h3
            className={`text-center text-xl ${step === 1 ? "text-[#888888]" : "text-primary-600"
              } font-extrabold`}
          >
            الخدمات والسكن
          </h3>
        </div>
      </div>

      {step === 1 ? (
        <div>
          <AirlineCombobox
            placeholder="اختر شركة الطيران "
            title="شركة الطيران"
            required
            contentClassName="block !w-full"
            onValueChange={handleValueChange}
          />
          <div className="flex items-center gap-4 w-full mt-4">
            <div className="flex-1">
              <SelectOption
                title="تاريخ الذهاب"
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر تاريخ الذهاب"
              />
            </div>
            <div className="flex-1">
              <SelectOption
                title="تاريخ العودة"
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر تاريخ العودة"
              />

            </div>
          </div>
          <div className="flex items-center gap-4 w-full mt-4">
            <div className="flex-1">
              <SelectOption
                title="نقطة الانطلاق"
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر نقطة الانطلاق"
              />
            </div>
            <div className="flex-1">
              <SelectOption
                title="نقطة الوصول"
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر نقطة الوصول"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full mt-4">
            <div className="flex-1">
              <SelectOption
                title="رقم الذهاب"
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر رقم الرحلة"
              />
            </div>
            <div className="flex-1">
              <SelectOption
                title="توقيت الذهاب"
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر توقيت الذهاب"
              />
            </div>
          </div>

        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <CustomRadioGroup
            label="هل تريد خدمة النقل من مكة للمدينة المنورة ؟"
            value={true}
            onChange={handleSelectionChange}
            options={options}
          />
          <CustomRadioGroup
            label="هل تريد السكن بالمدينة المنورة؟"
            value={true}
            onChange={handleSelectionChange}
            options={options}
          />
          <CustomRadioGroup
            label="هل تريد خدمة النقل من المدينة المنورة ؟"
            value={true}
            onChange={handleSelectionChange}
            options={options}
          />
          <div className="border-t border-t-primary-400 my-8 border-dashed w-full"></div>
          <SelectOption
            title="عدد المسافرين"
            options={fakeData}
            triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
            placeholder="اختر عدد المسافرين"
          />
          <div className="border-t border-t-primary-400 my-8 border-dashed w-full"></div>
          <div className="flex items-center gap-4 w-full mt-4">
            <div className="flex-1">
              <SelectOption
                title="رقم رحلة العودة "
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر رقم الرحلة"
              />
            </div>
            <div className="flex-1">
              <SelectOption
                title="توقيت العودة"
                options={fakeData}
                triggerClassName="w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                placeholder="اختر توقيت الذهاب"
              />
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="bg-primary-600 text-white rounded-2xl px-3 py-2 mt-7 w-full"
        onClick={handleNextStep}
      >
        التالي
      </button>
    </TabsContent>
  );
};
