package com.petclinic.pojos;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "appointments")
public class Appointment extends BaseEntity {

	@ManyToOne
	@JoinColumn(name = "pet_id")
	private Pet pet;

	@ManyToOne
	@JoinColumn(name = "owner_id")
	private PetOwner owner;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "receptionist_id")
	private Receptionist receptionist;

	@ManyToOne
	@JoinColumn(name = "doctor_id")
	@JsonBackReference
	private Doctor doctor;

	@Column(name = "appoint_date")
	private LocalDate appointDate;

	@Column(name = "appoint_time")
	private LocalTime appointTime;

	@Enumerated(EnumType.STRING)
	private Status status;

	@Column(length = 100)
	private String illness;

//	@org.springframework.data.annotation.Version
//    @Column(name = "version")
//    private Long version;  // Version field for optimistic locking
//	
}
