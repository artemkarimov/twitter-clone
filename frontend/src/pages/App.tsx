import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing/Landing';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  );
};

export default App;
