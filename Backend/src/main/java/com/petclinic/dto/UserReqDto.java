package com.petclinic.dto;

import org.springframework.validation.annotation.Validated;

import com.petclinic.pojos.Gender;
import com.petclinic.pojos.Role;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Lob;
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
	private int age;
	private Role role;
	private Gender gender;
	private String password;
	private String email;
	private String phoneNo;	
	private String address;
}
