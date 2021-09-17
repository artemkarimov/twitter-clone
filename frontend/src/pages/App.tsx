import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';

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
