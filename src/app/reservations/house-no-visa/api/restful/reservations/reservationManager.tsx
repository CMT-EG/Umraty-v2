import { ParamsQuery } from "@/global/types/CommonTypes";
import { toQueryString } from "@/global/utils/queryUtils";
import { AddReservation } from "./ReservationTypes";
import axios from "axios";

class ReservationManager {
  static async getAllReservations(params: ParamsQuery) {
    return (await axios.get(`/reservation?${toQueryString(params)}`)).data;
  }

  static async getAllLookUpReservations(params: ParamsQuery) {
    return (await axios.get(`/lookup/reservation?${toQueryString(params)}`))
      .data;
  }

  static async getReservation(id: string) {
    return (await axios.get(`/reservation/${id}`)).data;
  }

  static async addReservation(body: AddReservation) {
    return (await axios.post(`/reservation`, body)).data;
  }

  static async updateReservation(id: string, body: Partial<AddReservation>) {
    return (await axios.patch(`/reservation/${id}`, body)).data;
  }

  static async deleteReservation(id: string) {
    return (await axios.delete(`/reservation/${id}`)).data;
  }
}

export default ReservationManager;
