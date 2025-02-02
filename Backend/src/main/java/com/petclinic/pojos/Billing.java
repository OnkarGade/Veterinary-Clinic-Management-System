package com.petclinic.pojos;


import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="billings")
public class Billing extends BaseEntity{
	
	@OneToOne
	@JoinColumn(name="presc_id",nullable = false,unique = true)
	private Prescription prescription;
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	@Column(name="total_amount")
	private double totalAmount;
	
	@Column(name="billing_date")
	private LocalDateTime billDate;

}
