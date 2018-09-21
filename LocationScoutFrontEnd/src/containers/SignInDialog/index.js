import React from 'react';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import {connect} from 'react-redux';
import {userSignupRequest, userLoginRequest} from '../../actions/sessionActions.js';
import {addFlashMessage} from '../../actions/flashMessageAction.js';
import PropTypes from 'prop-types';

class SignInDialog extends React.Component {
    constructor(props){
        super(props);
        this.signInDialogClose = this.signInDialogClose.bind(this); 
    }

    signInDialogClose(){        
        document.getElementById("signInDialogButton").click();
    }

  render() {
      const {userSignupRequest,userLoginRequest, signInDialogClose, addFlashMessage} = this.props;
      return (
            <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
                <div class="small-dialog-header">
                    <h3>Sign In</h3>
                </div>            

                <div class="sign-in-form style-1">
                    <ul class="tabs-nav">
                        <li class="active"><a href="#tab1">Log In</a></li>
                        <li><a href="#tab2">Register</a></li>
                    </ul>
                    <div class="tabs-container alt">
                        <div class="tab-content" id="tab1" styles="">                    
                            <SignInForm userLoginRequest = {userLoginRequest} signInDialogClose={this.signInDialogClose} />                    
                        </div>
                        <div class="tab-content" id="tab2" styles="display: none;">
                            <SignUpForm userSignupRequest = {userSignupRequest} addFlashMessage = {addFlashMessage} signInDialogClose={this.signInDialogClose} />                    
                        </div>
                    </div>
                </div>

                <button id="signInDialogButton" title="Close (Esc)" type="button" class="mfp-close"></button>
            </div>   
            );
        }
}


// SignUpForm.propTypes = {
//     userSignupRequest : React.propTypes.func.isRequired
// }



export default connect(null, {userSignupRequest, addFlashMessage, userLoginRequest})(SignInDialog);