'use client';

import css from './page.module.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

export const metedata = {
  title: 'TravelTrucks',
};
export default function Home() {
  return (
    <div className={css.page}>
      <Header />

      <main className={css.main}>
        <div className={css.container}>
          <Hero />
        </div>
      </main>
    </div>
  );
}
