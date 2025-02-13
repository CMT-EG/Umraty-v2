import React from 'react';

export const ReservationHero = ({ title }) => {
    return (
        <section className="bg-reservation-background bg-center bg-cover">
            <div className="relative text-white w-full px-5 h-[500px] bg-gradient-to-b from-black to-black/50">
                <div className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="sm:text-[2.5rem] text-[1.563rem]# leading-[154%] font-extrabold mb-3">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
};
