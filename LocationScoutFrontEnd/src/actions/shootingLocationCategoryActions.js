import locationCategoriesApi from "../api/LocationCategoriesApi";
import * as types from "../types";
import { addFlashMessage } from "./flashMessageAction.js";

export function fetchLocationCategories() {
  // debugger
  return function(dispatch) {
    return locationCategoriesApi
      .getLocationCategories()
      .then(response => {
        if (response.status == "200") {
          console.log(response);
          dispatch(setLocationCategories(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(
          addFlashMessage({
            type: "error",
            text:
              "Error while fetching all Location Categories. Please Refresh and retry"
          })
        );
      });
  };
}

export function setLocationCategories(locationCategories) {
  return { type: types.SET_LOCATION_CATEGORIES, locationCategories };
}
