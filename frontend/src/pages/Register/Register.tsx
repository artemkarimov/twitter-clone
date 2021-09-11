import { FC } from 'react';

import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';
import logo from '../../assets/logo.svg';
import classes from './Register.module.scss';

const Register: FC = () => {
  return (
    <Card>
      <img src={logo} alt="logo" className={classes.logo} />
      <h2>Create your account</h2>
      <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Phone" />
    </Card>
  );
};

export default Register;
