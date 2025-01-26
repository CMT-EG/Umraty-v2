import HeaderSection from "@/global/components/headerSection/HeaderSection";
import ServiceCard from "./blocks/serviceCard/ServiceCard";
import flateImg from "./assets/images/flate.webp";
import airbordImg from "./assets/images/airbord.webp";
import busImg from "./assets/images/bus.webp";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "السكن في فنادق اربع نجوم",
      image: flateImg,

      className: "col-span-5 lg:col-span-3",
      coloredWordIndex: [0, 0],
    },
    {
      id: 2,
      title: "الاستضافة والترحيب في المطار",
      image: airbordImg,
      className: "col-span-5 lg:col-span-2",
      coloredWordIndex: [0, 0],
    },
    {
      id: 3,
      title: "النقل من والى المطار",
      image: busImg,
      className: "col-span-5",
      coloredWordIndex: [1, 2],
    },
  ];

  return (
    <section className="flex flex-col gap-20 pt-5 pb-20 container">
      <HeaderSection
        title="خدماتنا"
        subtitle="هذا النص الكبير الذى لا يحمل اى معنى وليس له قيمة"
      />
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
