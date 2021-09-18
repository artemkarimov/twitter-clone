import { FC, RefObject } from 'react';

import styles from './styles.module.scss';

interface Props {
  type: string;
  placeholder: string;
  reference: RefObject<HTMLInputElement>;
}

const Input: FC<Props> = ({ type, placeholder, reference }) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.formInput} ref={reference} />
  );
};

export default Input;
