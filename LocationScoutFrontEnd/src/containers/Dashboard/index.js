import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginHeader from "../LoginHeader";
import DashboardContent from "../DashboardContent";
import DashboardNavigation from "../DashboardNavigation";
import AddLocation from "../AddLocation";
import EditLocation from "../EditLocation";
import MyLocations from "../MyLocations";
import MyProfile from "../MyProfile";
import { fetchMyLocations } from "./../../actions/shootingLocationActions";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMyLocations();
  }

  render() {
    return (
      <div>
        <div id="dashboarddiv">
          <DashboardNavigation />
          <Switch>
            <Route exact path="/dashboard/" component={DashboardContent} />
            <Route
              exact
              path="/dashboard/addLocation"
              component={AddLocation}
            />
            <Route
              exact
              path="/dashboard/editLocation/:locationId"
              component={EditLocation}
            />
            <Route
              exact
              path="/dashboard/myLocations"
              component={MyLocations}
            />
            <Route exact path="/dashboard/myProfile" component={MyProfile} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchMyLocations }
)(Dashboard);
