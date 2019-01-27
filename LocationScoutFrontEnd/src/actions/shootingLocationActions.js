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

export function updateLocation(location, locationId) {
  return function(dispatch) {
    return locationsApi
      .updateLocation(location, locationId)
      .then(response => {
        if (response.status == "200") {
          dispatch(
            addFlashMessage({
              type: "success",
              text: "Your Location Updated Successfully."
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
            text: "Error while updating Location. Please Refresh and retry"
          })
        );
      });
  };
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

export function deleteLocation(locationId) {
  return function(dispatch) {
    // debugger
    return locationsApi
      .deleteLocation(locationId)
      .then(response => {
        if (response.status == "200") {    
          debugger      
          dispatch(
            addFlashMessage({
              type: "success",
              text: "Your Location Deleted Successfully."
            })
          );          
          dispatch(locationDeleted(response.data.id));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function locationDeleted(locationId) {
  return { type: types.LOCATION_DELETED, locationId };
}
