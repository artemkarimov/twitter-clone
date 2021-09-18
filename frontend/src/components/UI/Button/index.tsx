import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';

interface Props {
  type?: ButtonType;
  flat?: boolean;
  width?: string;
  link?: string;
  noBorder?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = props => {
  const classNames = [
    styles.button,
    props.flat ? styles.flat : '',
    props.noBorder ? styles['no-border'] : '',
  ];
  const button = (
    <button
      type={props.type}
      className={classNames.join(' ')}
      style={{ width: props.width }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
  if (props.link) return <Link to={props.link}>{button}</Link>;
  return <>{button}</>;
};

export default Button;
