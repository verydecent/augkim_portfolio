import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Gallery from "../Gallery";

const Routes = ({ data, isLoading }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/:id"
        render={() => (
          <Gallery
            data={data}
            isLoading={isLoading}
          />
        )}
      />
    </Switch>
  );
};

export default Routes;
