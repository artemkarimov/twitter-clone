import { FC } from 'react';

import styles from '../styles.module.scss';

const MonthSelect: FC = () => {
  const months = [
    'January',
    'Febtuary',
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
    <div className={styles['select-box']} style={{ width: '9rem' }}>
      <select name="Year">
        <option disabled selected></option>
        {months.map(month => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelect;
