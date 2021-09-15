import { FC, useState, useRef } from 'react';

import Card from 'components/UI/Card/Card';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';
import logo from 'assets/logo.svg';
import classes from './Signup.module.scss';

const Signup: FC = () => {
  type RegisterOption = 'Email' | 'Phone';

  const [registerOption, setRegisterOption] = useState<RegisterOption>('Email');

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const anotherOption = (previousOption: RegisterOption) => {
    if (previousOption === 'Email') return 'Phone';
    return 'Email';
  };

  const changeRegisterOption = () => setRegisterOption(prevOption => anotherOption(prevOption));

  return (
    <Card>
      <img src={logo} alt="logo" className={classes.logo} />
      <h2>Create your account</h2>
      <Input type="text" placeholder="Name" reference={nameRef} />
      <Input type="text" placeholder={registerOption} reference={passwordRef} />
      <Button noBorder={true} onClick={changeRegisterOption}>
        Use {anotherOption(registerOption).toLowerCase()} instead
      </Button>
    </Card>
  );
};

export default Signup;
