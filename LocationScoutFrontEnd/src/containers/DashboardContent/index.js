import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardContent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div class="dashboard-content">
        <div id="titlebar">
          <div class="row">
            <div class="col-md-12">
              <h2>Welcome, {this.props.myProfile.name}</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Dashboard</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="dashboard-stat color-1">
              <div class="dashboard-stat-content">
                <h4>6</h4> <span>Profile</span>
              </div>
              <div class="dashboard-stat-icon">
                <i class="im im-icon-Map2" />
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="dashboard-stat color-2">
              <div class="dashboard-stat-content">
                <h4>726</h4> <span>My Locations</span>
              </div>
              <div class="dashboard-stat-icon">
                <i class="im im-icon-Line-Chart" />
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="dashboard-stat color-3">
              <div class="dashboard-stat-content">
                <h4>95</h4> <span>My Crafts</span>
              </div>
              <div class="dashboard-stat-icon">
                <i class="im im-icon-Add-UserStar" />
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="dashboard-stat color-4">
              <div class="dashboard-stat-content">
                <h4>126</h4> <span>Times Bookmarked</span>
              </div>
              <div class="dashboard-stat-icon">
                <i class="im im-icon-Heart" />
              </div>
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

const mapStateToProps = state => {
  return {
    myProfile: state.myProfile
  };
};

export default connect(
  mapStateToProps,
  null
)(DashboardContent);
