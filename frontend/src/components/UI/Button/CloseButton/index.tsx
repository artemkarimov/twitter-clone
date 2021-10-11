import { FC, CSSProperties } from 'react';

import styles from './styles.module.scss';

interface Props {
  style?: CSSProperties;
}

const CloseButton: FC<Props>= ({ style }) => {
  return (
    <button className={styles['close_button']} style={style}>
      <div></div>
      <div></div>
    </button>
  );
};

export default CloseButton;
