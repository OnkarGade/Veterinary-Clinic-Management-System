package com.petclinic.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="medicines")
public class Medicine extends BaseEntity{
    
	//@OneToOne
	@ManyToOne
	@JoinColumn(name="presc_id",nullable = false,unique = true)
	private Prescription prescription;
	
	@Column(nullable = false,unique = true)
	private String nameOfMedicine;
	
	private int qty;
	
//	@Column(name="amount_of_medicine")
//	private double amountOfMedicine;
}
