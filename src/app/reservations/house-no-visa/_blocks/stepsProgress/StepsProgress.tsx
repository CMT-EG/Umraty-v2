"use client";
import { Form } from "@/global/shadcn/ui/form";
import { useReservationFormSheet } from "./hooks/useReservationFormSheet";
import Step1 from "./_blocks/step1/Step1";
import Step3 from "./_blocks/step3/Step3";
import useSteps from "@/global/hooks/steps/useSteps";
import StepsProgressItems from "@/global/components/stepsProgressItems/StepsProgressItems";
import SummarySVG from "./assets/svg/SummarySVG";
import Step2 from "./_blocks/step2/Step2";
import PersonDataSVG from "./assets/svg/PersonDataSVG";
import PaymentSVG from "./assets/svg/PaymentSVG";

const StepsProgress = () => {
  const steps = [
    {
      icon: <PersonDataSVG className="w-6 h-6 text-white" stroke="#ffffff" />,
      title: "الخطوة الأولي",
      subtitle: "بيانات المسافرين",
    },
    {
      icon: <SummarySVG className="relative w-6 h-6 text-white -start-1" />,
      title: "الخطوة الثانية",
      subtitle: "ملخص الحجز",
    },
    {
      icon: <PaymentSVG className="w-6 h-6 text-white" fill="#ffffff" />,
      title: "الخطوة الثالثة",
      subtitle: "الدفع",
    },
  ];

  const {
    form,
    onSubmit,
    isPending,
    openRequestSaver,
    setOpenRequestSaver,
    openPaymentSuccess,
    setOpenPaymentSuccess,
  } = useReservationFormSheet();
  const { prev, next, currentStep } = useSteps({
    totalSteps: 3,
    initialStep: 1,
  });

  return (
    <div className="w-full relative z-20 container">
      <div className="flex flex-col gap-[56px]">
        <div className="bg-steps w-full">
          <div className="mt-[-70px] relative z-20 w-full mx-auto flex flex-col gap-4 bg-[#FCFCFD] rounded-[1.25rem] shadow-lg">
            <StepsProgressItems stepsData={steps} currentStep={currentStep} />
          </div>
        </div>
        {/* <StepsProgressItems stepsData={steps} currentStep={currentStep} /> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col max-h-full gap-6 pt-3 h-100-31px overflow-y-auto px-2"
          >
            <div>
              {currentStep === 1 && <Step1 form={form} next={next} />}
              {currentStep === 2 && (
                <Step2 form={form} next={next} prev={prev} />
              )}
              {currentStep === 3 && (
                <Step3
                  form={form}
                  prev={prev}
                  isPending={isPending}
                  openRequestSaver={openRequestSaver}
                  setOpenRequestSaver={setOpenRequestSaver}
                  openPaymentSuccess={openPaymentSuccess}
                  setOpenPaymentSuccess={setOpenPaymentSuccess}
                />
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepsProgress;
