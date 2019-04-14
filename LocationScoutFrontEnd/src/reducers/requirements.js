// import { SET_LOCATIONS, ADD_LOCATION, LOCATION_FETCHED, LOCATION_UPDATED, LOCATION_DELETED } from '../actions/shootingLocationActions';
import { ADD_REQUIREMENT, SET_ALL_REQUIREMENTS } from "../types";

export default function requirements(state = [], action = {}) {
  switch (action.type) {
    case ADD_REQUIREMENT:
      // debugger;
      return [
        action.newRequirement,
        ...state.filter(item => item.id !== action.newRequirement.id)
      ];
    case SET_ALL_REQUIREMENTS:
      return action.requirements;
    default:
      return state;
  }
}
