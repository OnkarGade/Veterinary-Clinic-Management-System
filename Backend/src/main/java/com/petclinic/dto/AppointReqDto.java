package com.petclinic.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.petclinic.pojos.Status;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AppointReqDto {
	
	private Long petId;
	
//	private Long petOwnerId;
	
	private Long recepId;
	
	private Long doctorId;

	private LocalDate appointDate;
	
	private LocalTime appointTime;
	
	private Status status;

	private String illness;
}