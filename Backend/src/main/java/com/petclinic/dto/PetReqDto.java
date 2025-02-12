package com.petclinic.dto;

import com.petclinic.pojos.Gender;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class PetReqDto {

//	private Long ownerId;
	
	
	private String species;
	
	
	private String breed;
	

	private String name;
	
	
	private int age;
	
	
	private Gender gender;
}
