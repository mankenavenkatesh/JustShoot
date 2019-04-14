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

  static updateUserDetails(userInfo) {
    console.log("updateUserDetails api called.");
    // debugger;
    const request = new Request(BASE_URL + "users/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(userInfo)
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default SessionApi;
