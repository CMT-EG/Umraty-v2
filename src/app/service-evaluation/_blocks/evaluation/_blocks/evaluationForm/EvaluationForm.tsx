"use client";
import dynamic from "next/dynamic";
import FormHeader from "@/global/components/formHeader/FormHeader";
import TButton from "@/global/components/TForm/TButton";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/global/shadcn/ui/accordion";
import { FormProvider } from "react-hook-form";
import { useEvaluationForm } from "./hooks/useEvaluationForm";
import { Rating } from "@smastrom/react-rating";
import TStareRate from "@/global/components/TForm/TStareRate";
import TFormField from "@/global/components/TForm/TFormField";

export default function EvaluationForm() {
  const { form, onSubmit, isPending } = useEvaluationForm({});

  return (
    <div className="w-full p-10 bg-white rounded-[34px] shadow-[0px_40px_64px_-32px_rgba(15,15,15,0.10)] backdrop-blur-[32px] flex-col justify-start items-end gap-6 flex">
      <h3 className="text-[#131416] text-[32px] font-extrabold w-full">
        تقييم الخدمة الخاصة بك
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col max-h-full gap-6 pt-3">
              <AccordionItem value="one" className="border rounded-lg shadow">
                <AccordionTrigger
                  className="px-4 hover:no-underline"
                  appearIcon={false}
                  customIcon={
                    <div
                      dir="ltr"
                      className="flex items-center gap-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents click from toggling the accordion
                      }}
                    >
                      <TStareRate form={form} name="rate" />
                    </div>
                  }
                >
                  <FormHeader title={"السكن"} />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <div className="flex flex-col md:flex-1 gap-6">
                      <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
                        <TFormField
                          typeField="textarea"
                          type="text"
                          form={form}
                          name="notes"
                          label={"كيف يمكننا مساعدتك ؟"}
                          placeholder="اكتب ملاحظاتك هنا وكيف يمكن مساعدتك في المرات القادمة..."
                          // readOnly={type === "view"}
                          isRequiredStyle
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="two" className="border rounded-lg shadow">
                <AccordionTrigger
                  className="px-4 hover:no-underline"
                  appearIcon={false}
                  customIcon={
                    <div
                      dir="ltr"
                      className="flex items-center gap-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents click from toggling the accordion
                      }}
                    >
                      <TStareRate form={form} name="rate" />
                    </div>
                  }
                >
                  <FormHeader title={"النقل"} />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <div className="flex flex-col md:flex-1 gap-6">
                      <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
                        <TFormField
                          typeField="textarea"
                          type="text"
                          form={form}
                          name="notes"
                          label={"كيف يمكننا مساعدتك ؟"}
                          placeholder="اكتب ملاحظاتك هنا وكيف يمكن مساعدتك في المرات القادمة..."
                          // readOnly={type === "view"}
                          isRequiredStyle
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="three" className="border rounded-lg shadow">
                <AccordionTrigger
                  className="px-4 hover:no-underline"
                  appearIcon={false}
                  customIcon={
                    <div
                      dir="ltr"
                      className="flex items-center gap-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents click from toggling the accordion
                      }}
                    >
                      <TStareRate form={form} name="rate" />
                    </div>
                  }
                >
                  <FormHeader title={"الإقامة"} />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <div className="flex flex-col md:flex-1 gap-6">
                      <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
                        <TFormField
                          typeField="textarea"
                          type="text"
                          form={form}
                          name="notes"
                          label={"كيف يمكننا مساعدتك ؟"}
                          placeholder="اكتب ملاحظاتك هنا وكيف يمكن مساعدتك في المرات القادمة..."
                          // readOnly={type === "view"}
                          isRequiredStyle
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="four" className="border rounded-lg shadow">
                <AccordionTrigger
                  className="px-4 hover:no-underline"
                  appearIcon={false}
                  customIcon={
                    <div
                      dir="ltr"
                      className="flex items-center gap-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents click from toggling the accordion
                      }}
                    >
                      <TStareRate form={form} name="rate" />
                    </div>
                  }
                >
                  <FormHeader title={"الإستقبال"} />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <div className="flex flex-col md:flex-1 gap-6">
                      <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
                        <TFormField
                          typeField="textarea"
                          type="text"
                          form={form}
                          name="notes"
                          label={"كيف يمكننا مساعدتك ؟"}
                          placeholder="اكتب ملاحظاتك هنا وكيف يمكن مساعدتك في المرات القادمة..."
                          // readOnly={type === "view"}
                          isRequiredStyle
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
            <h4 className="text-[#131416] text-2xl font-extrabold">
              هل لديك ملاحظات أخري ؟
            </h4>
            <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
              <TFormField
                typeField="textarea"
                type="text"
                form={form}
                name="notes"
                label={" تعليقات إضافية"}
                placeholder={"اكتب ملاحظاتك هنا..."}
                // readOnly={type === "view"}
                isRequiredStyle
              />
            </div>
            <TButton
              type="submit"
              className="flex rounded-full items-center gap-2 w-full text-white"
              disabled={isPending}
            >
              إرسال التقييم
            </TButton>
          </form>
        </FormProvider>
      </Accordion>
    </div>
  );
}
