import shortFilmsApi from "../api/ShortFilmsApi";
import * as types from "../types";
import { addFlashMessage } from "./flashMessageAction.js";

export function registerContestUser(shortfilm) {
  return function(dispatch) {
    return shortFilmsApi
      .addShortFilm(shortfilm)
      .then(response => {
        if (response.status == "200") {
          dispatch(
            addFlashMessage({
              type: "success",
              text: "You Registered Successfully."
            })
          );
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(
          addFlashMessage({
            type: "error",
            text: "Error while Registering. Please Refresh and retry"
          })
        );
      });
  };
}
