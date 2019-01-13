import { BASE_URL } from "./UrlApi";
import axios from "axios";

class LocationCategoriesApi {
  static getLocationCategories() {
    var endpoint = BASE_URL + "location/categories/all";
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default LocationCategoriesApi;
