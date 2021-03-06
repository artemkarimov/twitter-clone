import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Routes from 'constants/enums/routes';
import Home from './Home';

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route path={Routes.DEFAULT} exact>
          <Landing />
        </Route>
        <Route path={Routes.LOGIN}>
          <Login />
        </Route>
        <Route path={Routes.SIGNUP}>
          <Signup />
        </Route>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
