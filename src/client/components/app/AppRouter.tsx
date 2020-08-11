import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useFeatures } from '@paralleldrive/react-feature-toggles';

const Home = lazy(() => import('../home/Home'));
const About = lazy(() => import('../about/About'));
const Work = lazy(() => import('../work/Work'));
const SMB = lazy(() => import('../smb/SMB'));
const NotFound = lazy(() => import('../NotFound'));

const AppRouter: React.FunctionComponent = () => {
  const features = useFeatures();
  const renderWorkRoute = !features.includes('work-section')
    ? null
    : (
      <Route exact path="/work">
        <Work />
      </Route>
    );
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <Home />
      </Route>
      <Redirect exact from="/about" to="/about/site" />
      <Route exact path="/about/:section">
        <About />
      </Route>
      {renderWorkRoute}
      <Route exact path="/smb">
        <SMB />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRouter;
