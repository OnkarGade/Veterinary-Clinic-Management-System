package com.petclinic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.PetOwner;

public interface PetOwnerRepository extends JpaRepository<PetOwner, Long> {
	public Optional<PetOwner> findByOwnerId(Long id);
}
