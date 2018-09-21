package com.example.LocationScoutBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.LocationScoutBackend.models.Location;
import com.example.LocationScoutBackend.models.LocationOwner;
import com.example.LocationScoutBackend.service.LocationOwnerService;
import com.example.LocationScoutBackend.service.LocationService;

@Controller
@RequestMapping("/")
public class LocationController {	
	
	@Autowired
	private LocationService locationService;
	
	@Autowired
	private LocationOwnerService locationOwnerService;
	
	
	@GetMapping("locationOwners/{locationOwnerId}/locations/{id}")
	public ResponseEntity<Location> getLocationByLocationOwnerId(@PathVariable("locationOwnerId") Long locationOwnerId, @PathVariable("id") Long id) {
		Location location = locationService.getLocationById(id);
		return new ResponseEntity<Location>(location, HttpStatus.OK);
	}	
	
	@GetMapping("locations")
	public ResponseEntity<List<Location>> getAllLocations() {
		List<Location> locations = locationService.getAllLocations();
		return new ResponseEntity<List<Location>>(locations, HttpStatus.OK);
	}
	
	@GetMapping("/locations/{locationId}")
	public ResponseEntity<Location> getLocationById(@PathVariable("locationId") Long locationId) {
		Location location = locationService.getLocationById(locationId);
		return new ResponseEntity<Location>(location, HttpStatus.OK);
	}
	
	@GetMapping("locationOwners/{locationOwnerId}/locations")
	public ResponseEntity<List<Location>> getAllLocationsByOwnerId(@PathVariable("locationOwnerId") Long locationOwnerId) {		
		List<Location> locations=locationService.getAllLocations(locationOwnerId);
		return new ResponseEntity<List<Location>>(locations, HttpStatus.OK);
	}
	
	@PostMapping("locationOwners/{locationOwnerId}/locations")
	public ResponseEntity<Void> addLocationToLocationOwner(@RequestBody Location location, UriComponentsBuilder builder, @PathVariable("locationOwnerId") Long locationOwnerId) {
		LocationOwner locationOwner = locationOwnerService.getLocationOwnerById(locationOwnerId);
		location.setLocationOwner(locationOwner);
		locationService.addLocation(location);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
        
	}
	
	@PutMapping("locationOwners/{locationOwnerId}/locations")
	public ResponseEntity<Void> updateLocationOfLocationOwner(@RequestBody Location location, UriComponentsBuilder builder, @PathVariable("locationOwnerId") Long locationOwnerId) {
		LocationOwner locationOwner = locationOwnerService.getLocationOwnerById(locationOwnerId);
		location.setLocationOwner(locationOwner);
		locationService.updateLocation(location);		
        return new ResponseEntity<Void>(HttpStatus.CREATED);
        
	}
	
	@DeleteMapping("locationOwners/{locationOwnerId}/locations/{locationId}")
	public ResponseEntity<Void> deleteLocationOwner(@PathVariable("locationId") Long locationId) {
		locationService.deleteLocation(locationId);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
}
