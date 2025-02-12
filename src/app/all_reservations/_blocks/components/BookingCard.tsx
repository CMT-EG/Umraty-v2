import Link from "next/link";
import { InfoRow } from "./InfoRow";
import { StatusBadge } from "./StatusBadge";

export const BookingCard = ({ booking }: { booking: Booking; }) => {
    if (!booking) return null;

    const { bookingNumber, departurePoint, arrivalPoint } = booking;

    return (
        <div dir="rtl" className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow mb-4">
            <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-extrabold text-gray-800">
                    حجز رقم: {bookingNumber}
                </div>
                {arrivalPoint?.bookingStatus === "غير مدفوع" ? <div className="flex gap-2 font-bold text-sm">
                    <button className="bg-primary-600 text-white rounded-3xl px-10 py-2">
                        الدفع
                    </button>
                    <button className="border border-primary-600 rounded-3xl px-10 py-2 text-primary-600">
                        تعديل
                    </button>
                </div>
                    :
                    arrivalPoint?.bookingStatus === "نشط" ?
                        <button className="border border-primary-600 rounded-3xl px-10 py-2 text-primary-600">
                            تعديل
                        </button> : null
                }
            </div>

            <div className="border border-b border-b-[#3A35413B] my-6 w-full"></div>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="space-y-3">
                        <InfoRow label="مدينة الانطلاق" value={departurePoint.departureCity} />
                        <InfoRow label="الوجهة" value={departurePoint.destination} />
                        <InfoRow label="تاريخ انطلاق الرحلة" value={departurePoint.departureDate} />
                        <InfoRow label="ساعة الانطلاق" value={departurePoint.departureTime} />
                        <InfoRow label="خدمة السكن" value={departurePoint.accommodationService} />
                        <InfoRow label="نقطة التجمع" value={departurePoint.busGatheringPoint} />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-3">
                        <InfoRow label="نقطة الوصول" value={arrivalPoint.busGatheringPoint} />
                        <InfoRow label="خدمة السكن" value={arrivalPoint.accommodationService} />
                        <InfoRow label="عدد الأشخاص" value={`${arrivalPoint.numberOfPersons} شخص`} />
                        <InfoRow label="سعر الرحلة" value={arrivalPoint.tripPrice} />
                        <div className="flex gap-3 items-center">
                            <div className="text-gray-500 min-w-[120px] text-sm font-bold">حالة الرحلة</div>
                            <StatusBadge status={arrivalPoint.bookingStatus} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <Link href={"/all_reservations/reservation_details/id"} className="block text-center w-full py-3 bg-primary-600 text-white font-extrabold rounded-3xl">
                    عرض التفاصيل
                </Link>
            </div>
        </div>
    );
};