package com.petclinic.dto;

import java.util.List;

import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Gender;
import com.petclinic.pojos.Role;
import com.petclinic.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReceptionistsReqDto extends BaseDTO {

	private String firstName;
	private String lastName;
	private int yearOfBirth;
	private Role role;
	private Gender gender;
	private String password;
	private String email;
	private String phoneNo;
	private String address;

	private Long recepId;

	private Long userId;

	private User receptionist;

	private List<Appointment> appointments;

	private String qualification;

	private String aadharNo;

	private byte[] image;

}
