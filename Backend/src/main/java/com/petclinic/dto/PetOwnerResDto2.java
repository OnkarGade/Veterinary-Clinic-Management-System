package com.petclinic.dto;

import com.petclinic.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PetOwnerResDto2{
	
	private User owner;
	
	//private List<Pet> pets;

}

