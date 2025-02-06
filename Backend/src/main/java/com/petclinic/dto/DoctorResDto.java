package com.petclinic.dto;

import java.util.List;

import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Validated
@Getter
@Setter
@NoArgsConstructor
@ToString
public class DoctorResDto extends BaseDTO {

//	private Long doctorId;

//	private Long userId;

	private User doctor; // If you just need to show the doctor's information along with the user ID
							// (e.g., for uploading/downloading an image), you can return both userId and
							// doctorId.
							// If you want to return detailed information about both the
							// Doctor and the User (such as their profile image, username, etc.),
							// you can embed the User object inside the DoctorDTO.

	private List<Appointment> appointments;
	private String image;
	private String degree;
	private String specialist;
	private String aadharNo;
}