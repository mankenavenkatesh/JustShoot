import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import validateInput from "../../validations/location";
import { history } from "../../store";
import { connect } from "react-redux";
import { updateLocation } from "../../actions/shootingLocationActions";

class EditLocation extends Component {
  constructor(props) {
    super(props);
    console.log("Inside Constructor");
    console.log(this.props.editlocation);
    this.state = {
      locationName: this.props.editlocation.locationName,
      locationId: this.props.editlocation.id,
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  // 	const locationId = this.props.locationId;
  // 	console.log("Location Editing");
  // 	console.log(locationId);
  // 	console.log(this.props.editlocation);
  // 	if(locationId){
  // 		this.props.fetchLocation(locationId);
  // 	}
  // }

  // componentWillReceiveProps(nextProps) {
  // 	console.log("Inside componentWillReceiveProps");
  // 	console.log(nextProps);
  // 	this.setState({
  // 		location : nextProps.editlocation
  // 	})
  // }

  onChange(e) {
    // debugger;
    this.setState({ [e.target.id]: e.target.value });
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
      // debugger;
      this.props.updateLocation(
        { locationName: this.state.locationName },
        this.state.locationId
      );
      history.push("/dashboard/myLocations");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div class="dashboard-content">
        <div id="titlebar">
          <div class="row">
            <div class="col-md-12">
              <h2>Edit Location</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>Edit Location</li>
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
                        value={this.state.locationName}
                        onChange={this.onChange}
                      />
                      {errors.locationName && (
                        <span style={{ color: "red" }} className="help-block">
                          {errors.locationName}
                        </span>
                      )}
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

function mapStateToProps(state, props) {
  if (props.match.params.locationId) {
    // debugger;
    return {
      // locationId : props.match.params.locationId,
      editlocation: state.myLocations.find(function checkLocation(location) {
        if (location.id + "" === props.match.params.locationId) {
          return location;
        }
      })
    };
  } else {
    return {
      editlocation: null
    };
  }
}

export default connect(
  mapStateToProps,
  { updateLocation }
)(EditLocation);
