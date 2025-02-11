package com.petclinic.dto;

import com.petclinic.pojos.Gender;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PetRespDto2 extends BaseDTO{
	
//	private PetOwner owner;
	
	
	private String species;
	
	
	private String breed;

	
	private String name;
	
//	private int yearOfBirth;
	
	private int age;
	
	private Gender gender;
}
