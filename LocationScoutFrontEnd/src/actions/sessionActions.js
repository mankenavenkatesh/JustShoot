import sessionApi from '../api/SessionApi.js';
import { SET_CURRENT_USER } from '../types';

export function userSignupRequest(userData){

    return dispatch => {
        return sessionApi.signUp(userData);            
    }
}

export function logout() {
    return dispatch => {
        // debugger
      localStorage.removeItem('loginId');      
      dispatch(setCurrentUser({}));      
    }
  }

export function userLoginRequest(credentials){

    return dispatch => {
        return sessionApi.login(credentials).then( res => {
            console.log(res.id);
            const loginId = res.id;
            // debugger
            localStorage.setItem('loginId', loginId);            
            dispatch(setCurrentUser(res));
        }
        ) ;             
    }
}

export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }