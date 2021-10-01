import { FC, useState, ChangeEvent, FormEvent } from 'react';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';

const Login: FC = () => {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();

  const loginChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  return (
    <div className={styles.login}>
      <img src={logo} alt="logo" />
      <h1>Log in to Twitter</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Phone, email or username"
          changeHandler={loginChangeHandler}
        />
        <Input type="password" placeholder="Password" changeHandler={passwordChangeHandler} />
        <Button width="20.4rem">Log In</Button>
      </form>
    </div>
  );
};

export default Login;
