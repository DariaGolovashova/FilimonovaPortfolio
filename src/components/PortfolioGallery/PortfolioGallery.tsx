'use client';

import css from './PortfolioGallery.module.css';
import { useMedia } from '@/src/lib/hooks/useMedia';
import PhotoCard from '../PhotoCard/PhotoCard';


const PortfolioGallery = () => {
  const { data, isLoading, error } = useMedia();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data?.length) {
    return <p>No photos yet.</p>;
  }

  return (
    <section className={css.gallery}>
      {data.map((item) => (
        <PhotoCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default PortfolioGallery;
