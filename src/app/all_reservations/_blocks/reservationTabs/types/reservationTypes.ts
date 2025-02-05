// Types for our component props
type BookingStatus = 'مكتمل' | 'غير مدفوع' | 'ملغي';

type DeparturePoint = {
    busGatheringPoint: string;
    departureCity: string;
    destination: string;
    departureDate: string;
    departureTime: string;
    accommodationService: string;
};

type ArrivalPoint = {
    busGatheringPoint: string;
    accommodationService: string;
    numberOfPersons: number;
    tripPrice: string;
    bookingStatus: BookingStatus;
};

type Booking = {
    bookingNumber: string;
    departurePoint: DeparturePoint;
    arrivalPoint: ArrivalPoint;
};

type BookingGroupType = {
    displayDate: string;
    displayDateEn: string;
    bookings: Booking[];
    status: string;
};