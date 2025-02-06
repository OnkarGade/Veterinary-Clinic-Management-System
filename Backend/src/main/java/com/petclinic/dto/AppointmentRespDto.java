package com.petclinic.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.petclinic.pojos.Pet;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Status;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AppointmentRespDto extends BaseDTO{

	private Pet pet;

	private PetOwner owner;
	
//	private Receptionist receptionist;
	
//	private Doctor doctor;
	
	private LocalDate appointDate;
	
	private LocalTime appointTime;
	
	private Status status;
	
	private String illness;

}