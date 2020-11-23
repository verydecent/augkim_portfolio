import React from "react";
import Home from "../Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
