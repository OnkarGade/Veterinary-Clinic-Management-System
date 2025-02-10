package com.petclinic.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Gender;
import com.petclinic.pojos.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
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
	
	//private byte[] image;
	
	private String degree;
	
	private String specialist;
	
	private String aadharNo;
	
	

}
