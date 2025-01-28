import Hero from "./_blocks/hero/Hero";
import Footer from "@/global/components/footer/Footer";
import NavBar from "@/global/components/navbar/NavBar";
import Aboutus from "./_blocks/aboutus/Aboutus";
import Services from "./_blocks/services/Services";
import BookingSteps from "./_blocks/bookingSteps/BookingSteps";
import Testimonials from "./_blocks/testimonials/Testimonials";
import FrequentlyQuestions from "./_blocks/frequentlyQuestions/FrequentlyQuestions";
import ReservationBox from "./_blocks/hero/_blocks/reservationBox/ReservationBox";

export default function Home() {
  return (
    <main className="relative">
      <NavBar variant="transparent" className="absolute top-0" />
      <Hero />
      <ReservationBox />
      <Aboutus />
      <Services />
      <BookingSteps />
      <Testimonials />
      <FrequentlyQuestions />
      <Footer />
    </main>
  );
}
