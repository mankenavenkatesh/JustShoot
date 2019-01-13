import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import validateInput from "../../validations/location";
import { history } from "../../store";
import { connect } from "react-redux";
import { saveLocation } from "./../../actions/shootingLocationActions";

class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      locationCategoryId: "",
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    debugger;
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.saveLocation({
        locationName: this.state.locationName,
        locationCategory: {
          id: this.state.locationCategoryId
        }
      });
      history.push("/");

      // this.props.saveLocation({ locationName }).then(
      //   data => {
      //     console.log("Location Added Successful");
      //     console.log(data.id);
      //     console.log(data.locationName);
      //     history.push("/myLocations");
      //   },
      //   ({ data }) => {
      //     this.setState({ errors: data });
      //   }
      // );
    }
  }

  render() {
    const { errors } = this.state;

    var locationCategories = this.props.locationCategories.map(function(
      locationCategory
    ) {
      return (
        <option key={locationCategory.id} value={locationCategory.id}>
          {locationCategory.title}
        </option>
      );
    });

    return (
      <div class="dashboard-content">
        <div id="titlebar">
          <div class="row">
            <div class="col-md-12">
              <h2>Add Location</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>Add Location</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <form onSubmit={this.onSubmit} class="register">
          <div class="row">
            <div class="col-lg-12">
              <div id="add-listing">
                <div class="add-listing-section">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-doc" /> Basic Informations
                    </h3>
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-12">
                      <h5>
                        Listing Title{" "}
                        <i
                          class="tip"
                          data-tip-content="Name of your business"
                        />
                      </h5>
                      <input
                        type="text"
                        class="search-field input-text"
                        name="locationName"
                        id="locationName"
                        value={this.props.locationName}
                        onChange={this.onChange}
                      />
                      {errors.locationName && (
                        <span style={{ color: "red" }} className="help-block">
                          {errors.locationName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-6">
                      <h5>Category</h5>
                      <select
                        name="locationCategoryId"
                        onChange={this.onChange}
                        class="chosen-select-no-single"
                      >
                        <option>Select Category</option>
                        {locationCategories}
                      </select>
                    </div>
                    <div class="col-md-6">
                      <h5>
                        Keywords{" "}
                        <i
                          class="tip"
                          data-tip-content="Maximum of 15 keywords related with your business"
                        />
                      </h5>
                      <input
                        type="text"
                        placeholder="Keywords should be separated by commas"
                      />
                    </div>
                  </div>
                </div>
                <div class="add-listing-section margin-top-45">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-location" /> Location
                    </h3>
                  </div>

                  <div class="submit-section">
                    <div class="row with-forms">
                      <div class="col-md-6">
                        <h5>City</h5>
                        <select class="chosen-select-no-single">
                          <option label="blank">Select City</option>
                          <option>New York</option>
                          <option>Los Angeles</option>
                          <option>Chicago</option>
                          <option>Houston</option>
                          <option>Phoenix</option>
                          <option>San Diego</option>
                          <option>Austin</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <h5>Address</h5>
                        <input
                          type="text"
                          placeholder="e.g. 964 School Street"
                        />
                      </div>
                      <div class="col-md-6">
                        <h5>State</h5>
                        <input type="text" />
                      </div>
                      <div class="col-md-6">
                        <h5>Zip-Code</h5>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="add-listing-section margin-top-45">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-picture" /> Gallery
                    </h3>
                  </div>
                  <div class="submit-section">
                    <form
                      action="http://www.vasterad.com/file-upload"
                      class="dropzone"
                    />
                  </div>
                </div>
                <div class="add-listing-section margin-top-45">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-docs" /> Details
                    </h3>
                  </div>
                  <div class="form">
                    <h5>Description</h5>
                    <textarea
                      class="WYSIWYG"
                      name="summary"
                      cols="40"
                      rows="3"
                      id="summary"
                      spellcheck="true"
                    />
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-4">
                      <h5>
                        Phone <span>(optional)</span>
                      </h5>
                      <input type="text" />
                    </div>
                    <div class="col-md-4">
                      <h5>
                        Website <span>(optional)</span>
                      </h5>
                      <input type="text" />
                    </div>
                    <div class="col-md-4">
                      <h5>
                        E-mail <span>(optional)</span>
                      </h5>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-4">
                      <h5 class="fb-input">
                        <i class="fa fa-facebook-square" /> Facebook{" "}
                        <span>(optional)</span>
                      </h5>
                      <input
                        type="text"
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                    <div class="col-md-4">
                      <h5 class="twitter-input">
                        <i class="fa fa-twitter" /> Twitter{" "}
                        <span>(optional)</span>
                      </h5>
                      <input
                        type="text"
                        placeholder="https://www.twitter.com/"
                      />
                    </div>
                    <div class="col-md-4">
                      <h5 class="gplus-input">
                        <i class="fa fa-google-plus" /> Google Plus{" "}
                        <span>(optional)</span>
                      </h5>
                      <input
                        type="text"
                        placeholder="https://plus.google.com/"
                      />
                    </div>
                  </div>
                  <h5 class="margin-top-30 margin-bottom-10">
                    Amenities <span>(optional)</span>
                  </h5>
                  <div class="checkboxes in-row margin-bottom-20">
                    <input id="check-a" type="checkbox" name="check" />
                    <label for="check-a">Elevator in building</label>

                    <input id="check-b" type="checkbox" name="check" />
                    <label for="check-b">Friendly workspace</label>

                    <input id="check-c" type="checkbox" name="check" />
                    <label for="check-c">Instant Book</label>

                    <input id="check-d" type="checkbox" name="check" />
                    <label for="check-d">Wireless Internet</label>

                    <input id="check-e" type="checkbox" name="check" />
                    <label for="check-e">Free parking on premises</label>

                    <input id="check-f" type="checkbox" name="check" />
                    <label for="check-f">Free parking on street</label>

                    <input id="check-g" type="checkbox" name="check" />
                    <label for="check-g">Smoking allowed</label>

                    <input id="check-h" type="checkbox" name="check" />
                    <label for="check-h">Events</label>
                  </div>
                </div>
                <div class="add-listing-section margin-top-45">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-clock" /> Opening Hours
                    </h3>
                    <label class="switch">
                      <input type="checkbox" checked />
                      <span class="slider round" />
                    </label>
                  </div>
                  <div class="switcher-content">
                    <div class="row opening-day">
                      <div class="col-md-2">
                        <h5>Monday</h5>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Opening Time"
                        >
                          <option label="Opening Time" />
                          <option>Closed</option>
                          <option>1 AM</option>
                          <option>2 AM</option>
                          <option>3 AM</option>
                          <option>4 AM</option>
                          <option>5 AM</option>
                          <option>6 AM</option>
                          <option>7 AM</option>
                          <option>8 AM</option>
                          <option>9 AM</option>
                          <option>10 AM</option>
                          <option>11 AM</option>
                          <option>12 AM</option>
                          <option>1 PM</option>
                          <option>2 PM</option>
                          <option>3 PM</option>
                          <option>4 PM</option>
                          <option>5 PM</option>
                          <option>6 PM</option>
                          <option>7 PM</option>
                          <option>8 PM</option>
                          <option>9 PM</option>
                          <option>10 PM</option>
                          <option>11 PM</option>
                          <option>12 PM</option>
                        </select>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Closing Time"
                        >
                          <option label="Closing Time" />
                          <option>Closed</option>
                          <option>1 AM</option>
                          <option>2 AM</option>
                          <option>3 AM</option>
                          <option>4 AM</option>
                          <option>5 AM</option>
                          <option>6 AM</option>
                          <option>7 AM</option>
                          <option>8 AM</option>
                          <option>9 AM</option>
                          <option>10 AM</option>
                          <option>11 AM</option>
                          <option>12 AM</option>
                          <option>1 PM</option>
                          <option>2 PM</option>
                          <option>3 PM</option>
                          <option>4 PM</option>
                          <option>5 PM</option>
                          <option>6 PM</option>
                          <option>7 PM</option>
                          <option>8 PM</option>
                          <option>9 PM</option>
                          <option>10 PM</option>
                          <option>11 PM</option>
                          <option>12 PM</option>
                        </select>
                      </div>
                    </div>
                    <div class="row opening-day js-demo-hours">
                      <div class="col-md-2">
                        <h5>Tuesday</h5>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Opening Time"
                        />
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Closing Time"
                        />
                      </div>
                    </div>
                    <div class="row opening-day js-demo-hours">
                      <div class="col-md-2">
                        <h5>Wednesday</h5>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Opening Time"
                        />
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Closing Time"
                        />
                      </div>
                    </div>
                    <div class="row opening-day js-demo-hours">
                      <div class="col-md-2">
                        <h5>Thursday</h5>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Opening Time"
                        />
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Closing Time"
                        />
                      </div>
                    </div>
                    <div class="row opening-day js-demo-hours">
                      <div class="col-md-2">
                        <h5>Friday</h5>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Opening Time"
                        >
                          >
                        </select>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Closing Time"
                        />
                      </div>
                    </div>
                    <div class="row opening-day js-demo-hours">
                      <div class="col-md-2">
                        <h5>Saturday</h5>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Opening Time"
                        />
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Closing Time"
                        />
                      </div>
                    </div>
                    <div class="row opening-day js-demo-hours">
                      <div class="col-md-2">
                        <h5>Sunday</h5>
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Opening Time"
                        />
                      </div>
                      <div class="col-md-5">
                        <select
                          class="chosen-select"
                          data-placeholder="Closing Time"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="add-listing-section margin-top-45">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-book-open" /> Pricing
                    </h3>
                    <label class="switch">
                      <input type="checkbox" checked />
                      <span class="slider round" />
                    </label>
                  </div>
                  <div class="switcher-content">
                    <div class="row">
                      <div class="col-md-12">
                        <table id="pricing-list-container">
                          <tr class="pricing-list-item pattern">
                            <td>
                              <div class="fm-move">
                                <i class="sl sl-icon-cursor-move" />
                              </div>
                              <div class="fm-input pricing-name">
                                <input type="text" placeholder="Title" />
                              </div>
                              <div class="fm-input pricing-ingredients">
                                <input type="text" placeholder="Description" />
                              </div>
                              <div class="fm-input pricing-price">
                                <input
                                  type="text"
                                  placeholder="Price"
                                  data-unit="USD"
                                />
                              </div>
                              <div class="fm-close">
                                <a class="delete" href="#">
                                  <i class="fa fa-remove" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <a href="#" class="button add-pricing-list-item">
                          Add Item
                        </a>
                        <a href="#" class="button add-pricing-submenu">
                          Add Category
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a href="#" class="button preview">Preview <i class="fa fa-arrow-circle-right"></i></a> */}
                <div className="form-group">
                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="addlocation"
                    value="Save"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="copyrights">© 2017 Listeo. All Rights Reserved.</div>
            </div>
          </div>
        </form>
      </div>
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
  { saveLocation }
)(AddLocation);
