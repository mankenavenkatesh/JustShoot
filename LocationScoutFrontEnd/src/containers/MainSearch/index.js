import { Route } from "react-router-dom";

import React, { Component } from "react";
import { history } from "../../store";
import { connect } from "react-redux";

class MainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      locationCategoryId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    debugger;
    e.preventDefault();
    console.log(this.state.city);
    console.log(this.state.locationCategoryId);
    history.push("/" + this.state.city + this.state.locationCategoryId);
  }

  render() {
    var categories = this.props.locationCategories.map(function(
      locationCategory
    ) {
      return (
        <option key={locationCategory.id} value={locationCategory.id}>
          {locationCategory.title}
        </option>
      );
    });

    return (
      <div
        class="main-search-container"
        data-background-image="images/main-search-background-01.jpg"
      >
        <div class="main-search-inner">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2>Just Shoot</h2>
                <h4>Explore Shooting Locations, Costumes, Equipments </h4>
                <div class="main-search-input">
                  <div class="main-search-input-item">
                    <select
                      data-placeholder="Select City"
                      name="city"
                      onChange={this.onChange}
                    >
                      <option label="Select City">Select City</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mysore">Mysore</option>
                      <option value="Vizag">Vizag</option>
                    </select>
                  </div>

                  <div class="main-search-input-item">
                    {/* <input type="text" placeholder="What are you looking for?" value="" /> */}
                    <select data-placeholder="Listings" class="chosen-select">
                      <option>Select Listings</option>
                      <option>Shooting Locations</option>
                      <option>Costumes</option>
                      <option>Equipments</option>
                    </select>
                  </div>

                  <div class="main-search-input-item">
                    <select name="locationCategoryId" onChange={this.onChange}>
                      <option>Select Category</option>
                      {categories}
                    </select>
                  </div>
                  {/* <div className="form-group">
                                <input
                                    type="submit"
                                    class="button border fw margin-top-10"
                                    name="addlocation"
                                    value="Search"
                                />
                                </div> */}

                  {/* <a href="listings-grid-with-sidebar-1.html">Search</a> */}
                  {/* <button class="button" onclick={this.onSubmit}>Search</button> */}
                  <a
                    class="button"
                    href={
                      "listings/locations/?categoryId=" +
                      this.state.locationCategoryId +
                      "&city=" +
                      this.state.city
                    }
                  >
                    Search
                  </a>
                  {/* <a href="listings-grid-with-sidebar-1.html" class="button border margin-top-10">Search</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default MainSearch;

const mapStateToProps = state => {
  return {
    locationCategories: state.locationCategories
  };
};

export default connect(
  mapStateToProps,
  null
)(MainSearch);
