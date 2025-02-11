package com.petclinic.dto;

import com.petclinic.pojos.Prescription;

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