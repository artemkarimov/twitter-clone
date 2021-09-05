import { FC } from 'react';

import classes from './Button.module.scss';

const Button: FC = props => {
  return <button className={classes.button}>{props.children}</button>;
};

export default Button;
