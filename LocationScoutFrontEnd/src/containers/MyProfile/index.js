import { Route, Link } from "react-router-dom";
import React, { Component } from "react";
import { history } from "../../store";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/sessionActions";
import ImageUploader from "react-images-upload";
import sessionApi from "../../api/SessionApi";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "",
      profilePicUrl: this.props.myProfile.profilePic,
      name: this.props.myProfile.name,
      phoneNumber: this.props.myProfile.phoneNumber,
      description: this.props.myProfile.description,
      facebookUrl: this.props.myProfile.facebookUrl,
      twitterUrl: this.props.myProfile.twitterUrl,
      youtubeUrl: this.props.myProfile.youtubeUrl
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDrop(pictureFiles, pictureDataURLs) {
    debugger;
    this.setState({
      profilePic: pictureFiles[0]
    });
  }

  // componentDidMount() {
  //   sessionApi
  //     .getProfile()
  //     .then(response => {
  //       if (response.status == "200") {
  //         console.log(response.data);
  //         let profile = response.data;
  //         this.setState({ name: profile.name });
  //         this.setState({ profilePicUrl: profile.profilePic });
  //         this.setState({ phoneNumber: profile.phoneNumber });
  //         this.setState({ description: profile.description });
  //         this.setState({ facebookUrl: profile.facebookUrl });
  //         this.setState({ twitterUrl: profile.twitterUrl });
  //         this.setState({ youtubeUrl: profile.youtubeUrl });

  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ errors: {}, isLoading: true });
    // debugger;
    this.props.updateProfile({
      profilePic: this.state.profilePic,
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      description: this.state.description,
      facebookUrl: this.state.facebookUrl,
      twitterUrl: this.state.twitterUrl,
      youtubeUrl: this.state.youtubeUrl
    });
    history.push("/dashboard/");
  }

  render() {
    return (
      <div class="dashboard-content">
        <div id="titlebar">
          <div class="row">
            <div class="col-md-12">
              <h2>My Profile</h2>
              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Homes</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>My Profile</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="row">
          <form onSubmit={this.onSubmit} class="register">
            <div class="col-lg-6 col-md-12">
              <div class="dashboard-list-box margin-top-0">
                <h4 class="gray">Profile Details</h4>
                <div class="dashboard-list-box-static">
                  <div class="edit-profile-photo">
                    <img src={this.state.profilePicUrl} alt="" />
                    <ImageUploader
                      withIcon={true}
                      withPreview={true}
                      withLabel={true}
                      buttonText="Update Profile Pic"
                      onChange={this.onDrop}
                      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                      maxFileSize={5242880}
                    />
                  </div>
                  <div class="my-profile">
                    <label>Your Name</label>
                    <input
                      value={this.state.name}
                      type="text"
                      name="name"
                      onChange={this.onChange}
                    />

                    <label>Phone</label>
                    <input
                      value={this.state.phoneNumber}
                      type="text"
                      name="phoneNumber"
                      onChange={this.onChange}
                    />

                    <label>About Yourself</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      onChange={this.onChange}
                      value={this.state.description}
                    />

                    <label>
                      <i class="fa fa-twitter" /> Twitter
                    </label>
                    <input
                      value={this.state.twitterUrl}
                      name="twitterUrl"
                      type="text"
                      onChange={this.onChange}
                    />

                    <label>
                      <i class="fa fa-facebook-square" /> Facebook
                    </label>
                    <input
                      value={this.state.facebookUrl}
                      name="facebookUrl"
                      type="text"
                      onChange={this.onChange}
                    />

                    <label>
                      <i class="fa fa-youtube" /> Youtube
                    </label>
                    <input
                      value={this.state.youtubeUrl}
                      name="youtubeUrl"
                      type="text"
                      onChange={this.onChange}
                    />
                  </div>

                  <button class="button margin-top-15">Save Changes</button>
                </div>
              </div>
            </div>
          </form>
          <div class="col-lg-6 col-md-12">
            <div class="dashboard-list-box margin-top-0">
              <h4 class="gray">Change Password</h4>
              <div class="dashboard-list-box-static">
                <div class="my-profile">
                  <label class="margin-top-0">Current Password</label>
                  <input type="password" />

                  <label>New Password</label>
                  <input type="password" />

                  <label>Confirm New Password</label>
                  <input type="password" />

                  <button class="button margin-top-15">Change Password</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="copyrights">
              © 2019 Justshootnow. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state, props) {

//     if(state.myProfile){
//     return {
//       myProfile: state.myProfile
//     };
//   }else{
//     return {
//       myProfile: {
//         name : 'temp'
//       }
//     };
//   }
// }

const mapStateToProps = state => {
  return {
    myProfile: state.myProfile
  };
};

export default connect(
  mapStateToProps,
  { updateProfile }
)(MyProfile);
