package com.petclinic.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	public Optional<Doctor> findByDoctorId(Long id);
	public List<Doctor> findByIsActive(boolean isActive);
}
