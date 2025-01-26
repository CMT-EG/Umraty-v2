import RoomsComponent from "./_blocks/roomsComponent/RoomsComponent";
import Footer from "@/global/components/footer/Footer";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import NavBar from "@/global/components/navbar/NavBar";

export default function Page() {
  return (
    <div className="relative">
      <NavBar variant="white" className="absolute top-0" />
      <Suspense fallback={<Loader2 />}>
        <RoomsComponent />
      </Suspense>
      <Footer />
    </div>
  );
}
