import { BASE_URL } from './UrlApi';
class SessionApi {

    static login(credentials) {
      // debugger      
      return fetch(BASE_URL+'users/userName?userName='+credentials.userName+'&password='+credentials.password+'').then(response => {
      if(response.status == '200'){
        return response.json();
      }        
      }).catch(error => {
        return error;
      });
    } 

    static signUp(newUser) {
      console.log('signUp api called.');
      // debugger;
      const request = new Request(BASE_URL+'users/', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
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


    static getUserDetails(userId) {        
      return fetch(BASE_URL+'users/'+userId).then(response => {
        // debugger
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    static updateUserDetails(userInfo) {   
      console.log('updateUserDetails api called.');
      // debugger;
      const request = new Request(BASE_URL+'users/', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify(userInfo)        
      });
  
  
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }

    
  }
  
  export default SessionApi;
  