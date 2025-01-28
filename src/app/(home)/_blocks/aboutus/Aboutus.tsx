import HeaderSection from "@/global/components/headerSection/HeaderSection";
import StatsCard from "./blocks/statsCard/StatsCard";
import { Plane } from "lucide-react";
import EmployeeSVG from "@/global/assets/svg/EmployeeSVG";
import RoomsCapacitySVG from "@/global/assets/svg/RoomsCapacitySVG";

export default function Aboutus() {
  const stats = [
    {
      icon: <Plane stroke="#8B6343" className="w-[42px] h-[42px]" />,
      number: "+1500",
      text: "رحلة أقلعت حتي الأن عبر موقع عمرتي",
    },
    {
      icon: <EmployeeSVG stroke="#8B6343" className="w-[42px] h-[42px]" />,
      number: "+1500",
      text: "معتمر استخدم موقع عمرتي",
    },
    {
      icon: <RoomsCapacitySVG stroke="#8B6343" className="w-[42px] h-[42px]" />,
      number: "+1500",
      text: "حجز تم من خلال موقع عمرتي",
    },
  ];

  return (
    <section className="flex flex-col gap-20 pt-52 pb-20 bg-[#EBE4D6] px-4">
      <HeaderSection
        title="لماذا  نحن ؟"
        subtitle="هذا النص الكبير الذى لا يحمل اى معنى وليس له قيمة"
      />
      <div className="w-full bg-beige-50">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {stats.map((state, index) => (
            <StatsCard key={index} state={state} />
          ))}
        </div>
      </div>
    </section>
  );
}

