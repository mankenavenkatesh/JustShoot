import requirementApi from "../api/RequirementApi";
import * as types from "../types";
import { browserHistory } from "react-router";
import { addFlashMessage } from "./flashMessageAction.js";

export function saveRequirement(requirement) {
  return function(dispatch) {
    return requirementApi
      .addRequirement(requirement)
      .then(response => {
        if (response.status == "200") {
          dispatch(
            addFlashMessage({
              type: "success",
              text: "Your Requirement Added Successfully."
            })
          );
          console.log(response);
          dispatch(addRequirement(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(
          addFlashMessage({
            type: "error",
            text: "Error while adding Requirement. Please Refresh and retry"
          })
        );
      });
  };
}

export function addRequirement(newRequirement) {
  return { type: types.ADD_REQUIREMENT, newRequirement };
}

export function fetchAllRequirements() {
  return function(dispatch) {
    return requirementApi
      .fetchAllRequirements()
      .then(response => {
        if (response.status == "200") {
          dispatch(setAllRequirements(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function fetchAllRequirementsByType(requirementType) {
  return function(dispatch) {
    return requirementApi
      .fetchAllRequirementsByType(requirementType)
      .then(response => {
        if (response.status == "200") {
          dispatch(setAllRequirements(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function setAllRequirements(requirements) {
  return { type: types.SET_ALL_REQUIREMENTS, requirements };
}
