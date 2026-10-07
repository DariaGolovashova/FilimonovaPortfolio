import Rating from '../Rating/Rating';
import css from './Reviews.module.css';

interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewProps) => {
  return (
    <section className={css.reviews}>
      <h2> Review </h2>
      {reviews.map((review) => (
        <article key={review.id} className={css.reviewCard}>
          <div className={css.reviewHeader}>
            <div className={css.avatar}>{review.reviewer_name[0]}</div>

            <div>
              <p className={css.name}>{review.reviewer_name}</p>
              <Rating rating={review.reviewer_rating} />
            </div>
          </div>

          <p className={css.coment}>{review.comment}</p>
        </article>
      ))}
    </section>
  );
};

export default Reviews;
