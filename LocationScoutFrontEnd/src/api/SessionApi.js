import { BASE_URL } from "./UrlApi";
import axios from "axios";
class SessionApi {
  static login(credentials) {
    var endpoint = BASE_URL + "auth/signin";
    // const request = new Request(endpoint, {
    //   method: "POST",
    //   headers: new Headers({
    //     "Content-Type": "application/json"
    //     // "Access-Control-Allow-Origin": "http://localhost:3000"
    //   }),
    //   body: JSON.stringify(credentials)
    // });
    // return fetch(request);
    return axios.post(endpoint, JSON.stringify(credentials), {
      headers: { "Content-Type": "application/json" }
    });
    // .then(response => {
    //   debugger
    //   if (response.status == "200") {
    //     return response.json();
    //   }
    // })
    // .catch(error => {
    //   return error;
    // });
  }

  static signUp(newUser) {
    console.log("Registering new user");
    var endPoint = BASE_URL + "auth/signup";
    const request = new Request(endPoint, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
        // "Access-Control-Allow-Origin": "http://localhost:3000"
      }),
      body: JSON.stringify(newUser)
    });
    return fetch(request);
    // return fetch(request).then(response => {
    //   return response.json();
    // }).catch(error => {
    //   return error;
    // });
  }

  static sendEmail(emailDetails) {
    debugger;
    var endPoint = BASE_URL + "auth/contactus";
    var bodyFormData = new FormData();
    bodyFormData.set("senderEmail", emailDetails.senderEmail);
    bodyFormData.set("senderName", emailDetails.senderName);
    bodyFormData.set("emailSubject", emailDetails.emailSubject);
    bodyFormData.set("emailBody", emailDetails.emailBody);

    return axios.post(endPoint, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  static getUserDetails(userId) {
    return fetch(BASE_URL + "users/" + userId)
      .then(response => {
        // debugger
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static getProfile() {
    var endpoint = BASE_URL + "auth/";
    var authorization = localStorage.getItem("authorization");
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization
      }
    });
  }

  static updateProfile(userProfile) {
    var endpoint = BASE_URL + "auth/";
    var bodyFormData = new FormData();
    bodyFormData.set("name", userProfile.name);
    bodyFormData.set("phoneNumber", userProfile.phoneNumber);
    bodyFormData.set("description", userProfile.description);
    bodyFormData.set("facebookUrl", userProfile.facebookUrl);
    bodyFormData.set("twitterUrl", userProfile.twitterUrl);
    bodyFormData.set("youtubeUrl", userProfile.youtubeUrl);
    bodyFormData.set("profilePic", userProfile.profilePic);

    var authorization = localStorage.getItem("authorization");
    return axios.post(endpoint, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: authorization
      }
    });
  }
}

export default SessionApi;
