import Reservations from "./_blocks/Reservations";
import Header from "@/main/common/components/header/Header";
import Footer from "@/main/common/components/footer/Footer";

export default function Page() {
  return (
    <div className='relative'>
      <Header variant='white' className='absolute top-0' />
      <Reservations />
      <Footer />
    </div>
  );
}
