import { BASE_URL } from "./UrlApi";
import axios from "axios";

class LocationAmenitiesApi {
  static getLocationAmenities() {
    var endpoint = BASE_URL + "location/amenities/all";
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default LocationAmenitiesApi;
