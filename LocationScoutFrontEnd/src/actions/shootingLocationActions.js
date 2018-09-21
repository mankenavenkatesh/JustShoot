import locationsApi from '../api/LocationsApi';
import * as types from '../types';
import {browserHistory} from 'react-router'; 


  export function fetchMyLocations(locationOwnerId) {   
      // debugger 
    return function(dispatch) {
      return locationsApi.getLocationsById(locationOwnerId).then(myLocations => {        
        dispatch(setMyLocations(myLocations));
      return myLocations;
      }).catch(error => {
        console.log(error);
      });
    };
  }

  export function setMyLocations(myLocations) {       
    return {type: types.SET_MY_LOCATIONS, myLocations};
  }

  export function  fetchLocation(locationId) {
    return function(dispatch){
      return locationsApi.getLocationById(locationId).then(location => {
        dispatch(locationFetched(location));
      }).catch(error => {
        console.log(error);
      })
    };
  }

  export function locationFetched(location){
    return {type : types.LOCATION_FETCHED, location};
    }

  export function saveLocation(locationOwnerId, location) {    
    return function(dispatch) {
      return locationsApi.addUserLocation(locationOwnerId, location).then(newlocation => {        
        dispatch(addMyLocation(newlocation));
      return newlocation;
      }).catch(error => {
        console.log(error);
      });
    };
  }

  export function addMyLocation(newlocation) {              
    return {type: types.ADD_MY_LOCATION, newlocation};
  }


  export function deleteLocation(locationOwnerId, locationId) {    
    // debugger
    return function(dispatch) {
      // debugger
      return locationsApi.deleteLocation(locationOwnerId, locationId).then(locationDeleted => {        
        dispatch(locationDeleted(locationId));
      return locationDeleted;
      }).catch(error => {
        console.log(error);
      });
    };
  }

  export function locationDeleted(locationId){
    return {type : types.LOCATION_DELETED, locationId};
  }
