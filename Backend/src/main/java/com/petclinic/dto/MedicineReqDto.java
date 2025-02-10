package com.petclinic.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Validated
@Getter
@Setter
@NoArgsConstructor
@ToString
public class MedicineReqDto {

	private Long prescriptionId;

	private String nameOfMedicine;

	private int qty;
}