import { FC, useState, useRef } from 'react';

import Card from 'components/UI/Card';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';

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
        <Button width="100%" disabled={true}>Next</Button>
      </form>
    </Card>
  );
};

export default Signup;
