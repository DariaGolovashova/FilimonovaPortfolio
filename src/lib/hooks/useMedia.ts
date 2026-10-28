'use client';

import { useQuery } from '@tanstack/react-query';
import { getMedia } from '@/src/lib/api/media';

export const useMedia = () => {
  return useQuery({
    queryKey: ['media'],
    queryFn: getMedia,
  });
};
