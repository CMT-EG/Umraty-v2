import Footer from "@/components/footer";
import Header from "@/components/header";
import Reservations from "./_blocks/Reservations";

export default function Page() {
  return (
    <div className='relative'>
      <Header variant='white' className='absolute top-0' />
      <Reservations />
      <Footer />
    </div>
  );
}
