package com.example.LocationScoutBackend.models;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="locationcategory")
public class LocationCategory {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	
	private String locationCategoryName;

	
	
	public String getLocationCategoryName() {
		return locationCategoryName;
	}

	public void setLocationCategoryName(String locationCategoryName) {
		this.locationCategoryName = locationCategoryName;
	}
	
    public Long getId() {
        return id;
    }
    	
}
