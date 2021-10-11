import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import Card from 'components/UI/Card';
import CloseButton from 'components/UI/Button/CloseButton';
import logo from 'assets/logo.svg';
import styles from './styles.module.scss';

const Login: FC = () => {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginIsEntered, setLoginIsEntered] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [passwordIsShown, setPasswordIsShown] = useState<boolean>(false);

  const loginChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  useEffect(() => {
    if (login && !loginIsEntered || password) setDisabled(false);
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

  const clickHandler = () => {
    setPasswordIsShown(previousValue => !previousValue);
  };

  const buttonStyles = {
    width: '32.4rem',
    marginTop: !loginIsEntered ? '17.5rem' : '18.7rem',
    backgroundColor: loginIsEntered ? 'black' : '',
    borderColor: loginIsEntered ? 'black' : '',
  };

  const noBorderButtonStyles = {
    marginTop: '-1.5rem',
  };

  const closeButtonStyles = {
    top: '-1.7rem',
    left: '-1.7rem',
  };

  return (
    <Card>
      <CloseButton style={closeButtonStyles} />
      <div className={styles.login}>
        <img src={logo} alt="logo" className={styles.logo} />
        {!loginIsEntered ? (
          <h2>To get started, first enter your phone, email, or @username</h2>
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
            <Input
              type={passwordIsShown ? 'text' : 'password'}
              label="Password"
              changeHandler={passwordChangeHandler}
            />
          )}
          {loginIsEntered && (
            <Button onClick={clickHandler} noBorder={true} style={noBorderButtonStyles}>
              {passwordIsShown ? 'Hide' : 'Reveal'} password
            </Button>
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
