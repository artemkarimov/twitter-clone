import { FC, useState, useEffect, ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface Props {
  type: string;
  label: string;
  withNumberOfChars?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ type, label, withNumberOfChars, changeHandler }) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const classNames = [styles.input, isEmpty ? '' : styles['not-empty-input']];
  const [numberOfSymbols, setNumberOfSymbols] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    const valueLength = value.length;
    if (valueLength) setIsEmpty(false);
    else setIsEmpty(true);
    if (valueLength <= 50) {
      setNumberOfSymbols(valueLength);
      setInputValue(value);
    }
  };
  return (
    <div className={classNames.join(' ')}>
      <input
        type={type}
        value={inputValue}
        onChange={event => {
          if (changeHandler) changeHandler(event);
          inputHandler(event);
        }}
      />
      <label>{label}</label>
      {withNumberOfChars && <p>{numberOfSymbols}/50</p>}
    </div>
  );
};

export default Input;
