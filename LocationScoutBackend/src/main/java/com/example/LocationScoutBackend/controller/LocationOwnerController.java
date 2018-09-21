package com.example.LocationScoutBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.LocationScoutBackend.models.LocationOwner;
import com.example.LocationScoutBackend.service.LocationOwnerService;

@Controller
@RequestMapping("/locationOwners")
public class LocationOwnerController {

	@Autowired
	private LocationOwnerService locationOwnerService;
	
	@GetMapping("/{id}")	
	public ResponseEntity<LocationOwner> getLocationOwnerById(@PathVariable("id") Integer id) {
		LocationOwner LocationOwner = locationOwnerService.getLocationOwnerById(id);
		return new ResponseEntity<LocationOwner>(LocationOwner, HttpStatus.OK);
	}
	
	@GetMapping("/userName")	
	public ResponseEntity<LocationOwner> getLocationOwnerByUserName(@RequestParam("userName") String userName,
			@RequestParam("password") String password) {
		LocationOwner locationOwner = locationOwnerService.getLocationOwnerByUserName(userName);
		if(locationOwner != null && locationOwner.getPassword().equals(password)){
			return new ResponseEntity<LocationOwner>(locationOwner, HttpStatus.OK);
		}		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);		
	}
	
	@GetMapping("/")
	public ResponseEntity<List<LocationOwner>> getAllLocationOwners() {
		List<LocationOwner> list = locationOwnerService.getAllLocationOwners();
		return new ResponseEntity<List<LocationOwner>>(list, HttpStatus.OK);
	}
	@PostMapping("/")
	public ResponseEntity<LocationOwner> addLocationOwner(@RequestBody LocationOwner locationOwner, UriComponentsBuilder builder) {				
               LocationOwner newLocationOwner =  locationOwnerService.addLocationOwner(locationOwner);                
                return new ResponseEntity<LocationOwner>(newLocationOwner, HttpStatus.OK);
	}
	@PutMapping("/")
	public ResponseEntity<LocationOwner> updateLocationOwner(@RequestBody LocationOwner LocationOwner) {
		locationOwnerService.updateLocationOwner(LocationOwner);
		return new ResponseEntity<LocationOwner>(LocationOwner, HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteLocationOwner(@PathVariable("id") Long id) {
		locationOwnerService.deleteLocationOwner(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
}
