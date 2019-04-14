import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

class MyProfile extends Component {
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
          <div class="col-lg-6 col-md-12">
            <div class="dashboard-list-box margin-top-0">
              <h4 class="gray">Profile Details</h4>
              <div class="dashboard-list-box-static">
                <div class="edit-profile-photo">
                  <img src="/images/user-avatar.jpg" alt="" />
                  <div class="change-photo-btn">
                    <div class="photoUpload">
                      <span>
                        <i class="fa fa-upload" /> Upload Photo
                      </span>
                      <input type="file" class="upload" />
                    </div>
                  </div>
                </div>
                <div class="my-profile">
                  <label>Your Name</label>
                  <input value="Tom Perrin" type="text" />

                  <label>Phone</label>
                  <input value="(123) 123-456" type="text" />

                  <label>Email</label>
                  <input value="tom@example.com" type="text" />

                  <label>Notes</label>
                  <textarea name="notes" id="notes" cols="30" rows="10">
                    Maecenas quis consequat libero, a feugiat eros. Nunc ut
                    lacinia tortor morbi ultricies laoreet ullamcorper phasellus
                    semper
                  </textarea>

                  <label>
                    <i class="fa fa-twitter" /> Twitter
                  </label>
                  <input placeholder="https://www.twitter.com/" type="text" />

                  <label>
                    <i class="fa fa-facebook-square" /> Facebook
                  </label>
                  <input placeholder="https://www.facebook.com/" type="text" />

                  <label>
                    <i class="fa fa-google-plus" /> Google+
                  </label>
                  <input placeholder="https://www.google.com/" type="text" />
                </div>

                <button class="button margin-top-15">Save Changes</button>
              </div>
            </div>
          </div>
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
            <div class="copyrights">© 2017 Listeo. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
