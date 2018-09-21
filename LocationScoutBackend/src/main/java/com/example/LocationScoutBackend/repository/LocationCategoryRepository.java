package com.example.LocationScoutBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.LocationScoutBackend.models.LocationCategory;

@RepositoryRestResource
public interface LocationCategoryRepository extends CrudRepository<LocationCategory, Long> {

}