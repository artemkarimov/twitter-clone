import { FC } from 'react';

import classes from './Input.module.scss';

interface Props {
  type: string;
  placeholder: string;
}

const Input: FC<Props> = props => {
  return <input type={props.type} placeholder={props.placeholder} className={classes.formInput} />;
};

export default Input;
