import React, { useState } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory, History } from "history";

import AppView from "./AppView";

const AppContainer = () => {
  const [history] = useState<History>(createBrowserHistory());
  return (
    <Router history={history!}>
      <AppView />
    </Router>
  );
};

export default AppContainer;
