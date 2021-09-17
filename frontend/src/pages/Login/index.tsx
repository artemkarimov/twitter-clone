import { FC, useRef } from 'react';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import logo from 'assets/logo.svg';
import classes from './Login.module.scss';

const Login: FC = () => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div className={classes.login}>
      <img src={logo} alt="logo" />
      <h1>Log in to Twitter</h1>
      <Input type="text" placeholder="Phone, email or username" reference={loginRef} />
      <Input type="password" placeholder="Password" reference={passwordRef} />
      <Button width="20.4rem">Log In</Button>
    </div>
  );
};

export default Login;
