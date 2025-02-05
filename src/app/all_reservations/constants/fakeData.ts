export const fakeBookingData = [
    {
        displayDate: "الخميس، 19 سبتمبر 2023",
        displayDateEn: "Thursday, September 19, 2023",
        bookings: [
            {
                bookingNumber: "123456#",
                departurePoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 1",
                    departureCity: "جدة",
                    destination: "مكة",
                    departureDate: "22/10/2025",
                    departureTime: "2:30 ص",
                    accommodationService: "لا"
                },
                arrivalPoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 2",
                    accommodationService: "نعم",
                    numberOfPersons: 12,
                    tripPrice: "2500 ر.س",
                    bookingStatus: "مكتمل" as BookingStatus
                }
            },
            {
                bookingNumber: "123456#",
                departurePoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 1",
                    departureCity: "جدة",
                    destination: "مكة",
                    departureDate: "22/10/2025",
                    departureTime: "2:30 ص",
                    accommodationService: "لا"
                },
                arrivalPoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 2",
                    accommodationService: "لا",
                    numberOfPersons: 12,
                    tripPrice: "2500 ر.س",
                    bookingStatus: "ملغي" as BookingStatus
                }
            }
        ]
    },
    {
        displayDate: "الجمعة، 13 سبتمبر 2023",
        displayDateEn: "Friday, September 20, 2023",
        bookings: [
            {
                bookingNumber: "789101#",
                departurePoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 1",
                    departureCity: "المدينة",
                    destination: "مكة",
                    departureDate: "25/10/2025",
                    departureTime: "3:45 ص",
                    accommodationService: "نعم"
                },
                arrivalPoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 3",
                    accommodationService: "نعم",
                    numberOfPersons: 8,
                    tripPrice: "3000 ر.س",
                    bookingStatus: "مكتمل" as BookingStatus
                }
            }
        ]
    },
    {
        displayDate: "الجمعة، 20 سبتمبر 2023",
        displayDateEn: "Friday, September 20, 2023",
        bookings: [
            {
                bookingNumber: "789101#",
                departurePoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 1",
                    departureCity: "المدينة",
                    destination: "مكة",
                    departureDate: "25/10/2025",
                    departureTime: "3:45 ص",
                    accommodationService: "نعم"
                },
                arrivalPoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 3",
                    accommodationService: "نعم",
                    numberOfPersons: 8,
                    tripPrice: "3000 ر.س",
                    bookingStatus: "غير مدفوع" as BookingStatus
                }
            }
        ]
    },
    {
        displayDate: "الجمعة، 7 سبتمبر 2023",
        displayDateEn: "Friday, September 20, 2023",
        bookings: [
            {
                bookingNumber: "789101#",
                departurePoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 1",
                    departureCity: "المدينة",
                    destination: "مكة",
                    departureDate: "25/10/2025",
                    departureTime: "3:45 ص",
                    accommodationService: "نعم"
                },
                arrivalPoint: {
                    busGatheringPoint: "نقطة تجمع الحافلات 3",
                    accommodationService: "نعم",
                    numberOfPersons: 8,
                    tripPrice: "3000 ر.س",
                    bookingStatus: "نشط" as BookingStatus
                }
            }
        ]
    },
];
