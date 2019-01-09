// import { SET_LOCATIONS, ADD_LOCATION, LOCATION_FETCHED, LOCATION_UPDATED, LOCATION_DELETED } from '../actions/shootingLocationActions';
import {
  SET_MY_LOCATIONS,
  ADD_MY_LOCATION,
  LOCATION_FETCHED,
  LOCATION_DELETED
} from "../types";

export default function shootinglocations(state = [], action = {}) {
  switch (action.type) {
    case ADD_MY_LOCATION:
      return [...state, action.newlocation];

    case LOCATION_DELETED:
      return state.filter(item => item._id !== action.locationId);

    case LOCATION_FETCHED:
      const index = state.findIndex(
        location => location.id === action.location.id
      );
      if (index > -1) {
        return state.map(location => {
          if (location.id === action.location.id) return action.location;
          return location;
        });
      } else {
        return [...state, action.location];
      }

    case SET_MY_LOCATIONS:
      return action.myLocations;
    default:
      return state;
  }
}
