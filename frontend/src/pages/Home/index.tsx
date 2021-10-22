import { FC } from 'react';

import Input from 'components/UI/Input';
import styles from './styles.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <h2>Home</h2>
      <Input type="text" label="What's happening?"/>
      <h1>Welcome to Twitter</h1>
    </div>
  );
};

export default Home;
