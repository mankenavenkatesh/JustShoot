import { BASE_URL } from "./UrlApi";
import axios from "axios";

class ShortFilmsApi {
  // Authorization header is not required.
  static filterShortFilms() {
    var endpoint = "";
    endpoint = BASE_URL + "contests/shortfilms/all";
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  static verifyContestant(shortFilmId) {
    var endpoint = "";
    endpoint = BASE_URL + "contests/shortfilms/verify/" + shortFilmId;
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  static addShortFilm(shortfilm) {
    debugger;
    var endpoint = BASE_URL + "contests/shortfilms/";
    var bodyFormData = new FormData();
    bodyFormData.set("contestantName", shortfilm.contestantName);
    bodyFormData.set("collegeName", shortfilm.collegeName);
    bodyFormData.set("youtubeUrl", shortfilm.youtubeUrl);
    bodyFormData.set("yearOfStudy", shortfilm.yearOfStudy);
    bodyFormData.set("email", shortfilm.email);
    bodyFormData.set("phoneNumber", shortfilm.phoneNumber);
    bodyFormData.set("branch", shortfilm.branch);
    bodyFormData.set("shortFilmTitle", shortfilm.shortFilmTitle);
    bodyFormData.set("genre", shortfilm.genre);
    bodyFormData.set("crewcast", shortfilm.crewcast);
    Array.from(shortfilm.paymentScreenshots).forEach(photo =>
      bodyFormData.append("paymentPhoto", photo)
    );
    return axios.post(endpoint, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
}

export default ShortFilmsApi;
