'use client';

import { CamperFiltres } from '@/src/types/Camper';
import css from './Filters.module.css';
import { CiSearch } from 'react-icons/ci';
import locationIcon from '../../icons/Map.png';
import closeButonIcon from '../../icons/ion_close-outline.png';
import Image from 'next/image';

interface FiltersProps {
  filters: CamperFiltres;
  onLocation: (value: string) => void;
  onFormChange: (value: string) => void;
  onEngineChange: (value: string) => void;
  onTransmissionChange: (value: string) => void;
  onSearch: () => void;
  onResetFilters: () => void;
}
const Filters = ({
  filters,
  onLocation,
  onFormChange,
  onEngineChange,
  onTransmissionChange,
  onSearch,
  onResetFilters,
}: FiltersProps) => {
  return (
    <div className={css.filtersBox}>
      <div className={css.locationBox}>
        <label className={css.label}>Location</label>
        <div className={css.inputWrapper}>
          <Image
            src={locationIcon}
            alt="Location"
            width={20}
            height={20}
            className={css.locationIcon}
          />
          <input
            className={css.input}
            placeholder="City"
            value={filters.location}
            onChange={(e) => onLocation(e.target.value)}
          />
        </div>

        <div className={css.filterDetails}>
          <h3>Filters</h3>
          <div className={css.filterGroup}>
            <p>Camper form</p>

            <label>
              <input
                type="radio"
                checked={filters.form === 'alcove'}
                onChange={() => onFormChange('alcove')}
              />
              Alcove
            </label>
            <label>
              <input
                type="radio"
                checked={filters.form === 'panel_van'}
                onChange={() => onFormChange('panel_van')}
              />
              Panel van
            </label>
            <label>
              <input
                type="radio"
                checked={filters.form === 'integrated'}
                onChange={() => onFormChange('integrated')}
              />
              Integrated
            </label>
            <label>
              <input
                type="radio"
                checked={filters.form === 'semi_integrated'}
                onChange={() => onFormChange('semi_integrated')}
              />
              Semi Integrated
            </label>
          </div>
          <div className={css.filterGroup}>
            <p>Engine</p>

            <label>
              <input
                type="radio"
                checked={filters.engine === 'diesel'}
                onChange={() => onEngineChange('diesel')}
              />
              Diesel
            </label>
            <label>
              <input
                type="radio"
                checked={filters.engine === 'petrol'}
                onChange={() => onEngineChange('petrol')}
              />
              Petrol
            </label>
            <label>
              <input
                type="radio"
                checked={filters.engine === 'hybrid'}
                onChange={() => onEngineChange('hybrid')}
              />
              Hybrid
            </label>
            <label>
              <input
                type="radio"
                checked={filters.engine === 'electric'}
                onChange={() => onEngineChange('electric')}
              />
              Electric
            </label>
          </div>
          <div className={css.filterGroup}>
            <p>Transmission</p>

            <label>
              <input
                type="radio"
                checked={filters.transmission === 'automatic'}
                onChange={() => onTransmissionChange('automatic')}
              />
              Automatic
            </label>
            <label>
              <input
                type="radio"
                checked={filters.transmission === 'manual'}
                onChange={() => onTransmissionChange('manual')}
              />
              Manual
            </label>
          </div>
        </div>

        <button className={css.searchButton} type="button" onClick={onSearch}>
          Search
        </button>
        <div className={css.buttons}>
          <Image
            src={closeButonIcon}
            alt="Location"
            width={20}
            height={20}
            className={css.closeIcon}
          />
          <button
            className={css.clearButton}
            type="button"

            onClick={onResetFilters}
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
