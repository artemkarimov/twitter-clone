import { FC } from 'react';

import styles from './styles.module.scss';

const CloseButton: FC = () => {
  return <button className={styles['close_button']}></button>;
};

export default CloseButton;
