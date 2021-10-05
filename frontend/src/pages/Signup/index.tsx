import { FC, useState, useEffect, ChangeEvent } from 'react';

import Card from 'components/UI/Card';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import YearSelect from 'components/UI/Select/Year';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';
import MonthSelect from 'components/UI/Select/Month';
import DaySelect from 'components/UI/Select/Day';
import isEmpty from 'helpers/isEmpty';

const Signup: FC = () => {
  type RegisterOption = 'Email' | 'Phone';

  const [registerOption, setRegisterOption] = useState<RegisterOption>('Email');
  const [name, setName] = useState<string>();
  const [login, setLogin] = useState<string>();
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => setIsDisabled(!checkIsRequiredDataEntered()), [name, login, year, month, day]);

  const checkIsRequiredDataEntered = () => {
    return isEmpty(name) && isEmpty(login) && isEmpty(month) && isEmpty(year) && isEmpty(day);
  };

  const anotherOption = (previousOption: RegisterOption) => {
    if (previousOption === 'Email') return 'Phone';
    return 'Email';
  };

  const changeRegisterOption = () => setRegisterOption(prevOption => anotherOption(prevOption));

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const loginChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const yearChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(+event.target.value);
  };

  const monthChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(+event.target.value);
  };

  const dayChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setDay(+event.target.value);
  };

  const buttonStyles = {
    width: '100%',
  };

  return (
    <Card>
      <img src={logo} alt="logo" className={styles.logo} />
      <h2>Create your account</h2>
      <form className={styles.form}>
        <Input type="text" label="Name" changeHandler={nameChangeHandler} />
        <Input type="text" label={registerOption} changeHandler={loginChangeHandler} />
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
        <Button style={buttonStyles} disabled={isDisabled}>
          Next
        </Button>
      </form>
    </Card>
  );
};

export default Signup;
