// import AllFormsDialogs from "./_blocks/allFormsDialogs/AllFormsDialogs";
import ThirdHeroBg from "@/global/components/thirdHeroBg/ThirdHeroBg";
import StepsProgress from "./_blocks/stepsProgress/StepsProgress";
// import Hero from "./_blocks/hero/Hero";

export default function Page() {
  return (
    <main className="flex flex-col relative z-10">
      {/* <AllFormsDialogs /> */}
      <ThirdHeroBg>{/* <Hero /> */}</ThirdHeroBg>
      <StepsProgress />
    </main>
  );
}
