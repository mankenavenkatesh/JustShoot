package com.example.LocationScoutBackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LocationScoutBackend.models.Location;
import com.example.LocationScoutBackend.repository.LocationRepository;

@Service
public class LocationService {

	@Autowired
	LocationRepository locationRepository;

	public List<Location> getAllLocations(Long locationOwnerId){
		List<Location> list = new ArrayList<Location>();
		locationRepository.findByLocationOwnerId(locationOwnerId).forEach(e -> list.add(e));
		return list;
	}
	
	public List<Location> getAllLocations(){
		List<Location> list = new ArrayList<Location>();
		locationRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	public Location getLocationById(long locationId) {
		Location obj = locationRepository.findById(locationId).get();
		return obj;
	}
	
	public void addLocation(Location location){
		locationRepository.save(location);		       
	}
	
	public void updateLocation(Location location) {
		locationRepository.save(location);
	}
	
	public void deleteLocation(Long locationId) {
		locationRepository.deleteById(locationId);
	}
	
}
