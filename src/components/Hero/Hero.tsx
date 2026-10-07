import Link from 'next/link';
import css from './Hero.module.css';
import Container from '../Container/Container';
const Hero = () => {
  return (
    <div className={css.hero}>
      <Container>
        <div className={css.heroContent}>
          <div className={css.heroTittle}>
            <h1>Campers of your dreams</h1>
            <h2>You can find everything you want in our catalog</h2>
          </div>

          <Link href="/catalog" className={css.heroButton}>
            View Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
