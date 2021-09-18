import { FC, RefObject } from 'react';

import styles from './styles.module.scss';

interface Props {
  type: string;
  placeholder: string;
  reference: RefObject<HTMLInputElement>;
}

const Input: FC<Props> = props => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={styles.formInput}
      ref={props.reference}
    />
  );
};

export default Input;
