import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import { history } from "../../store";
import { connect } from "react-redux";
import { registerContestUser } from "./../../actions/contestActions";
import ImageUploader from "react-images-upload";

class ShortFilmContestRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contestantName: "",
      collegeName: "",
      yearOfStudy: "",
      email: "",
      phoneNumber: "",
      branch: "",
      shortFilmTitle: "",
      youtubeUrl: "",
      shortFilmLanguage: "",
      genre: "",
      crewcast: "",
      paymentScreenshots: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onChange(e) {
    debugger;
    this.setState({ [e.target.name]: e.target.value });
  }

  onDrop(pictureFiles, pictureDataURLs) {
    debugger;
    this.setState({
      paymentScreenshots: pictureFiles
    });
  }

  isValid() {
    return this.state.paymentScreenshots != null;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.registerContestUser({
        contestantName: this.state.contestantName,
        collegeName: this.state.collegeName,
        yearOfStudy: this.state.yearOfStudy,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        branch: this.state.branch,
        shortFilmTitle: this.state.shortFilmTitle,
        youtubeUrl: this.state.youtubeUrl,
        shortFilmLanguage: this.state.shortFilmLanguage,
        genre: this.state.genre,
        crewcast: this.state.crewcast,
        paymentScreenshots: this.state.paymentScreenshots
      });
      history.push("/contests/shortfilms/mgit");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div class="dashboard-content">
        <div id="titlebar">
          <div class="row">
            <div class="col-md-12">
              <h2>ShortFilm Contest Registration</h2>
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
                      <i class="sl sl-icon-doc" /> Personal Details
                    </h3>
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-6">
                      <h5>
                        Contestant Name{" "}
                        <i
                          class="tip"
                          data-tip-content="Name of the Participant"
                        />
                      </h5>
                      <input
                        type="text"
                        class="search-field input-text"
                        name="contestantName"
                        id="contestantName"
                        value={this.props.contestantName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="col-md-6">
                      <h5>Email Address</h5>
                      <input
                        type="text"
                        class="search-field input-text"
                        name="email"
                        id="email"
                        value={this.props.email}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-6">
                      <h5>Mobile Number</h5>
                      <input
                        type="text"
                        class="search-field input-text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={this.props.phoneNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="col-md-6">
                      <h5>College Name</h5>
                      <input
                        type="text"
                        class="search-field input-text"
                        name="collegeName"
                        id="collegeName"
                        value={this.props.collegeName}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div class="row with-forms">
                    <div class="col-md-6">
                      <h5>Year Of Study</h5>
                      <input
                        type="text"
                        class="search-field input-text"
                        name="yearOfStudy"
                        id="yearOfStudy"
                        value={this.props.yearOfStudy}
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="col-md-6">
                      <h5>Branch</h5>
                      <input
                        type="text"
                        class="search-field input-text"
                        name="branch"
                        id="branch"
                        value={this.props.branch}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                <div class="add-listing-section margin-top-45">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-docs" /> Short Film Details
                    </h3>
                  </div>
                  <div class="form">
                    <div class="col-md-12">
                      <h5>ShortFilm Title</h5>
                      <input
                        type="text"
                        name="shortFilmTitle"
                        value={this.state.shortFilmTitle}
                        onChange={this.onChange}
                      />
                    </div>

                    <div class="col-md-12">
                      <h5>Youtube Url</h5>
                      <input
                        type="text"
                        name="youtubeUrl"
                        value={this.state.youtubeUrl}
                        onChange={this.onChange}
                      />
                    </div>
                    <div class="row with-forms">
                      <div class="col-md-6">
                        <h5>Language</h5>
                        <input
                          type="text"
                          name="shortFilmLanguage"
                          value={this.state.shortFilmLanguage}
                          onChange={this.onChange}
                        />
                      </div>
                      <div class="col-md-6">
                        <h5>Genre</h5>
                        <input
                          type="text"
                          name="genre"
                          value={this.state.genre}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>

                    <h5>Crew And Cast Details</h5>
                    <textarea
                      class="WYSIWYG"
                      name="crewcast"
                      cols="40"
                      rows="3"
                      id="crewcast"
                      spellcheck="true"
                      onChange={this.onChange}
                      value={this.state.crewcast}
                    />
                  </div>
                </div>

                <div class="add-listing-section margin-top-45">
                  <div class="add-listing-headline">
                    <h3>
                      <i class="sl sl-icon-picture" /> Payment Screenshot{" "}
                      <span>(Mandatory for Confirmation)</span>
                    </h3>
                  </div>
                  <div class="submit-section">
                    <h5>Mode of Payment</h5>
                    <h4>PayTM or Tez to +91 8309556255</h4>
                    <ImageUploader
                      withIcon={true}
                      withPreview={true}
                      withLabel={true}
                      buttonText="Choose image"
                      onChange={this.onDrop}
                      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                      maxFileSize={5242880}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="registerContestUser"
                    value="Register"
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

export default connect(
  null,
  { registerContestUser }
)(ShortFilmContestRegister);
