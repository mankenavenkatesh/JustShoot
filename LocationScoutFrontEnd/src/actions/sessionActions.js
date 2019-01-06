import sessionApi from "../api/SessionApi.js";
import { addFlashMessage } from "./flashMessageAction.js";
// import { SET_CURRENT_USER } from '../types';
import {
  AUTH_USER,
  UNAUTH_USER,
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
        debugger;
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
        debugger;
        dispatch(
          addFlashMessage({
            type: "error",
            text: "Your Sign In Failed"
          })
        );
      });
  };
}
