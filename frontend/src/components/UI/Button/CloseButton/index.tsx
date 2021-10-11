import { FC, CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import Routes from 'constants/enums/routes';
import styles from './styles.module.scss';

interface Props {
  style?: CSSProperties;
  redirectTo: Routes;
}

const CloseButton: FC<Props> = ({ style, redirectTo }) => {
  return (
    <Link to={redirectTo}>
      <button className={styles['close_button']} style={style}>
        <div></div>
        <div></div>
      </button>
    </Link>
  );
};

export default CloseButton;
