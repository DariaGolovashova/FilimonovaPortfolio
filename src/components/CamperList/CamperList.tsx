'use client';

import CamperCard from '../CamperCard/CamperCard';

import { Camper } from '@/src/types/Camper';
import css from './CamperList.module.css';

interface CamperListProps {
  campers: Camper[];
}

function CamperList({ campers }: CamperListProps) {
  return (
    <div className={css.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
}
export default CamperList;
