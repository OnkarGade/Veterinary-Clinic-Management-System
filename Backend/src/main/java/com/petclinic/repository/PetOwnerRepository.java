package com.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.PetOwner;

public interface PetOwnerRepository extends JpaRepository<PetOwner, Long> {

}
