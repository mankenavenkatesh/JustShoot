import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import MyLocationsList from "../MyLocationsList";
// import { fetchMyLocations } from "./../../actions/shootingLocationActions";

class MyCrafts extends Component {
  render() {
    console.log("In My Crafts");
    console.log(this.props.myLocations);
    return (
      <div class="dashboard-content">
        <div id="titlebar">
          <div class="row">
            <div class="col-md-12">
              <h2>My Crafts</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>My Crafts</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="dashboard-list-box margin-top-0">
              <h4>My Locations</h4>
              <ul>
                <MyLocationsList
                  locationOwnerId={this.props.loggedInId}
                  myLocations={this.props.myLocations}
                />
              </ul>
            </div>
          </div>
          <div class="col-md-12">
            <div class="copyrights">
              © 2019 JustShootNow. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myLocations: state.myLocations
  };
}

export default connect(
  mapStateToProps,
  null
)(MyCrafts);
