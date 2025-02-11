package com.petclinic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Receptionist;

public interface ReceptionistRepository extends JpaRepository<Receptionist, Long> {
		public  Optional<Receptionist> findByReceptionistId(long id);
}
