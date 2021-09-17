import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

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
    classes.button,
    props.flat ? classes.flat : '',
    props.noBorder ? classes['no-border'] : '',
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
