import { FC } from 'react';

import styles from '../styles.module.scss';

const DaySelect: FC = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  return (
    <div className={styles['select-box']}>
      <select name="Year">
        <option disabled selected></option>
        {days.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DaySelect;
