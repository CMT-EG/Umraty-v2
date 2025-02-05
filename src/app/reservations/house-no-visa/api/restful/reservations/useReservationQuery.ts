import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ReservationById,
  GetAllreservation,
  AddReservation,
} from "./ReservationTypes";
import ReservationManager from "./reservationManager";
import { ParamsQuery } from "@/global/types/CommonTypes";

// Fetch all reservation
export const useGetAllReservations = (
  params: ParamsQuery,
  active: boolean = true
) => {
  const fetchAllReservation = async () => {
    if (!active) return null; // If no ID is provided, return null
    return await ReservationManager.getAllReservations(params);
  };

  return useQuery<GetAllreservation>({
    queryKey: ["reservation", params, active],
    queryFn: fetchAllReservation,
    enabled: !!active,
    retry: false,
  });
};

export const useGetAllLookUpReservations = (
  params: ParamsQuery,
  active: boolean = true
) => {
  const fetchAllServices = async () => {
    if (!active) return null; // If no ID is provided, return null
    return await ReservationManager.getAllLookUpReservations(params);
  };

  return useQuery<GetAllreservation>({
    queryKey: ["reservation", params, active],
    queryFn: fetchAllServices,
    enabled: !!active,
    retry: false,
  });
};

// Fetch a single reservation
export const useGetReservation = (id: string, active: boolean = true) => {
  return useQuery<ReservationById>({
    queryKey: ["reservation", id, active],
    queryFn: () => ReservationManager.getReservation(id),
    enabled: !!id && !!active, // Enable query only if id is provided
    retry: false,
  });
};

// Add a new reservation
export const useAddReservation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ReservationManager.addReservation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservation"] });
    },
    retry: false,
  });
};

// Update a reservation
export const useUpdateReservation = (idP?: string) => {
  const queryClient = useQueryClient();
  let idInvalid = idP;
  return useMutation({
    mutationFn: (body: Partial<AddReservation>) => {
      body?.id && (idInvalid = body?.id);
      return ReservationManager.updateReservation(idInvalid as string, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservation"] });
      queryClient.invalidateQueries({ queryKey: ["reservation", idInvalid] });
    },
    retry: false,
  });
};

// Delete a reservation
export const useDeleteReservation = (idP?: string) => {
  const queryClient = useQueryClient();
  let idInvalid = idP;
  return useMutation({
    mutationFn: ({ id }: { id: string }) => {
      id && (idInvalid = id);
      return ReservationManager.deleteReservation(idInvalid as string);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservation"] });
    },
    retry: false,
  });
};
