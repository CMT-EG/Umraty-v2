import RoomsComponent from "./_blocks/roomsComponent/RoomsComponent";
import Footer from "@/app/(appLayout)/_blocks/footer/Footer";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import NavBar from "@/app/(appLayout)/_blocks/navbar/NavBar";

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
