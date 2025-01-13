import Header from "@/main/common/components/header/Header";
import RoomsComponent from "./_blocks/roomsComponent/RoomsComponent";
import Footer from "@/main/common/components/footer/Footer";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="relative">
      <Header variant="white" className="absolute top-0" />
      <Suspense fallback={<Loader2 />}>
        <RoomsComponent />
      </Suspense>
      <Footer />
    </div>
  );
}
