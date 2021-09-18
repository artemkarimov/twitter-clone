import { FC } from 'react';

import styles from './styles.module.scss';

const Card: FC = props => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
