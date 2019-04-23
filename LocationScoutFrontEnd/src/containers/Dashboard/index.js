import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import DashboardContent from "../DashboardContent";
import DashboardNavigation from "../DashboardNavigation";
import AddLocation from "../AddLocation";
import AddCraft from "../AddCraft";
import EditLocation from "../EditLocation";
import MyLocations from "../MyLocations";
import MyCrafts from "../MyCrafts";
import MyProfile from "../MyProfile";
import { fetchMyLocations } from "./../../actions/shootingLocationActions";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMyLocations();
  }

  render() {
    return (
      <div id="dashboard">
        <a href="/dashboard" class="dashboard-responsive-nav-trigger active">
          <i class="fa fa-reorder" /> Dashboard Navigation
        </a>
        <DashboardNavigation />
        <Switch>
          <Route exact path="/dashboard/" component={DashboardContent} />
          <Route exact path="/dashboard/addLocation" component={AddLocation} />
          <Route exact path="/dashboard/addCraft" component={AddCraft} />
          <Route
            exact
            path="/dashboard/editLocation/:locationId"
            component={EditLocation}
          />
          <Route exact path="/dashboard/myLocations" component={MyLocations} />
          <Route exact path="/dashboard/myCrafts" component={MyCrafts} />
          <Route exact path="/dashboard/myProfile" component={MyProfile} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchMyLocations }
)(Dashboard);
