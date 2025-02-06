package com.petclinic.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.petclinic.pojos.Gender;
import com.petclinic.pojos.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Validated
@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserReqDto {

	private String firstName;
	private String lastName;
	private LocalDate dob;
	private Role role;
	private Gender gender;
	private String password;
	private String email;
	private String phoneNo;
	private String address;
	@JsonIgnore
	private byte[] image;
}