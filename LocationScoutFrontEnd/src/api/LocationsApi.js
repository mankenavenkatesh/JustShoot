import { BASE_URL } from "./UrlApi";
import axios from "axios";

class LocationsApi {
  // Authorization header is not required.
  static filterLocations(categoryId) {
    if (categoryId > 0) {
      var endpoint = BASE_URL + "location/all?categoryId=" + categoryId;
    } else {
      var endpoint = BASE_URL + "location/all";
    }

    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  // Authorization header is not required.
  static getLocationById(locationId) {
    var endpoint = BASE_URL + "location/" + locationId;
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  static getAllMyLocations() {
    var endpoint = BASE_URL + "location/";
    var authorization = localStorage.getItem("authorization");
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization
      }
    });
  }

  static updateLocation(location, locationId) {
    // debugger;
    var endpoint = BASE_URL + "location/" + locationId;
    var authorization = localStorage.getItem("authorization");
    return axios.put(endpoint, JSON.stringify(location), {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization
      }
    });
  }

  static addLocation(location) {
    // debugger;
    var endpoint = BASE_URL + "location/";
    var bodyFormData = new FormData();
    bodyFormData.set("locationName", location.locationName);
    bodyFormData.set("locationCategoryId", location.locationCategoryId);
    Array.from(location.photos).forEach(photo =>
      bodyFormData.append("photos", photo)
    );

    var authorization = localStorage.getItem("authorization");
    return axios.post(endpoint, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: authorization
      }
    });
  }

  static deleteLocation(locationId) {
    // debugger;
    var endpoint = BASE_URL + "location/" + locationId;
    var authorization = localStorage.getItem("authorization");
    return axios.delete(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization
      }
    });
  }
}

export default LocationsApi;
