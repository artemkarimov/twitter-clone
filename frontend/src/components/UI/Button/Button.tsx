import { FC } from 'react';

import classes from './Button.module.scss';

interface Props {
  flat?: boolean;
}

const Button: FC<Props> = props => {
  const classNames = [classes.button, props.flat ? classes.flat : '']
  return <button className={classNames.join(' ')}>{props.children}</button>;
};

export default Button;
