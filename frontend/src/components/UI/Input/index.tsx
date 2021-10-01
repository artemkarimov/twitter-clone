import { FC, ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface Props {
  type: string;
  placeholder: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ type, placeholder, changeHandler }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.formInput}
      onChange={changeHandler}
    />
  );
};

export default Input;
