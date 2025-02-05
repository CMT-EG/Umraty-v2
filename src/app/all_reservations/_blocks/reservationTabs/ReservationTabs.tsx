"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/global/shadcn/ui/tabs";
import { BookingGroup } from "./_blocks/BookingGroup";
import { fakeBookingData } from "../../constants/fakeData";
import { useReservationPage } from "./hooks/useReservationPage";

export const ReservationTabs = () => {
    const { activeTab, setActiveTab } = useReservationPage();


    return (
        <div className="mt-[-50px] z-50 relative w-[90%] mx-auto">
            <Tabs
                defaultValue="allReservations"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
                dir="rtl"
            >
                <TabsList className="flex flex-col h-auto md:flex-row justify-between items-center gap-4 bg-transparent bg-[#FCFCFD] rounded-[1.25rem] py-5 px-8 shadow-lg mb-20">
                    <div className="flex gap-4 w-full">
                        <TabsTrigger value="allReservations" className="flex-1 text-center data-[state=active]:text-white data-[state=active]:bg-primary-600 rounded-lg font-semibold data-[state=active]:font-extrabold py-4 px-8">
                            كل الحجوزات
                        </TabsTrigger>
                        <TabsTrigger value="currentReservations" className="flex-1 text-center data-[state=active]:text-white data-[state=active]:bg-primary-600 rounded-lg font-semibold data-[state=active]:font-extrabold py-4 px-8">
                            الحجوزات الحالية
                        </TabsTrigger>
                        <TabsTrigger value="pastReservations" className="flex-1 text-center data-[state=active]:text-white data-[state=active]:bg-primary-600 rounded-lg font-semibold data-[state=active]:font-extrabold py-4 px-8">
                            الحجوزات السابقة
                        </TabsTrigger>
                    </div>
                </TabsList>
                <TabsContent value="allReservations">
                    <div className="p-4">
                        {fakeBookingData?.map((group, index) => (
                            <BookingGroup key={`${group.displayDate}-${index}`} group={group} activeTab={activeTab} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="currentReservations">
                    <div className="p-4">
                        {fakeBookingData?.map((group, index) => (
                            <BookingGroup key={`${group.displayDate}-${index}`} group={group} activeTab={activeTab} />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="pastReservations">
                    <div className="p-4">
                        {fakeBookingData?.map((group, index) => (
                            <BookingGroup key={`${group.displayDate}-${index}`} group={group} activeTab={activeTab} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};
