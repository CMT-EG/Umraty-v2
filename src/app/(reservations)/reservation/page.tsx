import Script from "next/script";
import Reservation from "./_blocks/Reservation";
import Header from "@/main/common/components/header/Header";
import Footer from "@/main/common/components/footer/Footer";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="relative">
      <Header variant="white" className="absolute top-0" />
      <Suspense fallback={<Loader2 />}>
        <Reservation />
      </Suspense>
      <Footer />
      <Script
        src="https://www.ksamerchant.geidea.net/hpp/geideaCheckout.min.js"
        strategy="beforeInteractive"
      />
    </div>
  );
}
