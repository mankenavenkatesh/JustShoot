package com.example.LocationScoutBackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LocationScoutBackend.models.LocationCategory;
import com.example.LocationScoutBackend.repository.LocationCategoryRepository;

@Service
public class LocationCategoryService {

	@Autowired
	LocationCategoryRepository locationCategoryRepository;
	
	
	public LocationCategory getLocationCategoryById(long locationCategoryId) {
		LocationCategory obj = locationCategoryRepository.findById(locationCategoryId).get();
		return obj;
	}	
	
	public List<LocationCategory> getAllLocationCategories(){
		List<LocationCategory> list = new ArrayList<LocationCategory>();
		locationCategoryRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	public synchronized boolean addLocationCategory(LocationCategory locationCategory){
	        List<LocationCategory> list = new ArrayList<>(); 	
                if (list.size() > 0) {
    	           return false;
                } else {
                	locationCategoryRepository.save(locationCategory);
    	        return true;
       }
	}
	
	public void updateLocationCategory(LocationCategory locationCategory) {
		locationCategoryRepository.save(locationCategory);
	}
	
	public void deleteLocationCategory(int locationCategoryId) {
		locationCategoryRepository.delete(getLocationCategoryById(locationCategoryId));
	}
	
}
