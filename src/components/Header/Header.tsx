'use client';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import Container from '@/src/components/Container/Container';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.headerWrapper}>
      <Container>
        <header className={css.header}>
          <Logo />

          <nav className={css.nav}>
            <ul className={css.navList}>
              <li>
                <Link href="/" className={css.navLink}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/catalog" className={css.navLink}>
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  );
}
