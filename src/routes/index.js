import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tentang" component={About} />
      </Switch>
    </Router>
  );
};

export default Routes;
