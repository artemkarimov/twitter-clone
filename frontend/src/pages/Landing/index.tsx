import { FC } from 'react';

import logo from 'assets/logo.svg';
import search from 'assets/search.svg';
import share from 'assets/share.svg';
import users from 'assets/users.svg';
import comment from 'assets/comment.svg';
import Button from 'components/UI/Button';
import Routes from 'constants/enums/routes';
import styles from './styles.module.scss';

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

  const buttonStyles = {
    width: '23rem',
  };

  return (
    <div className={styles.landing}>
      <div className={styles['side-banner']}>
        <img src={logo} alt="twitter-logo" />
        <div className={styles['banner-content']}>
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
      <div className={styles.content}>
        <img src={logo} alt="twitter-logo" />
        <h1>
          See what's happening in <br /> the world right now
        </h1>
        <h2>Join Twitter today.</h2>
        <Button style={buttonStyles} link={Routes.SIGNUP}>
          Sign up
        </Button>
        <Button flat={true} style={buttonStyles} link={Routes.LOGIN}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Landing;
