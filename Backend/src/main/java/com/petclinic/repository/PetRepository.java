package com.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Pet;

public interface PetRepository extends JpaRepository<Pet, Long> {	
	
}