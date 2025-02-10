package com.petclinic.dto;

import java.time.LocalDate;

import org.springframework.validation.annotation.Validated;

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
public class UserResDto extends BaseDTO{
	
	private String firstName;
	private String lastName;
	//private int yearOfBirth;
	private LocalDate dob;
	private int age;
	private Role role;
	private String email;
	private String phoneNo;	
	private String address;
}
