package com.example.LocationScoutBackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.LocationScoutBackend.models.LocationOwner;

@RepositoryRestResource
public interface LocationOwnerRepository extends CrudRepository<LocationOwner, Long> {

}
