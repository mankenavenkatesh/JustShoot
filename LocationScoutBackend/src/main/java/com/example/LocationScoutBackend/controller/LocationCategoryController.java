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

import com.example.LocationScoutBackend.models.LocationCategory;
import com.example.LocationScoutBackend.service.LocationCategoryService;

@Controller
@RequestMapping("/")
public class LocationCategoryController {

	@Autowired
	private LocationCategoryService locationCategoryService;
	
	
	
	@GetMapping("locationCategory/{id}")
	public ResponseEntity<LocationCategory> getLocationCategoryById(@PathVariable("id") Integer id) {
		LocationCategory LocationCategory = locationCategoryService.getLocationCategoryById(id);
		return new ResponseEntity<LocationCategory>(LocationCategory, HttpStatus.OK);
	}
	@GetMapping("locationCategories")
	public ResponseEntity<List<LocationCategory>> getAllLocationCategorys() {
		List<LocationCategory> list = locationCategoryService.getAllLocationCategories();
		return new ResponseEntity<List<LocationCategory>>(list, HttpStatus.OK);
	}
	@PostMapping("locationCategory")
	public ResponseEntity<Void> addLocationCategory(@RequestBody LocationCategory locationCategory, UriComponentsBuilder builder) {
                boolean flag = locationCategoryService.addLocationCategory(locationCategory);
                if (flag == false) {
        	   return new ResponseEntity<Void>(HttpStatus.CONFLICT);
                }
                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(builder.path("/LocationCategory/{id}").buildAndExpand(locationCategory.getId()).toUri());
                return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	@PutMapping("locationCategory")
	public ResponseEntity<LocationCategory> updateLocationCategory(@RequestBody LocationCategory locationCategory) {
		locationCategoryService.updateLocationCategory(locationCategory);
		return new ResponseEntity<LocationCategory>(locationCategory, HttpStatus.OK);
	}
	@DeleteMapping("locationCategory/{id}")
	public ResponseEntity<Void> deleteLocationCategory(@PathVariable("id") Integer id) {
		locationCategoryService.deleteLocationCategory(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
	
	
	
}
