import { FC } from 'react';

import styles from '../styles.module.scss';
import getNumberOfDays from 'helpers/numberOfDays';

interface Props {
  year: number | undefined;
  month: number | undefined;
}

const DaySelect: FC<Props> = ({ year, month }) => {
  const days = [];
  const numberOfDays = getNumberOfDays(year, month);
  for (let i = 1; i <= numberOfDays; i++) {
    days.push(i);
  }
  const contentBefore = { 'content-before': 'Day' };
  return (
    <div className={styles['select-box']} style={{ width: '7rem' }} {...contentBefore}>
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
