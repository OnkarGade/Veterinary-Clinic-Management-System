package com.petclinic.dto;

import java.util.List;

import org.springframework.validation.annotation.Validated;

import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Role;
import com.petclinic.pojos.User;

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
public class DoctorResDto extends BaseDTO{
	
	private User doctor;
	private List<Appointment> appointments;
	private String degree;
	private String specialist;
	private String aadharNo;
}
