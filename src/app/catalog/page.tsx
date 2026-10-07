'use client';

import { useState } from 'react';
import { useCampers } from '@/src/lib/hooks/useCampers';
import Header from '@/src/components/Header/Header';
import Filters from '@/src/components/Filters/Filters';
import CamperList from '@/src/components/CamperList/CamperList';
import css from './pageCamper.module.css';
import Loader from '@/src/components/Loader/Loader';
import notFound from '../../icons/notFoundPage.png';
import Image from 'next/image';

const emptyFilters = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
};

const CatalogPage = () => {
  const [filters, setFilters] = useState(emptyFilters);

  const [searchFilters, setSearchFilters] = useState(emptyFilters);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampers(searchFilters);

  const handleLocationChange = (value: string) => {
    setFilters((prev) => ({ ...prev, location: value }));
  };

  const handleFormChange = (value: string) => {
    setFilters((prev) => ({ ...prev, form: value }));
  };

  const handleEngineChange = (value: string) => {
    setFilters((prev) => ({ ...prev, engine: value }));
  };

  const handleTransmissionChange = (value: string) => {
    setFilters((prev) => ({ ...prev, transmission: value }));
  };

  const onSearch = () => {
    setSearchFilters(filters);
  };

  const resetFilters = () => {
    setFilters(emptyFilters);
    setSearchFilters(emptyFilters);
  };

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <div>
      <Header />

      <div className={css.filters}>
        <aside className={css.sidebar}>
          <Filters
            filters={filters}
            onLocation={handleLocationChange}
            onFormChange={handleFormChange}
            onEngineChange={handleEngineChange}
            onTransmissionChange={handleTransmissionChange}
            onSearch={onSearch}
            onResetFilters={resetFilters}
          />
        </aside>
        <main className={css.pageContent}>
          {isLoading && campers.length === 0 && <Loader />}
          {isError && <p>Something went wrong</p>}
          {!isLoading && campers.length === 0 && !isError && (
            <div className={css.notFound}>
              <Image width={488} height={488} src={notFound} alt="notFound" />
              <h2> No campers found</h2>
              <p>
                We couldn`t find any campers that match your filters.
                <br />
                Try adjusting your search or clearing some filters.
              </p>
              <div className={css.buttons}>
                <button className={css.clearButton} onClick={resetFilters}>
                  Clear filtres
                </button>
                <button
                  className={css.searchButton}
                  onClick={() => setSearchFilters(emptyFilters)}
                >
                  {' '}
                  View all campers
                </button>
              </div>
            </div>
          )}
          {campers.length > 0 && (
            <>
              {' '}
              <CamperList campers={campers} />
              {hasNextPage && (
                <button
                  className={css.buttonMore}
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load more'}
                </button>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
  // }
};

export default CatalogPage;
