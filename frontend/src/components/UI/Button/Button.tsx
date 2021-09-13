import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

interface Props {
  flat?: boolean;
  width?: string;
  link?: string;
}

const Button: FC<Props> = props => {
  const classNames = [classes.button, props.flat ? classes.flat : ''];
  const button = (
    <button className={classNames.join(' ')} style={{ width: props.width }}>
      {props.children}
    </button>
  );
  if (props.link) {
    return <Link to={props.link}>{button}</Link>;
  }
  return <>{button}</>;
};

export default Button;
