package com.petclinic.pojos;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="users")
@ToString
public class User extends BaseEntity{
	
	@Column(name="firstname",length = 50)
	private String firstName;
	@Column(name="lastname",length = 50)
	private String lastName;
	
	@Column(name="dob")
	private LocalDate dob;
	@Enumerated(EnumType.STRING)
	private Role role;
	@Column(length = 255)
	private String password;
	@Column(length = 50,unique = true,nullable = false)
	private String email;
	@Column(length = 13)
	private String phoneNo;
	@Column(length = 255)
	private String address;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	@Lob
	private byte[] image;

//	@OneToOne
//	@JoinColumn(name="owner_id")
//	private PetOwner petowner;
}
