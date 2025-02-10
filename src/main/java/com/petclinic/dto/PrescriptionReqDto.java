package com.petclinic.dto;

import com.petclinic.pojos.BaseEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class PrescriptionReqDto{

	private Long aptId;

	private String diagnosis;

	private String prescriptionAdvice;
}
