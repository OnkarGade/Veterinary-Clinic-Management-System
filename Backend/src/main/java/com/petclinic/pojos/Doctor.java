package com.petclinic.pojos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "doctors")
public class Doctor extends BaseEntity {

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid", unique = true, nullable = false)
	private User doctor;

//	@Lob
//	private byte[] image;

	@Column(length = 20)
	private String degree;

	@Column(length = 20)
	private String specialist;

	@Column(name = "aadhar_no", length = 12)
	private String aadharNo;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "doctor")
	@JsonManagedReference
	private List<Appointment> appointments;

	public Doctor(User u) {
		doctor = u;
	}

	public void addAppoint(Appointment appoint) {
		appointments.add(appoint);
		appoint.setDoctor(this);
	}

}
