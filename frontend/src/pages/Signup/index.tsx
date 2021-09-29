import { FC, useState, useRef, ChangeEvent } from 'react';

import Card from 'components/UI/Card';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import YearSelect from 'components/UI/Select/Year';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';
import MonthSelect from 'components/UI/Select/Month';
import DaySelect from 'components/UI/Select/Day';
import isEmpty from 'helpers/isEmpty';

interface RegisterData {
  name: string;
  email: string;
  year: number;
  month: number;
  day: number;
}

const Signup: FC = () => {
  type RegisterOption = 'Email' | 'Phone';

  const [registerOption, setRegisterOption] = useState<RegisterOption>('Email');
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: '',
    email: '',
    year: 0,
    month: 0,
    day: 0,
  });

  const checkIsRequiredDataEntered = () => {
    return (
      isEmpty(nameRef.current?.value) &&
      isEmpty(passwordRef.current?.value) &&
      isEmpty(month) &&
      isEmpty(registerData.year) &&
      isEmpty(day)
    );
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const anotherOption = (previousOption: RegisterOption) => {
    if (previousOption === 'Email') return 'Phone';
    return 'Email';
  };

  const changeRegisterOption = () => setRegisterOption(prevOption => anotherOption(prevOption));

  const yearChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(+event.target.value);
    setRegisterData(previousValue => ({ ...previousValue, year: +event.target.value}));
    setIsDisabled(!checkIsRequiredDataEntered());
  };

  const monthChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(+event.target.value);
    setIsDisabled(!checkIsRequiredDataEntered());
  };

  const dayChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setDay(+event.target.value);
    setIsDisabled(!checkIsRequiredDataEntered());
  };

  return (
    <Card>
      <img src={logo} alt="logo" className={styles.logo} />
      <h2>Create your account</h2>
      <form className={styles.form}>
        <Input type="text" placeholder="Name" reference={nameRef} />
        <Input type="text" placeholder={registerOption} reference={passwordRef} />
        <Button noBorder={true} onClick={changeRegisterOption} type="button">
          Use {anotherOption(registerOption).toLowerCase()} instead
        </Button>
        <h4>Date of birth</h4>
        <p>
          This will not be shown publicly. Confirm your own age, even if this account is for a
          business, a pet, or something else.
        </p>
        <div className={styles['birth-date']}>
          <MonthSelect changeHandler={monthChangeHandler} />
          <DaySelect year={year} month={month} changeHandler={dayChangeHandler} />
          <YearSelect changeHandler={yearChangeHandler} />
        </div>
        <Button width="100%" disabled={isDisabled}>
          Next
        </Button>
      </form>
    </Card>
  );
};

export default Signup;
