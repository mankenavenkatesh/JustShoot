package com.example.LocationScoutBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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

import com.example.LocationScoutBackend.models.LocationOwner;
import com.example.LocationScoutBackend.service.LocationOwnerService;

@Controller
@RequestMapping("/")
public class LocationOwnerController {

	@Autowired
	private LocationOwnerService locationOwnerService;
	
	
	
	@GetMapping("locationOwner/{id}")
	public ResponseEntity<LocationOwner> getLocationOwnerById(@PathVariable("id") Integer id) {
		LocationOwner LocationOwner = locationOwnerService.getLocationOwnerById(id);
		return new ResponseEntity<LocationOwner>(LocationOwner, HttpStatus.OK);
	}
	@GetMapping("locationOwners")
	public ResponseEntity<List<LocationOwner>> getAllLocationOwners() {
		List<LocationOwner> list = locationOwnerService.getAllLocationOwners();
		return new ResponseEntity<List<LocationOwner>>(list, HttpStatus.OK);
	}
	@PostMapping("locationOwner")
	public ResponseEntity<Void> addLocationOwner(@RequestBody LocationOwner locationOwner, UriComponentsBuilder builder) {
                boolean flag = locationOwnerService.addLocationOwner(locationOwner);
                if (flag == false) {
        	   return new ResponseEntity<Void>(HttpStatus.CONFLICT);
                }
                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(builder.path("/LocationOwner/{id}").buildAndExpand(locationOwner.getId()).toUri());
                return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@PutMapping("locationOwner")
	public ResponseEntity<LocationOwner> updateLocationOwner(@RequestBody LocationOwner LocationOwner) {
		locationOwnerService.updateLocationOwner(LocationOwner);
		return new ResponseEntity<LocationOwner>(LocationOwner, HttpStatus.OK);
	}
	@DeleteMapping("locationOwner/{id}")
	public ResponseEntity<Void> deleteLocationOwner(@PathVariable("id") Integer id) {
		locationOwnerService.deleteLocationOwner(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
	
	
	
}
