package com.petclinic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.petclinic.pojos.PetOwner;

public interface PetOwnerRepository extends JpaRepository<PetOwner, Long> {
	
	
	public Optional<PetOwner> findByOwnerId(Long id);
	
//	 @Query("SELECT po FROM PetOwner po LEFT JOIN FETCH po.pets p WHERE po.owner.id = :id AND (p.isActive = true OR p IS NULL)")
//	 public Optional<PetOwner> findByOwnerIdWithActivePets(@Param("id") Long id);

}
