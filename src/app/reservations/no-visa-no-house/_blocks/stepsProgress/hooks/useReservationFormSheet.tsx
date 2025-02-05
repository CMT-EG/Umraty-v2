import { useForm } from "react-hook-form";
import { z } from "zod";
import { removeEmptyFields } from "@/global/utils/objectUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddReservation } from "../../../api/restful/reservations/useReservationQuery";
import { getReservationSchema } from "../schema/reservationSchema";
import { useState } from "react";

export function useReservationFormSheet() {
  const { mutate: mutateAdd, isPending: isPendingAdd } = useAddReservation();

  const [openRequestSaver, setOpenRequestSaver] = useState(false);
  const [openPaymentSuccess, setOpenPaymentSuccess] = useState(true);

  const defaultValues = {};

  const reservationSchema = getReservationSchema();
  const form = useForm<z.infer<typeof reservationSchema>>({
    resolver: zodResolver(reservationSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof reservationSchema>) {
    const sendValues = {
      ...values,
    };

    const onSuccess = () => {
      form.reset({});
      setOpenRequestSaver(true);
      // setOpenPaymentSuccess(true);
    };
    const onError = (error: Error) => {
      console.error("Error editing reservation:", error);
    };
    mutateAdd(removeEmptyFields(sendValues), {
      onSuccess,
      onError,
    });
  }

  return {
    form,
    onSubmit,
    error: "",
    isPending: !!isPendingAdd,
    openRequestSaver,
    setOpenRequestSaver,
    openPaymentSuccess,
    setOpenPaymentSuccess,
  };
}
