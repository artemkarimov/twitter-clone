import { FC } from 'react';

import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import share from '../../assets/share.svg';
import users from '../../assets/users.svg';
import comment from '../../assets/comment.svg';
import Button from '../../components/UI/Button/Button';
import classes from './Landing.module.scss';

const Landing: FC = () => {
  const icons = [
    {
      image: search,
      style: {
        height: '2rem',
        marginBottom: '-0.2rem',
      },
    },
    {
      image: share,
      style: {
        height: '3.2rem',
        marginLeft: '11.5rem',
        marginTop: '-1.5rem',
        marginBottom: '-1rem',
      },
    },
    {
      image: users,
      style: {
        height: '1.5rem',
        marginTop: '0.2rem',
      },
    },
    {
      image: comment,
      style: {
        height: '2.2rem',
        marginTop: '-0.5rem',
        marginLeft: '12.1rem',
      },
    },
  ];
  const bannerPhrases = [
    {
      phrase: 'Follow your interests.',
      style: { marginTop: '0.7rem' },
    },
    {
      phrase: 'Share your thoughts.',
      style: { marginTop: '1.5rem' },
    },
    {
      phrase: 'Hear what people are talking about.',
      style: { marginTop: '1.5rem' },
    },
    {
      phrase: 'Join the conversations.',
      style: { marginTop: '1.3rem' },
    },
  ];
  return (
    <div className={classes.landing}>
      <div className={classes['side-banner']}>
        <img src={logo} alt="twitter-logo" />
        <div className={classes['banner-content']}>
          <ul className="icons">
            {icons.map((icon, index) => (
              <li key={index}>
                <img src={icon.image} style={icon.style} />
              </li>
            ))}
          </ul>
          <ul className="phrases">
            {bannerPhrases.map((phrase, index) => (
              <li key={index} style={phrase.style}>
                {phrase.phrase}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.content}>
        <img src={logo} alt="twitter-logo" />
        <h1>
          See what's happening in <br /> the world right now
        </h1>
        <h2>Join Twitter today.</h2>
        <Button width="23rem" link="/signup">
          Sign up
        </Button>
        <Button flat={true} width="23rem" link="/login">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Landing;
