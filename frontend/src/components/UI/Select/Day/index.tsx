import { FC } from 'react';

import styles from '../styles.module.scss';
import getDaysNumber from 'helpers/daysNumberInMonth';

interface Props {
  year: number;
  month: number;
}

const DaySelect: FC<Props> = ({ year, month }) => {
  const days = [];
  const daysNumber = getDaysNumber(year, month);
  for (let i = 1; i <= daysNumber; i++) {
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
