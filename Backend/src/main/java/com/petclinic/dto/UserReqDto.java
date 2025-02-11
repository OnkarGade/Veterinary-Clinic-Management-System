package com.petclinic.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
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
	//private int yearOfBirth;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate dob;
	private Role role;
	private Gender gender;
	private String password;
	private String email;
	private String phoneNo;	
	private String address;
	private byte[] image;
}
