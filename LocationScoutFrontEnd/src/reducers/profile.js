import { ADD_MY_PROFILE } from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_MY_PROFILE:
      return action.myProfile;
    default:
      return state;
  }
};
