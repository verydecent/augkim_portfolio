import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Home from "../Home";
import Gallery from "../Gallery";

const Routes = props => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/:id"
        render={() => <Gallery data={props.data}/>}
      />
    </Switch>
  );
};

export default Routes;
