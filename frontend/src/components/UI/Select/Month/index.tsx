import { FC, RefObject } from 'react';

import styles from '../styles.module.scss';

interface Props {
  reference: RefObject<HTMLSelectElement>;
}

const MonthSelect: FC<Props> = ({ reference }) => {
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
      <select name="Year" ref={reference}>
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
