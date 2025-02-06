package com.petclinic.pojos;

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
	
	@Column(name="age")
	private int age;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
}	