import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home";
import ListingsGrid from "../ListingsGrid";
import ShootingLocationPage from "../ShootingLocationPage";
import Dashboard from "../Dashboard";
import Contests from "../Contests";
import ShortFilms from "../ShortFilms";
import ShortFilmContestRegister from "../ShortFilmContestRegister";
import ShortFilmVerification from "../ShortFilmVerification";
import RequireAuth from "../Authentication";
import MainSearch from "../MainSearch";
import RequirementPosts from "../RequirmentPosts";

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
          <Route exact path="/contests/shortfilms/mgit" component={Contests} />
          <Route
            exact
            path="/contests/shortfilms/mgit/videos"
            component={ShortFilms}
          />
          <Route
            exact
            path="/contests/shortfilms/mgit/register"
            component={ShortFilmContestRegister}
          />
          <Route
            exact
            path="/contests/shortfilms/mgit/verify"
            component={ShortFilmVerification}
          />
          <Route exact path="/requirements" component={RequirementPosts} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </main>
    );
  }
}

export default Main;
