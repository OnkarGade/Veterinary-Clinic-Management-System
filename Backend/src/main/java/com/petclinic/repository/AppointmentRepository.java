package com.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
