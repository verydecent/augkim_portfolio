import React from "react";
import Home from "../Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Gallery from "../Gallery";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/works"
          render={(props) => (
            <Gallery {...props} entryId={"5bNDKtltCEPzT7gzS6PwZF"} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
