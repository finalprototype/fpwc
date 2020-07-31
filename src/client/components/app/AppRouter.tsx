import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../home/Home';
import About from '../about/About';
import Work from '../work/Work';
import SMB from '../smb/SMB';
import NotFound from '../NotFound';

const AppRouter: React.FunctionComponent = () => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/home">
      <Home />
    </Route>
    <Redirect exact from="/about" to="/about/me" />
    <Route exact path="/about/:section">
      <About />
    </Route>
    <Route exact path="/work">
      <Work />
    </Route>
    <Route exact path="/smb">
      <SMB />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default AppRouter;
