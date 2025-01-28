import FrequentlyQuestions from "../(home)/_blocks/frequentlyQuestions/FrequentlyQuestions";
import Evaluation from "./_blocks/evaluation/Evaluation";
import Hero from "./_blocks/hero/Hero";
import Footer from "@/global/components/footer/Footer";

export default function ServiceEvaluationPage() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Evaluation />
      <FrequentlyQuestions />
      <Footer />
    </main>
  );
}
