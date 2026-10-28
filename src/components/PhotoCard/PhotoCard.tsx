'use client';

import Image from 'next/image';
import type { Media } from '@/src/types/Media';
import { supabase } from '@/src/lib/supabase/client';
import css from './PhotoCard.module.css';

type PhotoCardProps = {
  item: Media;
};

const PhotoCard = ({ item }: PhotoCardProps) => {
  const { data } = supabase.storage
    .from('portfolio')
    .getPublicUrl(item.storage_path);

  return (
    <article className={css.card}>
      <Image
        src={data.publicUrl}
        alt={item.title}
        width={600}
        height={400}
        className={css.image}
      />

      <h3>{item.title}</h3>
    </article>
  );
};

export default PhotoCard;
