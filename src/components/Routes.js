import React from "react";
import { Switch, Route } from "react-router-dom";
import { Topics } from "./Topics";

const Routes = () => (
  <Switch>
    <Route path="/" component={Topics} />
    <Route path="*" component={() => <h1>404 Page Not Found</h1>} />
  </Switch>
);

export default Routes;
