package com.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {

}
