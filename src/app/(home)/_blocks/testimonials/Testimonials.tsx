import HeaderSection from "@/global/components/headerSection/HeaderSection";
import TestimonialsItems from "./_blocks/testimonialsItems/TestimonialsItems";

const Testimonials = () => {
  return (
    <section className="relative bg-[#F4F5F6] py-16 w-full overflow-hidden">
      <HeaderSection
        title="خطوات الحجز"
        subtitle="حافظ على الهدوء واستمر في السفر"
      />
      {/* Background Decorative Elements */}

      <div className="space-y-2 mx-auto px-4 py-8 container">
        <TestimonialsItems />
      </div>
    </section>
  );
};

export default Testimonials;
