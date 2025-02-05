import { useState, useCallback, useMemo } from "react";

function useSteps({
  totalSteps = 1,
  initialStep = 1,
}: {
  totalSteps: number;
  initialStep: number;
}) {
  const [current, setCurrent] = useState(initialStep - 1);

  // Go to the previous step
  const prev = useCallback(() => {
    setCurrent((prevStep) => Math.max(prevStep - 1, 0));
  }, []);

  // Go to the next step
  const next = useCallback(() => {
    setCurrent((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
  }, [totalSteps]);

  // Jump to a specific step
  const jump = useCallback(
    (step) => {
      setCurrent(() => Math.max(0, Math.min(step, totalSteps - 1)));
    },
    [totalSteps]
  );

  // Calculate progress as a percentage
  const progress = useMemo(() => {
    return totalSteps > 1 ? ((current + 1) / totalSteps) * 100 : 100;
  }, [current, totalSteps]);

  return {
    prev,
    next,
    jump,
    total: totalSteps,
    currentIndex: current,
    currentStep: current + 1,
    progress,
  };
}

export default useSteps;
