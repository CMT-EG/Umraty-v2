import EvaluationForm from "./_blocks/evaluationForm/EvaluationForm";
import HeaderContent from "./_blocks/headerContent/HeaderContent";
import SelectTrip from "./_blocks/selectTrip/SelectTrip";

export default function Evaluation() {
  return (
    <section className="container flex flex-col items-center justify-center gap-5">
      <HeaderContent />
      {/* <SelectTrip /> */}
      <EvaluationForm />
    </section>
  );
}
