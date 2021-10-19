import { FC, useState, useEffect, ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface Props {
  type: string;
  label: string;
  withNumberOfChars?: boolean;
  autoFocus?: boolean;
  errorMessage?: string;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({
  type,
  label,
  withNumberOfChars,
  autoFocus,
  errorMessage,
  changeHandler,
}) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [numberOfSymbols, setNumberOfSymbols] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [wasChanged, setWasChanged] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const classNames = [
    styles.input,
    isEmpty ? '' : styles['not-empty-input'],
    showErrorMessage ? styles['input_with_error'] : '',
  ];
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!wasChanged) setWasChanged(true);
    const value = event.target?.value;
    const valueLength = value.length;
    if (valueLength) setIsEmpty(false);
    else setIsEmpty(true);
    if (valueLength <= 50) {
      setNumberOfSymbols(valueLength);
      setInputValue(value);
    }
  };
  useEffect(() => {
    if (!inputValue && wasChanged) setShowErrorMessage(true);
    else setShowErrorMessage(false);
  }, [inputValue]);
  return (
    <div className={classNames.join(' ')}>
      <input
        type={type}
        value={inputValue}
        autoFocus={autoFocus}
        onChange={event => {
          if (changeHandler) changeHandler(event);
          inputHandler(event);
        }}
      />
      <label>{label}</label>
      {withNumberOfChars && <p className={styles['number_of_symbols']}>{numberOfSymbols}/50</p>}
      {showErrorMessage && <p className={styles['p_with_error']}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
