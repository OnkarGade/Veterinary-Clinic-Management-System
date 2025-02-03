package com.petclinic.pojos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "pets")
@Getter
@Setter
@NoArgsConstructor
public class Pet extends BaseEntity{
	
	@ManyToOne
	@JoinColumn(name="owner_id")
	@JsonBackReference
	private PetOwner owner;
	
	@Column(length=50)
	private String species;
	
	@Column(length=50)
	private String breed;
	
	@Column(length=50)
	private String name;
	
	@Column(name="yearofbirth")
	private int yearOfBirth;
	
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	
}	
