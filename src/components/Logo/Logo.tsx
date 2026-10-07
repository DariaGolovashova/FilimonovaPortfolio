'use client';

import Link from 'next/link';
import Image from 'next/image';

import LogoIcon from '@/src/icons/TravelTrucks.png';

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick} aria-label="Go to home page">
      <Image src={LogoIcon} alt="TravelTrucks" priority />
    </Link>
  );
}
