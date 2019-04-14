import { BASE_URL } from "./UrlApi";
import axios from "axios";

class LocationsApi {
  // Authorization header is not required.
  static filterLocations(categoryId, city) {
    var endpoint = "";

    if (city != null && categoryId != null && categoryId != 0) {
      endpoint =
        BASE_URL + "location/all?categoryId=" + categoryId + "&city=" + city;
    } else if (city != null) {
      endpoint = BASE_URL + "location/all?city=" + city;
    } else if (categoryId != null && categoryId != 0) {
      endpoint = BASE_URL + "location/all?categoryId=" + categoryId;
    } else {
      endpoint = BASE_URL + "location/all";
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
    debugger;
    var endpoint = BASE_URL + "location/";
    var bodyFormData = new FormData();
    bodyFormData.set("locationId", locationId);
    bodyFormData.set("locationName", location.locationName);
    bodyFormData.set("locationCategoryId", location.locationCategoryId);
    bodyFormData.set("city", location.city);
    bodyFormData.set("state", location.state);
    bodyFormData.set("addressdesc", location.addressdesc);
    bodyFormData.set("zipCode", location.zipCode);
    bodyFormData.set("description", location.description);
    bodyFormData.set("phoneNumber", location.phoneNumber);
    bodyFormData.set("website", location.website);
    bodyFormData.set("email", location.email);
    bodyFormData.set("price", location.price);
    bodyFormData.set("locationType", location.locationType);
    debugger;
    Array.from(location.photos).forEach(photo =>
      bodyFormData.append("photos", photo)
    );
    Array.from(location.amenities).forEach(amenity =>
      bodyFormData.append("amenities", amenity)
    );

    var authorization = localStorage.getItem("authorization");
    return axios.post(endpoint, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
    bodyFormData.set("city", location.city);
    bodyFormData.set("state", location.state);
    bodyFormData.set("addressdesc", location.addressdesc);
    bodyFormData.set("zipCode", location.zipCode);
    bodyFormData.set("description", location.description);
    bodyFormData.set("phoneNumber", location.phoneNumber);
    bodyFormData.set("website", location.website);
    bodyFormData.set("email", location.email);
    bodyFormData.set("price", location.price);
    bodyFormData.set("locationType", location.locationType);
    debugger;
    Array.from(location.photos).forEach(photo =>
      bodyFormData.append("photos", photo)
    );
    Array.from(location.amenities).forEach(amenity =>
      bodyFormData.append("amenities", amenity)
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
