import React from 'react';
import { Router } from 'react-router-dom';

import { history } from './AppHistory';
import AppView from './AppView';

const AppContainer: React.FunctionComponent = () => (
  <Router history={history!}>
    <AppView />
  </Router>
);

export default AppContainer;
