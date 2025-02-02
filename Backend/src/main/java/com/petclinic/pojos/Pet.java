package com.petclinic.pojos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
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
	
	
	private int year;
	
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	
}	
