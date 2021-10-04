import { FC, useState, ChangeEvent, FormEvent } from 'react';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import Card from 'components/UI/Card';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';

const Login: FC = () => {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginIsEntered, setLoginIsEntered] = useState<boolean>(false);

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
    <Card>
      <div className={styles.login}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1>To get started, first enter your phone, email, or @username</h1>
        <form onSubmit={submitHandler}>
          {!loginIsEntered && (
            <Input
              type="text"
              label="Phone, email or username"
              changeHandler={loginChangeHandler}
            />
          )}
          {loginIsEntered && (
            <Input type="password" label="Password" changeHandler={passwordChangeHandler} />
          )}
          <Button width="32.4rem">Log In</Button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
