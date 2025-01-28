import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { getEvaluationSchema } from "../schema/evaluationSchema";
import { useAddEvaluation, useUpdateEvaluation } from "@/app/service-evaluation/api/restful/evaluations/useEvaluationQuery";

type Props = {
  evaluation?: any;
  type?: string;
};
export function useEvaluationForm({ evaluation, type }: Props) {
const[evaluationLicenseFile,setEvaluationLicenseFile]=useState<File | null>(null);
const[idPhotoFile,setIdPhotoFile]=useState<File | null>(null);

  const { mutate: mutateUpdate, isPending: isPendingUpdate } =
    useUpdateEvaluation();
  const { mutate: mutateAdd, isPending: isPendingAdd } = useAddEvaluation();

  const [open, setOpen] = useState(false);

  const defaultValues =
    type !== "add"
      ? {
          // name_en: evaluation?.name_en,
          // name_ar: evaluation?.name_ar,
        }
      : {};

  const evaluationSchema = getEvaluationSchema();
  const form = useForm<z.infer<typeof evaluationSchema>>({
    resolver: zodResolver(evaluationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (evaluation) {
      form.reset(defaultValues);
    }
  }, [evaluation, form]);

  function onSubmit(values: z.infer<typeof evaluationSchema>) {
    const sendValues = {
      ...values,
    };

    const onSuccess = () => {
      setOpen(false);
      form.reset({});
      setEvaluationLicenseFile(null);
      setIdPhotoFile(null);
    };
    const onError = (error: Error) => {
      console.error("Error editing evaluation:", error);
    };
    if (type === "add") {
      mutateAdd(sendValues, {
        onSuccess,
        onError,
      });
    } else if (type === "edit" && evaluation?._id) {
      mutateUpdate(
        { id: evaluation?._id, ...sendValues },
        {
          onSuccess,
          onError,
        }
      );
    }
  }

  const fireOnClose = () => {
    form.reset({});
    setEvaluationLicenseFile(null);
    setIdPhotoFile(null);
  };


  return {
    open,
    setOpen,
    form,
    onSubmit,
    dataEvaluation: evaluation,
    error: "",
    isLoading: false,
    fireOnClose,
    isPending: !!isPendingUpdate || !!isPendingAdd,
    evaluationLicenseFile,
    setEvaluationLicenseFile,
    idPhotoFile,
    setIdPhotoFile,
  };
}
