import { BASE_URL } from "./UrlApi";
import axios from "axios";

class LocationsApi {
  static getAllLocations() {
    return fetch(BASE_URL + "locations")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
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

  static getLocationById(locationId) {
    return fetch(BASE_URL + "locations/" + locationId)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static addLocation(location) {
    debugger;
    var endpoint = BASE_URL + "location/";
    var authorization = localStorage.getItem("authorization");
    return axios.post(endpoint, JSON.stringify(location), {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization
      }
    });
  }

  static getLocation(locationId) {
    console.log("getLocation api call");
    console.log(locationId);
    return fetch(BASE_URL + "locations/" + locationId)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static deleteLocation(locationOwnerId, locationId) {
    debugger;
    const request = new Request(
      BASE_URL +
        "locationOwners/" +
        locationOwnerId +
        "/locations/" +
        locationId,
      {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default LocationsApi;
