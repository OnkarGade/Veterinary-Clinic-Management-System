package com.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.AppointmentUser;

public interface AppointmentUserRepository extends JpaRepository<AppointmentUser, Long> {

}
