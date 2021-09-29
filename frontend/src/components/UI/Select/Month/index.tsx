import { FC, ChangeEvent } from 'react';

import styles from '../styles.module.scss';
import getMonthName from 'helpers/monthName';

interface Props {
  changeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const MonthSelect: FC<Props> = ({ changeHandler }) => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const month = getMonthName(i);
    months.push(month);
  }
  const contentBefore = { 'content-before': 'Month' };
  return (
    <div className={styles['select-box']} style={{ width: '15rem' }} {...contentBefore}>
      <select name="Year" onChange={changeHandler}>
        <option disabled selected></option>
        {months.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelect;
