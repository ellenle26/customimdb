import React from "react";
import { Switch, Route } from "react-router-dom";
import Trailer from "./components/movieCard/Trailer";
import App from "./App";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/trailer/:id" render={() => <Trailer />} />
    </Switch>
  );
};

export default Routes;
