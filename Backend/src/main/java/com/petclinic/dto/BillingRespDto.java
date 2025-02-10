package com.petclinic.dto;

import com.petclinic.pojos.BaseEntity;
import com.petclinic.pojos.Status;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BillingRespDto extends BaseEntity{
	
	PetRespDto2 petRespDto2;
	
	PetOwnerResDto2 petOwnerResDto2;
	

	private Status status;
	
	
	private double totalAmount;
	
	public BillingRespDto(PetRespDto2 petRespDto2, PetOwnerResDto2 petOwnerResDto2) {
		this.petRespDto2 = petRespDto2;
		this.petOwnerResDto2 = petOwnerResDto2;
	}
}
