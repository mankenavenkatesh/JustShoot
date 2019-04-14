import { BASE_URL } from "./UrlApi";
import axios from "axios";

class RequirementApi {
  static addRequirement(requirement) {
    // debugger;
    var endpoint = BASE_URL + "contests/requirementposts/";
    var bodyFormData = new FormData();
    bodyFormData.set("requirementType", requirement.requirementType);
    bodyFormData.set("requirementDesc", requirement.requirementDesc);
    bodyFormData.set("shortFilmName", requirement.shortFilmName);

    var authorization = localStorage.getItem("authorization");
    return axios.post(endpoint, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: authorization
      }
    });
  }

  static fetchAllRequirements() {
    var endpoint = BASE_URL + "contests/requirementposts/all";
    var authorization = localStorage.getItem("authorization");
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization
      }
    });
  }

  static fetchAllRequirementsByType(requirementType) {
    var endpoint =
      BASE_URL + "contests/requirementposts/all/" + requirementType;
    var authorization = localStorage.getItem("authorization");
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization
      }
    });
  }
}

export default RequirementApi;
