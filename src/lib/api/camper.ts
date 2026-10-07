import axios from 'axios';
import { CampersResponse, Camper } from '@/src/types/Camper';

export const api = axios.create({
  baseURL: 'https://campers-api.goit.study',
});

export interface GetCampersParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

export const getCampers = async (
  params: GetCampersParams,
): Promise<CampersResponse> => {
  // console.log('API CALL:', params);
  const { data } = await api.get(`/campers`, { params });
  return data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
  const { data } = await api.get(`/campers/${id}`);
  return data;
};

export const getCamperReviews = async (id: string) => {
  const { data } = await api.get(`/campers/${id}/reviews`);
  return data;
};

export const createBooking = async (
  id: string,
  bookingData: { name: string; email: string },
) => {
  const { data } = await api.post(
    `/campers/${id}/booking-requests`,
    bookingData,
  );
  return data;
};
