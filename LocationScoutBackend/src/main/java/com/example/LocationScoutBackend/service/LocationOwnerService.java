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
	
	public List<LocationOwner> getAllLocationOwners(){
		List<LocationOwner> list = new ArrayList<LocationOwner>();
		locationOwnerRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	public synchronized boolean addLocationOwner(LocationOwner locationOwner){
	        List<LocationOwner> list = new ArrayList<>(); 	
                if (list.size() > 0) {
    	           return false;
                } else {
                	locationOwnerRepository.save(locationOwner);
    	        return true;
       }
	}
	
	public void updateLocationOwner(LocationOwner locationOwner) {
		locationOwnerRepository.save(locationOwner);
	}
	
	public void deleteLocationOwner(int locationOwnerId) {
		locationOwnerRepository.delete(getLocationOwnerById(locationOwnerId));
	}
	
}
