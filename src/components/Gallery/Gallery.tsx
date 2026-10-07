'use client';

import { useState } from 'react';
import css from './Gallery.module.css';
import Image from 'next/image';

interface GalleryProps {
  gallery: {
    id: string;
    thumb: string;
    original: string;
  }[];
}

const Gallery = ({ gallery }: GalleryProps) => {
  const [activeImage, setActiveImage] = useState(gallery[0]?.original);
  if (!gallery.length) return null;
  return (
    <div className={css.galery}>
      <Image
        width={638}
        height={505}
        src={activeImage}
        className={css.mainImage}
        alt="mainImage"
      />

      <div className={css.thumbs}>
        {gallery.map((image) => (
          <Image
            width={136}
            height={144}
            key={image.id}
            src={image.thumb}
            alt=""
            className={`${css.thumb} ${
              activeImage === image.original ? css.thumbActive : ''
            }`}
            onClick={() => setActiveImage(image.original)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
