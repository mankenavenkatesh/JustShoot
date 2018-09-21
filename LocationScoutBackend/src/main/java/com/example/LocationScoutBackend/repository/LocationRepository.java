package com.example.LocationScoutBackend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.LocationScoutBackend.models.Location;
import com.example.LocationScoutBackend.models.LocationCategory;

@RepositoryRestResource
public interface LocationRepository extends CrudRepository<Location, Long> {

	public List<Location> findByLocationOwnerId(Long locationOwnerId );
}