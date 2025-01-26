import Script from "next/script";
import Reservation from "./_blocks/Reservation";
import Footer from "@/global/components/footer/Footer";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import NavBar from "@/global/components/navbar/NavBar";

export default function Page() {
  return (
    <div className="relative">
      <NavBar variant="white" className="absolute top-0" />
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
