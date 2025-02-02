package com.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Receptionist;

public interface ReceptionistRepository extends JpaRepository<Receptionist, Long> {

}
