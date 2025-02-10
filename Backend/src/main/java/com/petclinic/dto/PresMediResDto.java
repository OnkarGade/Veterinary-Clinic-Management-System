package com.petclinic.dto;

import java.time.LocalDateTime;

import com.petclinic.pojos.Prescription;
import com.petclinic.pojos.Status;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class PresMediResDto extends BaseDTO{
	
		
	private Prescription prescription;
	
	
	private String nameOfMedicine;
	
	private int qty;
	
}
