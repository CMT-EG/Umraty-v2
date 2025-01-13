import Header from "@/main/common/components/header/Header";
import Hero from "./_blocks/hero/Hero";
import Footer from "@/main/common/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header variant="transparent" className="absolute top-0" />
      <Hero />
      <Footer />
    </div>
  );
}
