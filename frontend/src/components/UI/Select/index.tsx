import { FC } from 'react';

import styles from './styles.module.scss';

const Select: FC = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1901; i--) {
    years.push(i);
  }
  return (
    <div className={styles['select-box']}>
      <select name="Year">
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

export default Select;
