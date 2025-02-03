package com.petclinic.dto;

import java.util.List;

import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReceptionistsResDto extends BaseDTO {
	
	private Long userId;

	private User receptionist;
	
	private List<Appointment> appointments;
	
	private String qualification;
	
	private String aadharNo;
	
	private byte[] image;
	
}
