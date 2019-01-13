// Set up your root reducer here...
import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import auth from "./../reducers/auth.js";
import flashMessages from "./../reducers/flashMessage.js";
import myLocations from "./../reducers/shootinglocations.js";
import locationCategories from "./../reducers/locationCategories.js";

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  myLocations,
  locationCategories,
  flashMessages
});
export default rootReducer;
