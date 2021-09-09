import { FC } from 'react';

import logo from '../../assets/logo.svg';
import Button from '../../components/UI/Button/Button';

const Landing: FC = () => {
  return <>
    <img src={logo} alt="twitter-logo" />
    <h1>Happening now</h1>
    <h2>Join Twitter today.</h2>
    <Button>Sign up</Button>
    <Button flat={true}>Log in</Button>
  </>;
};

export default Landing;
