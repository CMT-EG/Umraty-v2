import { Building2, ClipboardList, CreditCard, FileText } from "lucide-react";
import BookingStepsItem from "./_blocks/bookingStepsItem/BookingStepsItem";
import HeaderSection from "@/global/components/headerSection/HeaderSection";

const BookingSteps = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "ادخال بيانات الحجز الرئيسية",
      subtitle: "الخطوة الاولى",
      bgColor: "bg-[#B68B5B]",
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "احجز الغرف (اذا اختار السكن)",
      subtitle: "الخطوة الثانية",
      bgColor: "bg-[#725541]",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "ملئ بيانات المعتمرين",
      subtitle: "الخطوة الثالثة",
      bgColor: "bg-[#725541]",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "الدفع",
      subtitle: "الخطوة الرابعة",
      bgColor: "bg-[#B68B5B]",
    },
  ];

  return (
    <section className="w-full py-16 relative overflow-hidden">
      <HeaderSection
        title="خطوات الحجز"
        subtitle="حافظ على الهدوء واستمر في السفر"
      />
      {/* Background Decorative Elements */}

      <div className="px-[60px] mx-auto py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-20 justify-between items-start mx-auto">
          {steps?.map((step, index) => (
            <BookingStepsItem
              key={index}
              step={step}
              index={index}
              stepslength={steps?.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
