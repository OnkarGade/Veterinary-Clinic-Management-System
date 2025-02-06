package com.petclinic.dto;

import java.time.LocalDate;

import com.petclinic.pojos.Gender;
import com.petclinic.pojos.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class StaffReqDto {
	
	private String firstName;
	private String lastName;
	private LocalDate dob;
	private Gender gender;
	private Role role;
	private String password;
	private String email;
	private String phoneNo;	
	private String address;
	private String degree;
	private String specialist;
	private String qualification;
	private String aadharNo;
	
}
