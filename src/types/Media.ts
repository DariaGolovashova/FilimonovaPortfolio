export type MediaType = 'photo' | 'video';

export type Media = {
  id: string;
  created_at: string;
  type: MediaType;
  title: string;
  description: string | null;
  category: string;
  storage_path: string;
  thumbnail_path: string | null;
};
