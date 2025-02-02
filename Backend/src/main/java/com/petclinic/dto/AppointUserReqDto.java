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
public class AppointUserReqDto {
	
	private Long petId;
	
	private Long petOwnerId;
		
	private Long doctorId;
	
	private LocalDate appointDate;
	
	private LocalTime appointTime;
	
	private Status status;
	
	private String cause;
}
