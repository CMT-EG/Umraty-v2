import { toast } from "@/global/shadcn/hooks/use-toast";
import requestHelpers from "@/global/shadcn/lib/requestHelpers";
import { formatDateToArabic } from "@/global/utils/date";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type Props = {
  bookingData: any;
};
export default function useReservationItem({ bookingData }: Props) {
  const startDate = formatDateToArabic(new Date(bookingData?.date_from));
  const endDate = formatDateToArabic(new Date(bookingData?.date_to));
  const queryClient = useQueryClient();
  const deleteBooking = useMutation({
    mutationFn: (bookingId: number) =>
      requestHelpers.deleteData(`/bookings/delete-booking/${bookingId}/`),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "تم الغاء الحجز بنجاح.",
      });
      // toast.success("تم الغاء الحجز بنجاح.");
      queryClient.invalidateQueries({
        queryKey: ["userBookings"],
      });
    },
    onError: (error: any) => {
      const errorMsg = error.response?.data?.message || "حدث خطأ غير متوقع.";
      toast({
        variant: "destructive",
        title: errorMsg,
      });
      // toast.error(errorMsg);
    },
  });

  const handleDelete = () => {
    if (confirm("هل أنت متأكد أنك تريد إلغاء الحجز؟")) {
      deleteBooking.mutate(bookingData.id);
    }
  };

  const router = useRouter();
  const onPayBooking = () => {
    router.push("/reservation?will_pay=true&hotel=false");
  };
  return { endDate, startDate, onPayBooking, handleDelete };
}
