import { FC, useRef } from 'react';

import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';
import logo from '../../assets/logo.svg';
import classes from './Signup.module.scss';

const Signup: FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <Card>
      <img src={logo} alt="logo" className={classes.logo} />
      <h2>Create your account</h2>
      <Input type="text" placeholder="Name" reference={nameRef} />
      <Input type="text" placeholder="Phone" reference={passwordRef} />
    </Card>
  );
};

export default Signup;
