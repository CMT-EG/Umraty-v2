import Header from "@/main/common/components/header/header";
import RoomsComponent from "./_blocks/roomsComponent/RoomsComponent";
import "@/app/globals.css";
import Footer from "@/main/common/components/footer/Footer";

export default function Page() {
  return (
    <div className="relative">
      <Header variant="white" className="absolute top-0" />
      <RoomsComponent />
      <Footer />
    </div>
  );
}
