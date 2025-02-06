package com.petclinic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Status;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	public List<Appointment> findByOwnerId(long id);

	public List<Appointment> findByOwnerIdAndStatus(long id, Status status);
	
	public List<Appointment> findByStatus(Status status);
}
