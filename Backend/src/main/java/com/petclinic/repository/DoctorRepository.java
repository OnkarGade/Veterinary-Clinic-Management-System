package com.petclinic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

	public Optional<Doctor> findByDoctorId(Long id);
}
