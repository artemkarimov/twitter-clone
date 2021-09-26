import { ChangeEvent, FC } from 'react';

import styles from '../styles.module.scss';

interface Props {
  changeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const MonthSelect: FC<Props> = ({ changeHandler }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className={styles['select-box']} style={{ width: '15rem' }}>
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
