import React from 'react';
import { ReservationHero } from './_blocks/reservationHero/ReservationHero';
import { ReservationTabs } from './_blocks/reservationTabs/ReservationTabs';

const AllReservations = () => {
    return (
        <div>
            <ReservationHero />
            <ReservationTabs />
        </div>
    );
};

export default AllReservations;