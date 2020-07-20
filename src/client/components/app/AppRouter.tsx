import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Location } from "history";

import Home from '../home/Home';
import About from '../about/About';
import Work from '../work/Work';
import SMB from '../smb/SMB';
import Contact from '../contact/Contact';
import NotFound from '../NotFound';

interface Props {
  location: Location;
}

const AppRouter: React.FunctionComponent<Prop> = (props: Props) => {
  console.log(props.location);

  return (
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
      <Route exact path="/contact">
        <Contact />
      </Route>
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
