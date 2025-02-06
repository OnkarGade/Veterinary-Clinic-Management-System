package com.petclinic.dto;


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
public class DoctorReqDto {

	private String firstName;

	private String lastName;

//	private int age;

	private Role role;

	private String password;

	private String email;

	private String phoneNo;

	private String address;

	private Gender gender;

//	private String image;

	private String degree;

	private String specialist;

	private String aadharNo;

}
