package com.petclinic.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Status;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	
	public List<Appointment> findByOwnerId(long id);
	
	public List<Appointment> findByOwnerIdAndStatus(long id,Status status);
	
	public List<Appointment> findByStatus(Status status);
	
	public Optional<Appointment> findByIdAndStatus(Long id,Status status);
	
	public int countByDoctorAndAppointDateAndAppointTimeBetween(Doctor doctor,LocalDate appointDat,LocalTime startOfHour,LocalTime endOfHour);
}
