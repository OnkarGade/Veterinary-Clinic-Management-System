package com.petclinic.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class BaseDTO {
	
	private Long id;
	
//	private LocalDate createdOn;
//	
//	private LocalDateTime updatedOn;
	
	private boolean isAvailable;
}