import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import SignInDialog from "../SignInDialog";
import { logout } from "../../actions/sessionActions";
import { connect } from "react-redux";
import { fetchLocationCategories } from "./../../actions/shootingLocationCategoryActions";
import { fetchLocationAmenities } from "./../../actions/shootingLocationAmenitiesActions";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  componentWillMount() {
    this.props.fetchLocationCategories();
    this.props.fetchLocationAmenities();
  }

  render() {
    console.log("sdf" + this.props.pathname);
    const userLinks = (
      <div class="header-widget">
        <div class="user-menu">
          <div class="user-name">
            <span>
              <img src="images/dashboard-avatar.jpg" alt="" />
            </span>
            My Account
          </div>
          <ul id="responsive">
            <li>
              <Link to="/dashboard">
                <i class="sl sl-icon-settings" /> My Dashboard
              </Link>
            </li>
            {/* <li><a href="dashboard.html"><i class="sl sl-icon-settings"></i> Dashboard</a></li>
            <li><a href="dashboard-messages.html"><i class="sl sl-icon-envelope-open"></i> Messages</a></li>
            <li><a href="dashboard-bookings.html"><i class="fa fa-calendar-check-o"></i> Bookings</a></li>             */}
            <li>
              <Link to="/" onClick={this.logout.bind(this)}>
                <i class="sl sl-icon-power" /> Logout
              </Link>
            </li>
          </ul>
        </div>
        <a href="/dashboard/addLocation" class="button border with-icon">
          Add Listing <i class="sl sl-icon-plus" />
        </a>
      </div>
    );

    const guestLinks = (
      <div class="header-widget">
        <a href="#sign-in-dialog" class="sign-in popup-with-zoom-anim">
          <i class="sl sl-icon-login" /> SignIn/SignUp
        </a>
        <a href="/dashboard/addLocation" class="button border with-icon">
          Add Listing <i class="sl sl-icon-plus" />
        </a>
      </div>
    );

    const locationCategories = this.props.locationCategories.map(function(
      locationCategory
    ) {
      return (
        <li key={locationCategory.id}>
          {/* <a href="/listings/locations/?filter=all" + {locationCategory.id} >{locationCategory.title}</a> */}

          <Link to={`/listings/locations/?categoryId=${locationCategory.id}`}>
            {locationCategory.title}
          </Link>
        </li>
      );
    });

    return (
      <header
        id="header-container"
        className={
          this.props.pathname.includes("dashboard")
            ? "fixed fullwidth dashboard"
            : ""
        }
      >
        <div
          id="header"
          className={
            this.props.pathname.includes("dashboard") ? "not-sticky" : ""
          }
        >
          <div class="container">
            <div class="left-side">
              <div id="logo">
                <a href="/">
                  <img src="/images/logo.png" alt="" />
                </a>
              </div>
              <div class="mmenu-trigger">
                <button class="hamburger hamburger--collapse" type="button">
                  <span class="hamburger-box">
                    <span class="hamburger-inner" />
                  </span>
                </button>
              </div>

              <nav id="navigation" class="style-1">
                <ul id="responsive">
                  <li>
                    <a class="current" href="/">
                      Home
                    </a>
                    {/* <ul>
                                        <li><a href="index.html">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                        <li><a href="index-3.html">Home 3</a></li>
                                        <li><a href="index-4.html">Home 4</a></li>
                                    </ul> */}
                  </li>
                  <li>
                    <a href="/listings">Listings</a>
                    <ul>
                      <li>
                        <a href="/listings/locations">Locations</a>
                        <ul>
                          <li key={0}>
                            <Link to={`/listings/locations/?categoryId=0`}>
                              All
                            </Link>
                          </li>
                          {locationCategories}
                        </ul>
                      </li>
                      {/* <li>
                        <a href="/listings/costumes">Costumes</a>
                        <ul>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">All</a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Ethnic
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Western
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Winter
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/listings/equipment">Equipment</a>
                        <ul>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">All</a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Electronics
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Automobile
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Furniture
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/listings/crew">Crew</a>
                        <ul>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">All</a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Artists
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Cameramen
                            </a>
                          </li>
                          <li>
                            <a href="listings-grid-with-sidebar-1.html">
                              Script Writers
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </li>
                  {/* <li>
                    <a href="#">User Panel</a>
                    <ul>
                      <li>
                        <Link to="/dashboard">My Dashboard</Link>
                      </li>
                      <li>
                        <a href="/dashboard/myLocations">My Listings</a>
                      </li>
                      <li>
                        <a href="/dashboard/addLocation">Add Listing</a>
                      </li>
                      <li>
                        <a href="/dashboard/myProfile">My Profile</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a href="/contests">Contests</a>
                    <ul>
                      <li>
                        <a href="/contests/shortfilms">Short films</a>
                        <ul>
                          <li key={0}>
                            <Link to={`/contests/shortfilms/mgit`}>
                              MGIT-Nirvana 2019
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/requirements">Job Requirements</a>
                  </li>
                </ul>
              </nav>
              <div class="clearfix" />
            </div>
            <div class="right-side">
              {this.props.authenticated ? userLinks : guestLinks}
            </div>

            <SignInDialog />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    locationCategories: state.locationCategories
  };
};

export default connect(
  mapStateToProps,
  { logout, fetchLocationCategories, fetchLocationAmenities }
)(Header);
