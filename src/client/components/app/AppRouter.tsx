import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const Home = lazy(() => import('../home/Home'));
const About = lazy(() => import('../about/About'));
const Work = lazy(() => import('../work/Work'));
const SMB = lazy(() => import('../smb/SMB'));
const NotFound = lazy(() => import('../NotFound'));

const AppRouter: React.FunctionComponent = () => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/home">
      <Home />
    </Route>
    <Route exact path="/about">
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
