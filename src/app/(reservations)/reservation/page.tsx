import Footer from "@/components/footer";
import Header from "@/components/header";
import Script from "next/script";
import Reservation from "./_blocks/Reservation";

export default function Page() {
  return (
    <div className='relative'>
      <Header variant='white' className='absolute top-0' />
      <Reservation />
      <Footer />
      <Script
        src='https://www.ksamerchant.geidea.net/hpp/geideaCheckout.min.js'
        strategy='beforeInteractive'
      />
    </div>
  );
}
