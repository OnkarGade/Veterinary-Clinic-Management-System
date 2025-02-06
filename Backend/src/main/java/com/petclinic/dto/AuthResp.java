package com.petclinic.dto;

import com.petclinic.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthResp {
	private String message;
	private String jwt;
	private Role role; 
}
