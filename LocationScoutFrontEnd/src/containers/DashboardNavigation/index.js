import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

class DashboardNavigation extends Component {
  render() {
    return (
      <div>
        <a href="#" class="dashboard-responsive-nav-trigger">
          <i class="fa fa-reorder" /> Dashboard Navigation
        </a>
        <div class="dashboard-nav">
          <div class="dashboard-nav-inner">
            <ul data-submenu-title="Main">
              <li class="active">
                <a href="/dashboard">
                  <i class="sl sl-icon-settings" /> My Dashboard
                </a>
              </li>
              {/* <li><a href="dashboard-messages.html"><i class="sl sl-icon-envelope-open"></i> Messages <span class="nav-tag messages">2</span></a></li>
				<li><a href="dashboard-bookings.html"><i class="fa fa-calendar-check-o"></i> Bookings</a></li> */}
            </ul>

            <ul data-submenu-title="Listings">
              <li class="active">
                <a>
                  <i class="sl sl-icon-layers" /> My Listings
                </a>
                <ul>
                  <li>
                    <Link to="/dashboard/myLocations">
                      My Locations <span class="nav-tag green">6</span>
                    </Link>
                  </li>
                  <li>
                    <a href="/dashboard/myLocations">
                      My Costumes <span class="nav-tag yellow">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard/myLocations">
                      My Equipment <span class="nav-tag red">2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="active">
                <a>
                  <i class="sl sl-icon-plus" /> Add Listings
                </a>
                <ul>
                  <li>
                    <Link to="/dashboard/addLocation">Add Locations</Link>
                  </li>
                  <li>
                    <a href="/dashboard/addLocation">Add Costumes </a>
                  </li>
                  <li>
                    <a href="/dashboard/addLocation">Add Equipment </a>
                  </li>
                </ul>
              </li>
              {/* <li><a href="dashboard-reviews.html"><i class="sl sl-icon-star"></i> Reviews</a></li>
				<li><a href="dashboard-bookmarks.html"><i class="sl sl-icon-heart"></i> Bookmarks</a></li> */}
            </ul>

            <ul data-submenu-title="Account">
              <li>
                <a href="dashboard-my-profile.html">
                  <i class="sl sl-icon-user" /> My Profile
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="sl sl-icon-power" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardNavigation;
