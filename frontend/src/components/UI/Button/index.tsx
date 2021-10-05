import { FC, CSSProperties } from 'react';
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
  style?: CSSProperties;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  children,
  type,
  flat,
  link,
  noBorder,
  disabled,
  style,
  onClick,
}) => {
  const classNames = [
    styles.button,
    flat ? styles.flat : styles.regular,
    noBorder ? styles['no-border'] : '',
  ];
  const button = (
    <button
      type={type}
      className={classNames.join(' ')}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
  if (link) return <Link to={link}>{button}</Link>;
  return <>{button}</>;
};

export default Button;
