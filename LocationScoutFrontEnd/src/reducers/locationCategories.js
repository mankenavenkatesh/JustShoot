import { SET_LOCATION_CATEGORIES } from "../types";

export default function locationCategories(state = [], action = {}) {
  switch (action.type) {
    case SET_LOCATION_CATEGORIES:
      return action.locationCategories;
    default:
      return state;
  }
}
