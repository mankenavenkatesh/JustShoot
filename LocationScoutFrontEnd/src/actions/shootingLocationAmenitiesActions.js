import locationAmenitiesApi from "../api/LocationAmenitiesApi";
import * as types from "../types";
import { addFlashMessage } from "./flashMessageAction.js";

export function fetchLocationAmenities() {
  // debugger
  return function(dispatch) {
    return locationAmenitiesApi
      .getLocationAmenities()
      .then(response => {
        if (response.status == "200") {
          console.log(response);
          dispatch(setLocationAmenities(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(
          addFlashMessage({
            type: "error",
            text:
              "Error while fetching all Location Amenities. Please Refresh and retry"
          })
        );
      });
  };
}

export function setLocationAmenities(locationAmenities) {
  return { type: types.SET_LOCATION_AMENITIES, locationAmenities };
}
