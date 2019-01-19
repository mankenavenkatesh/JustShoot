import { SET_LOCATION_AMENITIES } from "../types";

export default function locationAmenities(state = [], action = {}) {
  switch (action.type) {
    case SET_LOCATION_AMENITIES:
      return action.locationAmenities;
    default:
      return state;
  }
}
