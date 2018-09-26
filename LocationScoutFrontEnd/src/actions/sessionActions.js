import sessionApi from "../api/SessionApi.js";
// import { SET_CURRENT_USER } from '../types';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "../types";
export function userSignupRequest(userData) {
  return dispatch => {
    return sessionApi.signUp(userData);
  };
}

export function logout() {
  return dispatch => {
    // debugger
    localStorage.removeItem("token");
    dispatch({ type: UNAUTH_USER });
  };
}

export function userLoginRequest(credentials) {
  return dispatch => {
    return sessionApi.login(credentials).then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem("token", response.access_token);
    });
  };
}

// export function setCurrentUser(user) {
//     return {
//       type: SET_CURRENT_USER,
//       user
//     };
//   }
