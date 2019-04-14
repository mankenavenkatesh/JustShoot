import React from "react";
import EmailForm from "../EmailForm";
import {
  userSignupRequest,
  userLoginRequest
} from "../../actions/sessionActions.js";
import { addFlashMessage } from "../../actions/flashMessageAction.js";
import PropTypes from "prop-types";

class EmailDialog extends React.Component {
  constructor(props) {
    super(props);
    this.emailDialogClose = this.emailDialogClose.bind(this);
  }

  emailDialogClose() {
    document.getElementById("emailDialogButton").click();
  }

  render() {
    const {
      userSignupRequest,
      userLoginRequest,
      signInDialogClose,
      addFlashMessage
    } = this.props;
    return (
      <div id="email-dialog" class="zoom-anim-dialog mfp-hide">
        <div class="small-dialog-header">
          <h3>Email</h3>
        </div>

        <div class="sign-in-form style-1">
          <ul class="tabs-nav">
            <li class="active">
              <a href="#tab1">Email</a>
            </li>
          </ul>
          <div class="tabs-container alt">
            <div class="tab-content" id="tab1" styles="">
              <EmailForm
                userLoginRequest={userLoginRequest}
                emailDialogClose={this.emailDialogClose}
              />
            </div>
          </div>
        </div>

        <button
          id="emailDialogButton"
          title="Close (Esc)"
          type="button"
          class="mfp-close"
        />
      </div>
    );
  }
}

// SignUpForm.propTypes = {
//     userSignupRequest : React.propTypes.func.isRequired
// }

export default connect(
  null,
  { userSignupRequest, addFlashMessage, userLoginRequest }
)(SignInDialog);
