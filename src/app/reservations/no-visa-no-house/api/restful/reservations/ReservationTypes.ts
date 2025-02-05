export type ReservationLookUp = {
  id?: string;
  _id?: string;
  name_ar?: string;
  name_en?: string;
  active?: boolean;
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type GetreservationLookUp = {
  result: number;
  pages: number;
  total: number;
  data: ReservationLookUp[];
};

export type Reservation = {
  id?: string;
  _id?: string;
  reservationType: string;
  hotelName: string;
  city: string;
  capacity: number;
  area: number;
  status?: "active" | "vacation" | "cancelled";
  serial?: number;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type GetAllreservation = {
  result: number;
  pages: number;
  total: number;
  data: Reservation[];
};

export type ReservationDialogProps = {
  reservation: Reservation;
};

export type AddReservation = {
  id?: string;
  _id?: string;
  name_ar?: string;
  name_en?: string;
  short_name_ar?: string;
  short_name_en?: string;
  description?: string | null;
  reservation_type?: string | null;
  default_user?: string | null;
  serial?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ReservationById = {
  data: Reservation;
};

export type reservation = Reservation[];
