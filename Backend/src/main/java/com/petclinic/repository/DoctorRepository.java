package com.petclinic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Doctor;
import java.util.List;


public interface DoctorRepository extends JpaRepository<Doctor, Long> {

	public Optional<Doctor> findByDoctorId(Long id);
	
	public List<Doctor> findByIsActive(boolean isActive);
}
