package com.example.LocationScoutBackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LocationScoutBackend.models.LocationOwner;
import com.example.LocationScoutBackend.repository.LocationOwnerRepository;

@Service
public class LocationOwnerService {

	@Autowired
	LocationOwnerRepository locationOwnerRepository;
	
	
	public LocationOwner getLocationOwnerById(long locationOwnerId) {
		LocationOwner obj = locationOwnerRepository.findById(locationOwnerId).get();			
		return obj;
	}	
	
	public LocationOwner getLocationOwnerByUserName(String userName){
		LocationOwner obj = locationOwnerRepository.findByUserName(userName);
		return obj;
	}
		
	public List<LocationOwner> getAllLocationOwners(){
		List<LocationOwner> list = new ArrayList<LocationOwner>();
		locationOwnerRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	public LocationOwner addLocationOwner(LocationOwner locationOwner){	        
		return locationOwnerRepository.save(locationOwner);    	        
	}
	
	public LocationOwner updateLocationOwner(LocationOwner locationOwner) {
		return locationOwnerRepository.save(locationOwner);
	}
	
	public void deleteLocationOwner(long locationOwnerId) {
		locationOwnerRepository.deleteById(locationOwnerId);
	}
	
}
