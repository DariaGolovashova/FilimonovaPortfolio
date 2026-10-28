import { supabase } from '@/src/lib/supabase/client';
import type { Media } from '@/src/types/Media';

export const getMedia = async ():Promise<Media[]> => {
  const { data, error } = await supabase
    .from('media')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
