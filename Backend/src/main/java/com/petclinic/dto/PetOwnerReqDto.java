package com.petclinic.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.petclinic.pojos.Gender;
import com.petclinic.pojos.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PetOwnerReqDto {
	
	private String firstName;
	private String lastName;
	private LocalDate dob;
	private Role role;
	private Gender gender;
	private String password;
	private String email;
	private String phoneNo;	
	private String address;
	List<PetReqDto> petReqDtos=new ArrayList<>();
}
