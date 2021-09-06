import { FC } from 'react';

import classes from './Input.module.scss';

interface Props {
  id: string;
  type: string;
  label: string;
}

const Input: FC<Props> = props => {
  return (
    <>
      <label htmlFor={props.id} className={classes.formLabel}>
        {props.label}
      </label>
      <input type={props.type} id={props.id} className={classes.formInput} />
    </>
  );
};

export default Input;
