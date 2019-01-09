import locationsApi from "../api/LocationsApi";
import * as types from "../types";
import { browserHistory } from "react-router";
import { addFlashMessage } from "./flashMessageAction.js";

export function fetchMyLocations() {
  // debugger
  return function(dispatch) {
    return locationsApi
      .getAllMyLocations()
      .then(response => {
        if (response.status == "200") {
          dispatch(
            addFlashMessage({
              type: "success",
              text: "Your Locations are loaded."
            })
          );
          console.log(response);
          // dispatch(addMyLocation(response.data));
          dispatch(setMyLocations(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(
          addFlashMessage({
            type: "error",
            text: "Error while fetching all Locations. Please Refresh and retry"
          })
        );
      });
  };
}

export function setMyLocations(myLocations) {
  return { type: types.SET_MY_LOCATIONS, myLocations };
}

export function fetchLocation(locationId) {
  return function(dispatch) {
    return locationsApi
      .getLocationById(locationId)
      .then(location => {
        dispatch(locationFetched(location));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function locationFetched(location) {
  return { type: types.LOCATION_FETCHED, location };
}

export function saveLocation(location) {
  return function(dispatch) {
    return locationsApi
      .addLocation(location)
      .then(response => {
        if (response.status == "200") {
          dispatch(
            addFlashMessage({
              type: "success",
              text: "Your Location Added Successfully."
            })
          );
          console.log(response);
          dispatch(addMyLocation(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(
          addFlashMessage({
            type: "error",
            text: "Error while adding Location. Please Refresh and retry"
          })
        );
      });
  };
}

export function addMyLocation(newlocation) {
  return { type: types.ADD_MY_LOCATION, newlocation };
}

export function deleteLocation(locationOwnerId, locationId) {
  // debugger
  return function(dispatch) {
    // debugger
    return locationsApi
      .deleteLocation(locationOwnerId, locationId)
      .then(locationDeleted => {
        dispatch(locationDeleted(locationId));
        return locationDeleted;
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function locationDeleted(locationId) {
  return { type: types.LOCATION_DELETED, locationId };
}
