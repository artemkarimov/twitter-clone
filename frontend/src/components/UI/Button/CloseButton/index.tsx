import { FC } from 'react';

import styles from './styles.module.scss';

const CloseButton: FC = () => {
  return (
    <button className={styles['close_button']}>
      <div></div>
      <div></div>
    </button>
  );
};

export default CloseButton;
