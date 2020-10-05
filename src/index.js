import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Footer from "./containers/Footer";
import Banner from "./containers/Banner";

import Activities from "./pages/Activities";
import Informations from "./pages/Informations";
import Meals from "./pages/Meals";
import NoMatch from "./pages/NoMatch";
import Team from "./pages/Team";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

const Root = () => (
  <>
    <Router>
      <Banner />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/activites" component={Activities} />
        <Route path="/informations" component={Informations} />
        <Route path="/repas" component={Meals} />
        <Route path="/equipe" component={Team} />
        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </Router>
  </>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
