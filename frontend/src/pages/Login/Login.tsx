import { FC } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import logo from '../../assets/logo.svg';
import classes from './Login.module.scss';

const Login: FC = () => {
  return (
    <div className={classes.login}>
      <img src={logo} alt="logo" />
      <h1>Log in to Twitter</h1>
      <Input type="text" placeholder="Phone, email or username" />
      <Input type="password" placeholder="Password" />
      <Button width="20.4rem">Log In</Button>
    </div>
  );
};

export default Login;
