import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing/Landing';
import Login from './Login/Login';
import Register from './Register/Register';

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
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};

export default App;
