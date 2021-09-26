import { FC, ChangeEvent } from 'react';

import styles from '../styles.module.scss';

interface Props {
  changeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const YearSelect: FC<Props> = ({ changeHandler }) => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1901; i--) {
    years.push(i);
  }
  return (
    <div className={styles['select-box']} style={{ width: '8rem' }}>
      <select name="Year" onChange={changeHandler}>
        <option disabled selected></option>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelect;
