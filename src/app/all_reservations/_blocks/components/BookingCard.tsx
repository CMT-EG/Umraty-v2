import { InfoRow } from "./InfoRow";
import { StatusBadge } from "./StatusBadge";

export const BookingCard = ({ booking }: { booking: Booking; }) => {
    if (!booking) return null;

    const { bookingNumber, departurePoint, arrivalPoint } = booking;

    return (
        <div dir="rtl" className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow mb-4">
            <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-semibold text-gray-800">
                    حجز رقم: {bookingNumber}
                </div>
                {arrivalPoint?.bookingStatus === "غير مدفوع" ? <div className="flex gap-2 font-bold text-sm">
                    <button className="border border-primary-600 rounded-xl px-10 py-2 text-primary-600">
                        تعديل
                    </button>
                    <button className="bg-primary-600 text-white rounded-xl px-10 py-2">
                        الدفع
                    </button>
                </div>
                    :
                    arrivalPoint?.bookingStatus === "نشط" ?
                        <button className="border border-primary-600 rounded-xl px-10 py-2 text-primary-600">
                            تعديل
                        </button> : null
                }
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="text-gray-600 mb-2">نقطة الانطلاق</div>
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
                    <div className="text-gray-600 mb-2">نقطة الوصول</div>
                    <div className="space-y-3">
                        <InfoRow label="نقطة الوصول" value={arrivalPoint.busGatheringPoint} />
                        <InfoRow label="خدمة السكن" value={arrivalPoint.accommodationService} />
                        <InfoRow label="عدد الأشخاص" value={`${arrivalPoint.numberOfPersons} شخص`} />
                        <InfoRow label="سعر الرحلة" value={arrivalPoint.tripPrice} />
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500">حالة الرحلة</div>
                            <StatusBadge status={arrivalPoint.bookingStatus} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <button className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-brown-700 transition-colors">
                    عرض التفاصيل
                </button>
            </div>
        </div>
    );
};