package com.petclinic.pojos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "receptionists")
@Getter
@Setter
@NoArgsConstructor
public class Receptionist extends BaseEntity {

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid", unique = true, nullable = false)
	private User receptionist;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "receptionist")
	@JsonManagedReference
	private List<Appointment> appointments;
//
//	@Lob
//	private byte[] image;

	@Column(length = 20)
	private String qualification;

	@Column(name = "aadhar_no", length = 12)
	private String aadharNo;

	public Receptionist(User u) {
		receptionist = u;
	}

	public void addAppoint(Appointment appoint) {
		appointments.add(appoint);
		appoint.setReceptionist(this);

	}

}
