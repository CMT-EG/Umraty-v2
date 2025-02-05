import { BookingCard } from "../../components/BookingCard";
import { EmptyData } from "./EmptyData";

export const BookingGroup = ({ group, activeTab }: any) => {
    if (!group || !group.bookings) return <EmptyData />;
    console.log();
    return (
        <div className="mb-8">
            {activeTab === "allReservations" ? group.bookings.map((booking, index) => (
                <div key={`${booking.bookingNumber}-${index}`}>
                    {index === 0 && <div className="text-center mb-6">
                        <div className="inline-block px-6 py-2 bg-[#F7F4EF] rounded-lg text-gray-800">
                            {group.displayDate}
                        </div>
                    </div>}
                    <BookingCard key={`${booking.bookingNumber}-${index}`} booking={booking} />
                </div>
            )) : activeTab === "currentReservations" ?
                group.bookings
                    .filter(booking => booking.arrivalPoint?.bookingStatus === "مكتمل" || booking.arrivalPoint?.bookingStatus === "ملغي")
                    .map((booking, index) => (
                        <div key={`${booking.bookingNumber}-${index}`}>
                            {index === 0 && <div className="text-center mb-6">
                                <div className="inline-block px-6 py-2 bg-[#F7F4EF] rounded-lg text-gray-800">
                                    {group.displayDate}
                                </div>
                            </div>}
                            <BookingCard key={`${booking.bookingNumber}-${index}`} booking={booking} />
                        </div>
                    )) : activeTab === "pastReservations" &&
                group.bookings
                    .filter(booking => booking.arrivalPoint?.bookingStatus === "غير مدفوع" || booking.arrivalPoint?.bookingStatus === "نشط")
                    .map((booking, index) => (
                        <div key={`${booking.bookingNumber}-${index}`}>
                            {index === 0 && <div className="text-center mb-6">
                                <div className="inline-block px-6 py-2 bg-[#F7F4EF] rounded-lg text-gray-800">
                                    {group.displayDate}
                                </div>
                            </div>}
                            <BookingCard key={`${booking.bookingNumber}-${index}`} booking={booking} />
                        </div>
                    ))
            }
        </div>
    );
};