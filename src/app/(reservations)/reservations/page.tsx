import Footer from "@/global/components/footer/Footer";
import NavBar from "@/global/components/navbar/NavBar";
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
