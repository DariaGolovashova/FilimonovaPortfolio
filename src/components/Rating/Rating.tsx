import Image from 'next/image';
import starDefault from '../../icons/starDefault.png';
import starNoActive from '../../icons/starNoActive.png';
import css from './Rating.module.css';

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className={css.ratting}>
      {Array.from({ length: 5 }, (_, i) => {
        const isActive = i < rating;

        return (
          <Image
            key={i}
            src={isActive ? starDefault : starNoActive}
            alt="star"
            width={20}
            height={20}
          />
        );
      })}
    </div>
  );
};

export default Rating;
