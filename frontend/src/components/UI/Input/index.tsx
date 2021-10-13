import { FC, useState, ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface Props {
  type: string;
  label: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ type, label, changeHandler }) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const classNames = [styles.input, isEmpty ? '' : styles['not-empty-input']];
  const [numberOfSymbols, setNumberOfSymbols] = useState<number>(0);
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target?.value) setIsEmpty(false);
    else setIsEmpty(true);
    setNumberOfSymbols(event.target?.value.split('').length);
  };
  return (
    <div className={classNames.join(' ')}>
      <input
        type={type}
        onChange={event => {
          if (changeHandler) changeHandler(event);
          inputHandler(event);
        }}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
