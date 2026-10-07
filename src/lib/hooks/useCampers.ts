'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '../api/camper';
import { CamperFiltres } from '@/src/types/Camper';
export const useCampers = (filters: CamperFiltres = {}) => {
  return useInfiniteQuery({
    queryKey: [
      'campers',
      filters.location,
      filters.form,
      filters.engine,
      filters.transmission,
    ],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      // ++++++
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== ''),
      );
      // ======
      return getCampers({
        page: pageParam,
        perPage: 4,
        ...cleanFilters,
      });
    },

    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) return undefined;
      return lastPage.page + 1;
    },
  });
};
