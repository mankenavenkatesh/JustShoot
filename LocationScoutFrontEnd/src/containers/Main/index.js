import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home";
import ListingsGrid from "../ListingsGrid";
import ShootingLocationPage from "../ShootingLocationPage";
import Dashboard from "../Dashboard";
import RequireAuth from "../Authentication";
import MainSearch from "../MainSearch";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={MainSearch} />
          <Route exact path="/listings/:listingname" component={ListingsGrid} />
          <Route
            path="/listings/locations/:locationId"
            component={ShootingLocationPage}
          />
          <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </main>
    );
  }
}

export default Main;
