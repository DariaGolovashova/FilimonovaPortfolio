export interface GalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: 'automatic' | 'manual';
  engine: 'diesel' | 'petrol' | 'hybrid' | 'electric';
  amenities: (
    | 'ac'
    | 'bathroom'
    | 'kitchen'
    | 'tv'
    | 'radio'
    | 'refrigerator'
    | 'microwave'
    | 'gas'
    | 'water'
  )[];
  gallery: GalleryImage[];
  coverImage: string;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface CamperFiltres {
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
}
