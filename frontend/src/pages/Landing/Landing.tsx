import { FC } from 'react';

import logo from '../../assets/logo.svg';
import Button from '../../components/UI/Button/Button';
import classes from './Landing.module.scss';

const Landing: FC = () => {
  return (
    <div className={classes.landing}>
      <div className={classes['side-banner']}>
        <img src={logo} alt="twitter-logo" />
        <ul>
          <li>Follow your interests.</li>
          <li>Share your thoughts.</li>
          <li>Hear what people are talking about.</li>
          <li>Join the conversations.</li>
        </ul>
      </div>
      <div className={classes.content}>
        <img src={logo} alt="twitter-logo" />
        <h1>
          See what's happening in <br /> the world right now
        </h1>
        <h2>Join Twitter today.</h2>
        <Button width="23rem">Sign up</Button>
        <Button flat={true} width="23rem">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Landing;
