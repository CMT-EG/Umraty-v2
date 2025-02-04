import { useQuery } from "@tanstack/react-query";
import FlightManager from "./flightsManager";

export const useGetAllFlights = (active: boolean = true) => {
    const fetchAllAirlines = async () => {
        if (!active) return null;
        return await FlightManager.getAllAirlines();
    };

    return useQuery({
        queryKey: ["airplanes", active],
        queryFn: fetchAllAirlines,
        enabled: !!active,
        retry: false,
    });
};