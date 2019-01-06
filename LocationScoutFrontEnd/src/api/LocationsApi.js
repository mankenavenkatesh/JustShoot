import { BASE_URL } from "./UrlApi";
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

  static getLocationsById(locationOwnerId) {
    return fetch(BASE_URL + "locationOwners/" + locationOwnerId + "/locations")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
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

  static addUserLocation(location, locationOwnerId) {
    debugger;
    const request = new Request(
      BASE_URL + "locationOwners/" + locationOwnerId + "/locations",
      {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(location)
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
