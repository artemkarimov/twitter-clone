import { FC, useRef, FormEvent } from 'react';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';

const Login: FC = () => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(login, password);
  };
  return (
    <div className={styles.login}>
      <img src={logo} alt="logo" />
      <h1>Log in to Twitter</h1>
      <form onSubmit={submitHandler}>
        <Input type="text" placeholder="Phone, email or username" reference={loginRef} />
        <Input type="password" placeholder="Password" reference={passwordRef} />
        <Button width="20.4rem">Log In</Button>
      </form>
    </div>
  );
};

export default Login;
