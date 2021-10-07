import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import Card from 'components/UI/Card';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';

const Login: FC = () => {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginIsEntered, setLoginIsEntered] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const loginChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  useEffect(() => {
    if (login || password) setDisabled(false);
    else setDisabled(true);
  }, [login, password]);

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!loginIsEntered) {
      setLoginIsEntered(true);
      setDisabled(true);
    }
  };

  const buttonStyles = {
    width: '32.4rem',
    marginTop: !loginIsEntered ? '17.5rem' : '20.2rem',
    backgroundColor: loginIsEntered ? 'black' : '',
    borderColor: loginIsEntered ? 'black' : '',
  };

  return (
    <Card>
      <div className={styles.login}>
        <img src={logo} alt="logo" className={styles.logo} />
        {!loginIsEntered ? (
          <h1>To get started, first enter your phone, email, or @username</h1>
        ) : (
          <h1>Enter your password</h1>
        )}
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
          <Button style={buttonStyles} disabled={disabled}>
            {!loginIsEntered ? 'Next' : 'Log in'}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
