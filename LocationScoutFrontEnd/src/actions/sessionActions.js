import sessionApi from "../api/SessionApi.js";
import { addFlashMessage } from "./flashMessageAction.js";
import * as types from "../types";
// import { SET_CURRENT_USER } from '../types';
import {
  AUTH_USER,
  UNAUTH_USER,
  ADD_MY_PROFILE,
  AUTH_ERROR,
  ADD_FLASH_MESSAGE
} from "../types";
export function userSignupRequest(userData) {
  return dispatch => {
    return sessionApi.signUp(userData);
  };
}

export function logout() {
  return dispatch => {
    // debugger
    localStorage.removeItem("authorization");
    dispatch({ type: UNAUTH_USER });
  };
}

export function userLoginRequest(credentials) {
  return dispatch => {
    return sessionApi
      .login(credentials)
      .then(response => {
        // debugger;
        if (response.status == "200") {
          dispatch(
            addFlashMessage({
              type: "success",
              text: "Your Signed In Successfully. You Can Add Listings Now"
            })
          );

          dispatch({ type: AUTH_USER });
          console.log(response.headers);
          localStorage.setItem("authorization", response.headers.authorization);
        }
      })
      .catch(error => {
        // debugger;
        dispatch(
          addFlashMessage({
            type: "error",
            text: "Your Sign In Failed"
          })
        );
      });
  };
}

export function fetchUserProfile() {
  return function(dispatch) {
    return sessionApi
      .getProfile()
      .then(response => {
        if (response.status == "200") {
          console.log(response);
          dispatch(addMyProfile(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        // dispatch(
        //   addFlashMessage({
        //     type: "error",
        //     text:
        //       "Error while fetching User Profile. Please Refresh and retry"
        //   })
        // );
      });
  };
}

export function updateProfile(userProfile) {
  return function(dispatch) {
    return sessionApi
      .updateProfile(userProfile)
      .then(response => {
        if (response.status == "200") {
          dispatch(
            addFlashMessage({
              type: "success",
              text: "Your User Profile Updated Successfully."
            })
          );
          console.log(response);
          // Commenting below line as MyProfile Component fetching details on ComponentMount.
          dispatch(addMyProfile(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(
          addFlashMessage({
            type: "error",
            text: "Error while updating Location. Please Refresh and retry"
          })
        );
      });
  };
}

export function addMyProfile(myProfile) {
  return { type: types.ADD_MY_PROFILE, myProfile };
}
