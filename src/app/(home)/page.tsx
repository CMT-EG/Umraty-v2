import Header from "@/main/common/components/header/header";
import Hero from "./_blocks/hero/Hero";
import "@/main/global/styles/globals.css";
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
