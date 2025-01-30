import Footer from "@/app/(appLayout)/_blocks/footer/Footer";
import NavBar from "@/app/(appLayout)/_blocks/navbar/NavBar";
import Reservations from "./Reservations";

export default function Page() {
  return (
    <div className="relative">
      <NavBar variant="white" className="absolute top-0" />
      <Reservations />
      <Footer />
    </div>
  );
}
