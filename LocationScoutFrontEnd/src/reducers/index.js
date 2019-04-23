// Set up your root reducer here...
import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import auth from "./../reducers/auth.js";
import myProfile from "./../reducers/profile.js";
import flashMessages from "./../reducers/flashMessage.js";
import myLocations from "./../reducers/shootinglocations.js";
import locationCategories from "./../reducers/locationCategories.js";
import locationAmenities from "./../reducers/locationAmenities.js";
import requirements from "./../reducers/requirements.js";

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  myProfile,
  myLocations,
  locationCategories,
  locationAmenities,
  flashMessages,
  requirements
});
export default rootReducer;
