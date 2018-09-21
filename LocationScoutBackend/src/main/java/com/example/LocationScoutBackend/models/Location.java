package com.example.LocationScoutBackend.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
 
@Entity
@Table(name="location")
public class Location { 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
 
    private String locationName;
    private String latitude;
    private String longitude;
    private String type;
    private String displayImg;
 
    @ManyToOne(cascade = CascadeType.ALL)
    private LocationOwner locationOwner;
    
    
    public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDisplayImg() {
		return displayImg;
	}

	public void setDisplayImg(String displayImg) {
		this.displayImg = displayImg;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public LocationOwner getLocationOwner() {
		return locationOwner;
	}

	public void setLocationOwner(LocationOwner locationOwner) {
		this.locationOwner = locationOwner;
	}
 
    
    
}