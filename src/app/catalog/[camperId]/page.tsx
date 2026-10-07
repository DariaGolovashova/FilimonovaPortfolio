'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getCamperById, getCamperReviews } from '@/src/lib/api/camper';
import Gallery from '@/src/components/Gallery/Gallery';

import Header from '@/src/components/Header/Header';

import css from './pageCamperId.module.css';
import Reviews from '@/src/components/Reviews/Reviews';
import BookingForm from '@/src/components/BookingForm/BookingForm';
import Container from '@/src/components/Container/Container';

import Image from 'next/image';
import starIcon from '../../../icons/starDefault.png';
import mapIcon from '../../../icons/Map.png';

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const details = {
    form: '',
    length: '',
    width: '',
    height: '',
    tank: '',
    consumption: '',
  };

  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamperById(camperId as string),
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ['reviews', camperId],
    queryFn: () => getCamperReviews(camperId as string),
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError || !camper)
    return (
      <div>
        <h2>No campers found</h2>
        <p>
          We couldn`t find any campers that match your filters. <br />
          Try adjusting your search or clearing some filters.
        </p>
      </div>
    );

  return (
    <main>
      <Header />
      <Container>
        <div className={css.gallerySection}>
          <Gallery gallery={camper.gallery} />
        </div>

        <div className={css.infoSection}>
          <div className={css.description}>
            <h2>{camper.name}</h2>

            <div className={css.location}>
              <div className={css.ratingItem}>
                <Image src={starIcon} alt="Rating" width={16} height={16} />
                <span>{camper.rating}</span>
              </div>
              <div className={css.ratingItem}>
                <Image src={mapIcon} alt="Map" width={16} height={16} />
                <span>{camper.location}</span>
              </div>
            </div>

            <p className={css.camperPrice}> € {camper.price}</p>
            <p className={css.camperDescription}>{camper.description}</p>
          </div>

          <div className={css.details}>
            <h2> Vehicle details </h2>
            <div className={css.vehicleDetails}>
              <div className={css.detailsItem}>
                <span>{camper.transmission}</span>
              </div>

              {camper.amenities.map((item) => (
                <div key={item} className={css.detailsItem}>
                  <span>{item}</span>
                </div>
              ))}

              <div className={css.detailsItem}>
                <span>{camper.engine}</span>
              </div>
            </div>

            <div className={css.moreDetailsTabl}>
              <div className={css.row}>
                <span>Form</span>
                <span>{camper.form}</span>
              </div>

              <div className={css.row}>
                <span>Length</span>
                <span>{camper.length}</span>
              </div>

              <div className={css.row}>
                <span>Width</span>
                <span>{camper.width}</span>
              </div>

              <div className={css.row}>
                <span>Height</span>
                <span>{camper.height}</span>
              </div>

              <div className={css.row}>
                <span>Tank</span>
                <span>{camper.tank}</span>
              </div>

              <div className={css.row}>
                <span>Consumption</span>
                <span>{camper.consumption}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={css.sectionReviews}>
          <Reviews reviews={reviews} />
          <BookingForm camperId={camper.id} />
        </div>
      </Container>
    </main>
  );
};

export default CamperDetailsPage;
