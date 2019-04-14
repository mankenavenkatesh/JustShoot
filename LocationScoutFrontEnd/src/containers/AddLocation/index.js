import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import validateInput from "../../validations/location";
import { history } from "../../store";
import { connect } from "react-redux";
import { saveLocation } from "./../../actions/shootingLocationActions";
import ImageUploader from "react-images-upload";

class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      locationCategoryId: "",
      locationType: "",
      photos: [],
      amenities: [],
      city: "",
      state: "",
      addressdesc: "",
      zipCode: "",
      description: "",
      phoneNumber: "",
      website: "",
      email: "",
      price: "",
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onAmenitiesChange = this.onAmenitiesChange.bind(this);
  }

  onChange(e) {
    debugger;
    this.setState({ [e.target.name]: e.target.value });
  }

  onDrop(pictureFiles, pictureDataURLs) {
    debugger;
    this.setState({
      photos: pictureFiles
    });
  }

  onAmenitiesChange(e) {
    var index = this.state.amenities.indexOf(parseInt(e.target.value, 10));
    if (index > -1) {
      debugger;
      var temp = this.state.amenities;
      temp.splice(index, 1);
      this.setState({ [e.target.name]: temp });
    } else {
      debugger;
      this.setState({
        [e.target.name]: [...this.state.amenities, parseInt(e.target.value, 10)]
      });
    }
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
        locationCategoryId: this.state.locationCategoryId,
        photos: this.state.photos,
        amenities: this.state.amenities,
        city: this.state.city,
        state: this.state.state,
        addressdesc: this.state.addressdesc,
        zipCode: this.state.zipCode,
        description: this.state.description,
        phoneNumber: this.state.phoneNumber,
        website: this.state.website,
        email: this.state.email,
        locationType: this.state.locationType,
        price: this.state.price
      });
      history.push("/");
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

    var locationAmenities = this.props.locationAmenities.map(function(
      locationAmenity
    ) {
      return (
        <div key={locationAmenity.id} value={locationAmenity.id}>
          <input
            id={locationAmenity.id}
            type="checkbox"
            name="amenities"
            value={locationAmenity.id}
            onChange={this.onAmenitiesChange}
          />
          <label for={locationAmenity.id}>{locationAmenity.amenityName}</label>
        </div>
      );
    },
    this);

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
                      <h5>Location Type</h5>
                      <select
                        name="locationType"
                        onChange={this.onChange}
                        class="chosen-select-no-single"
                      >
                        <option>Select Location Type</option>
                        <option value="Public"> Public </option>
                        <option value="Private"> Private </option>
                      </select>
                    </div>
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-12">
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
                        <select
                          name="city"
                          class="chosen-select-no-single"
                          onChange={this.onChange}
                        >
                          <option label="Select City">Select City</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Lonavala">Lonavala</option>
                          <option value="Panchgani">Panchgani</option>
                          <option value="Mahabaleshwar">Mahabaleshwar</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Surat">Surat</option>
                          <option value="Pune">Pune</option>
                          <option value="Jaipur">Jaipur</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Kanpur">Kanpur</option>
                          <option value="Nagpur">Nagpur</option>
                          <option value="Visakhapatnam">Visakhapatnam</option>
                          <option value="Indore">Indore</option>
                          <option value="Thane">Thane</option>
                          <option value="Bhopal">Bhopal</option>
                          <option value="Patna">Patna</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Ghaziabad">Ghaziabad</option>
                          <option value="Ludhiana">Ludhiana</option>
                          <option value="Coimbatore">Coimbatore</option>
                          <option value="Agra">Agra</option>
                          <option value="Madurai">Madurai</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <h5>Address</h5>
                        <input
                          type="text"
                          name="addressdesc"
                          value={this.state.addressdesc}
                          onChange={this.onChange}
                          placeholder="e.g. H.No 2-5-529/4/1/b"
                        />
                      </div>
                      <div class="col-md-6">
                        <h5>State</h5>
                        <select
                          name="state"
                          class="chosen-select-no-single"
                          onChange={this.onChange}
                        >
                          <option label="Select State">Select State</option>
                          <option
                            selected={this.state.state === "Andhra Pradesh"}
                          >
                            Andhra Pradesh
                          </option>
                          <option
                            selected={this.state.state === "Arunachal Pradesh"}
                          >
                            Arunachal Pradesh
                          </option>
                          <option selected={this.state.state === "Assam"}>
                            Assam
                          </option>
                          <option selected={this.state.state === "Bihar"}>
                            Bihar
                          </option>
                          <option
                            selected={this.state.state === "Chhattisgarh"}
                          >
                            Chhattisgarh
                          </option>
                          <option selected={this.state.state === "Goa"}>
                            Goa
                          </option>
                          <option selected={this.state.state === "Gujarat"}>
                            Gujarat
                          </option>
                          <option selected={this.state.state === "Haryana"}>
                            Haryana
                          </option>
                          <option
                            selected={this.state.state === "Himachal Pradesh"}
                          >
                            Himachal Pradesh
                          </option>
                          <option
                            selected={this.state.state === "Jammu and Kashmir"}
                          >
                            Jammu and Kashmir
                          </option>
                          <option selected={this.state.state === "Jharkhand"}>
                            Jharkhand
                          </option>
                          <option selected={this.state.state === "Karnataka"}>
                            Karnataka
                          </option>
                          <option selected={this.state.state === "Kerala"}>
                            Kerala
                          </option>
                          <option
                            selected={this.state.state === "Madhya Pradesh"}
                          >
                            Madhya Pradesh
                          </option>
                          <option selected={this.state.state === "Maharashtra"}>
                            Maharashtra
                          </option>
                          <option selected={this.state.state === "Manipur"}>
                            Manipur
                          </option>
                          <option selected={this.state.state === "Meghalaya"}>
                            Meghalaya
                          </option>
                          <option selected={this.state.state === "Mizoram"}>
                            Mizoram
                          </option>
                          <option selected={this.state.state === "Nagaland"}>
                            Nagaland
                          </option>
                          <option selected={this.state.state === "Odisha"}>
                            Odisha
                          </option>
                          <option selected={this.state.state === "Punjab"}>
                            Punjab
                          </option>
                          <option selected={this.state.state === "Rajasthan"}>
                            Rajasthan
                          </option>
                          <option selected={this.state.state === "Sikkim"}>
                            Sikkim
                          </option>
                          <option selected={this.state.state === "Tamil Nadu"}>
                            Tamil Nadu
                          </option>
                          <option selected={this.state.state === "Telangana"}>
                            Telangana
                          </option>
                          <option selected={this.state.state === "Tripura"}>
                            Tripura
                          </option>
                          <option
                            selected={this.state.state === "Uttar Pradesh"}
                          >
                            Uttar Pradesh
                          </option>
                          <option selected={this.state.state === "Uttarakhand"}>
                            Uttarakhand
                          </option>
                          <option selected={this.state.state === "West Bengal"}>
                            West Bengal
                          </option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <h5>Zip-Code</h5>
                        <input
                          type="text"
                          name="zipCode"
                          value={this.state.zipCode}
                          onChange={this.onChange}
                          placeholder="e.g. 500103"
                        />
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
                    {/* <form
                      action="http://www.vasterad.com/file-upload"
                      class="dropzone"
                    /> */}
                    {/* 
                    <input
                      type="file"
                      name="photos"
                      class="dropzone"
                      onChange={this.onChange}
                      multiple="multiple"
                    /> */}
                    <ImageUploader
                      withIcon={true}
                      withPreview={true}
                      withLabel={true}
                      buttonText="Choose images"
                      onChange={this.onDrop}
                      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                      maxFileSize={5242880}
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
                      name="description"
                      cols="40"
                      rows="3"
                      id="description"
                      spellcheck="true"
                      onChange={this.onChange}
                      value={this.state.description}
                    />
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-4">
                      <h5>
                        Phone <span>(optional)</span>
                      </h5>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="col-md-4">
                      <h5>
                        Website <span>(optional)</span>
                      </h5>
                      <input
                        type="text"
                        name="website"
                        value={this.state.website}
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="col-md-4">
                      <h5>
                        E-mail <span>(optional)</span>
                      </h5>
                      <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <h5 class="margin-top-30 margin-bottom-10">
                    Amenities <span>(optional)</span>
                  </h5>
                  <div class="checkboxes in-row margin-bottom-20">
                    {locationAmenities}
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
                  <div>
                    <div class="row">
                      <div class="col-md-12">
                        <input
                          type="text"
                          placeholder=""
                          data-unit="INR"
                          name="price"
                          value={this.state.price}
                          onChange={this.onChange}
                        />
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
              <div class="copyrights">
                © 2019 JustShootNow. All Rights Reserved.
              </div>
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
    locationCategories: state.locationCategories,
    locationAmenities: state.locationAmenities
  };
};

export default connect(
  mapStateToProps,
  { saveLocation }
)(AddLocation);
