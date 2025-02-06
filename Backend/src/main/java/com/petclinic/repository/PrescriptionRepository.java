package com.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
	
}