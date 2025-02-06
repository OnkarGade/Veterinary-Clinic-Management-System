package com.petclinic.dto;

import java.util.List;

import com.petclinic.pojos.Pet;
import com.petclinic.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PetOwnerResDto {

//	private Long userId;

	private User owner;

	private List<Pet> pets;

}