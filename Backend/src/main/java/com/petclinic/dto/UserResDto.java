package com.petclinic.dto;

import java.time.LocalDate;

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
public class UserResDto extends BaseDTO {

	private String firstName;
	private String lastName;
	private LocalDate dob;
	private Role role;
	private String email;
	private String phoneNo;
	private String address;
}