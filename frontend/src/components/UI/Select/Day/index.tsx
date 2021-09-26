import { FC } from 'react';

import styles from '../styles.module.scss';
import getDaysNumber from 'helpers/daysNumberInMonth';

interface Props {
  year: number | undefined;
  month: number | undefined;
}

const DaySelect: FC<Props> = ({ year, month }) => {
  const days = [];
  let daysNumber: number;
  if (year && month) daysNumber = getDaysNumber(year, month);
  else if (month && !year) daysNumber = getDaysNumber(2020, month);
  else daysNumber = 31;
  for (let i = 1; i <= daysNumber; i++) {
    days.push(i);
  }
  return (
    <div className={styles['select-box']} style={{ width: '7rem' }}>
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
