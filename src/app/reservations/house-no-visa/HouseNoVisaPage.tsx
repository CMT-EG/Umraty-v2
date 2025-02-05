"use client";
import ThirdHeroBg from "@/global/components/thirdHeroBg/ThirdHeroBg";
import Hero from "./_blocks/hero/Hero";
import SearchSection from "./_blocks/searchSection/SearchSection";
import BackButton from "@/global/components/backButton/BackButton";
import Hotels from "./_blocks/hotels/Hotels";
import { fakeHotelsData } from "./constants/fakeData";
import useSteps from "@/global/hooks/steps/useSteps";

export default function HouseNoVisaPage() {
  const { prev, next, currentStep } = useSteps({
    totalSteps: 3,
    initialStep: 1,
  });
  
  return (
    <main className="flex flex-col relative z-10">
      {/* <AllFormsDialogs /> */}
      <ThirdHeroBg>
        <Hero />
      </ThirdHeroBg>
      <SearchSection />
      <div className="container my-4">
        <BackButton text={"الرجوع للصفحة الرئيسية"} toHome />
      </div>
      {currentStep === 1 && <Hotels data={fakeHotelsData} />}
      {/* <StepsProgress /> */}
    </main>
  );
}
