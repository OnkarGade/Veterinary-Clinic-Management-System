package com.petclinic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
	public List<Medicine>findByPrescriptionAppointmentOwnerId(Long id);
}
