import React, { Component } from "react";
import { connect } from "react-redux";
import RequirementsList from "../RequirementsList";
import { saveRequirement } from "./../../actions/requirementActions";
import { fetchAllRequirements } from "./../../actions/requirementActions";
import { fetchAllRequirementsByType } from "./../../actions/requirementActions";

/*
    This is nothing but a todo list. should be able to create quickly.

**/

class RequirementPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requirementDesc: "",
      requirementType: "",
      shortFilmName: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.filterByRequirementType = this.filterByRequirementType.bind(this);
  }

  fetchAllRequirements() {
    this.props.fetchAllRequirements();
  }

  fetchAllByRequirementType(requirementType) {
    this.props.fetchAllRequirementsByType(requirementType);
  }

  componentDidMount() {
    this.fetchAllRequirements();
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  filterByRequirementType(event) {
    const requirementType = event.target.value;
    console.log("requirement type-" + requirementType);
    this.fetchAllByRequirementType(requirementType);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.saveRequirement({
      requirementDesc: this.state.requirementDesc,
      requirementType: this.state.requirementType,
      shortFilmName: this.state.shortFilmName
    });

    this.state.requirementDesc = "";
    this.state.shortFilmName = "";
    this.state.requirementType = "";
  }

  render() {
    let styles = {
      height: "650px",

      border: "solid 2px",
      overflow: "scroll"
    };

    return (
      <div>
        <div class="col-lg-5 col-md-5 padding-left-50">
          <div id="add-review" class="add-review-box">
            <h3 class="listing-desc-headline margin-bottom-50 margin-left-100">
              Post Requirement
            </h3>
            <form id="add-comment" class="add-comment" onSubmit={this.onSubmit}>
              <fieldset>
                <div class="row">
                  <div class="col-md-6">
                    <label>Shortfilm Name:</label>
                    <input
                      type="text"
                      value={this.state.shortFilmName}
                      onChange={this.onChange}
                      name="shortFilmName"
                    />
                  </div>

                  <div class="col-md-6">
                    <label>Requirement Type:</label>
                    {/* <input type="text" value = {this.state.requirementType} onChange={this.onChange} name="requirementType" /> */}
                    <select name="requirementType" onChange={this.onChange}>
                      <option label="Select Type">Select Type</option>
                      <option value="Actor">Actor</option>
                      <option value="Actress">Actress</option>
                      <option value="Music Director">Music Director</option>
                      <option value="Producer">Producer</option>
                      <option value="Cameraman">Cameraman</option>
                      <option value="Singer">Singer</option>
                      <option value="Director">Director</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label>Requirement Description</label>
                  <textarea
                    cols="40"
                    rows="3"
                    type="text"
                    value={this.state.requirementDesc}
                    onChange={this.onChange}
                    name="requirementDesc"
                  />
                </div>
              </fieldset>

              <button class="button">Submit</button>
              <div class="clearfix" />
            </form>
          </div>

          {/* <h1>Post Your Requirements Here</h1>

                <form onSubmit={this.onSubmit}>
                    Requirement Desc - <input type="text" value = {this.state.requirementDesc} onChange={this.onChange} name="requirementDesc" />
                    Requirement Type - <input type="text" value = {this.state.requirementType} onChange={this.onChange} name="requirementType" />
                    Short Film Name - <input type="text" value = {this.state.shortFilmName} onChange={this.onChange} name="shortFilmName" />
                    <button>Submit</button>
                </form>

                <h4>Requirements List</h4>
                <ul>
                    <RequirementsList requirements={this.props.requirements} />
                </ul> */}
        </div>

        <div class="col-lg-6 col-md-12">
          <div
            class="dashboard-list-box margin-top-70 margin-left-40"
            style={styles}
          >
            <div class="sort-by">
              <div class="sort-by-select">
                <select
                  name="requirementFilter"
                  onChange={this.filterByRequirementType}
                >
                  <option label="Filter By">Filter By</option>
                  <option value="All">All</option>
                  <option value="Actor">Actor</option>
                  <option value="Actress">Actress</option>
                  <option value="Music Director">Music Director</option>
                  <option value="Producer">Producer</option>
                  <option value="Cameraman">Cameraman</option>
                  <option value="Singer">Singer</option>
                  <option value="Director">Director</option>
                </select>
              </div>
            </div>

            <h4>Requirements</h4>
            <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
              <div class="small-dialog-header">
                <h3>Reply to Requirement</h3>
              </div>
              <div class="message-reply margin-top-0">
                <textarea cols="40" rows="3" />
                <button class="button">Reply</button>
              </div>
            </div>

            <ul>
              <RequirementsList requirements={this.props.requirements} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    requirements: state.requirements
  };
}

export default connect(
  mapStateToProps,
  { saveRequirement, fetchAllRequirements, fetchAllRequirementsByType }
)(RequirementPosts);
