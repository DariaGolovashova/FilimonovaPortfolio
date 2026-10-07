import { Camper } from '@/src/types/Camper';
import Link from 'next/link';
import css from './CamperCard.module.css';
import Image from 'next/image';
import petrolIcon from '../../icons/petrol.png';
import automaticIcon from '../../icons/automatic.png';
import alcoveIcon from '../../icons/alcove.png';
import starIcon from '../../icons/starDefault.png';
import mapIcon from '../../icons/Map.png';

interface CamperCardProps {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProps) => {
  return (
    <div className={css.camperCard}>
      <Image
        src={camper.coverImage}
        width={219}
        height={240}
        className={css.camperImage}
        alt="camperImage"
      />
      <div className={css.camperDetails}>
        <div className={css.camperTittle}>
          <h2>{camper.name}</h2>
          <span> € {camper.price}</span>
        </div>
        <div className={css.camperRating}>
          <div className={css.ratingItem}>
            <Image
              src={starIcon}
              alt="Rating"
              width={16}
              height={16}
              // className={css.starIcon}
            />
            <span>{camper.rating}</span>
          </div>
          <div className={css.ratingItem}>
            <Image src={mapIcon} alt="Map" width={16} height={16} />
            <span>{camper.location}</span>
          </div>
        </div>

        <div className={css.camperInformation}>
          <div className={css.infoItem}>
            <Image src={petrolIcon} alt="engine" width={16} height={16} />
            <span>{camper.engine}</span>
          </div>
          <div className={css.infoItem}>
            <Image
              src={automaticIcon}
              alt="transmission"
              width={16}
              height={16}
            />
            <span>{camper.transmission}</span>
          </div>
          <div className={css.infoItem}>
            <Image src={alcoveIcon} alt="form" width={16} height={16} />
            <span>{camper.form}</span>
          </div>

          <Link
            className={css.showMore}
            href={`/catalog/${camper.id}`}
            target="_blank"
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
