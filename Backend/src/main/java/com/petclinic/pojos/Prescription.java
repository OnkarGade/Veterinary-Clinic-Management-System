package com.petclinic.pojos;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "prescriptions")
public class Prescription extends BaseEntity {
	
	@OneToOne
	@JoinColumn(name="appointment_id",nullable =  false,unique =true)
	private Appointment appointment;
	
	@Column(length=60)
	private String diagnosisCause;
	
	@Lob
	private String prescriptionAdvice;
	
}
