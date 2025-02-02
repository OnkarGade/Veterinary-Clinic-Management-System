package com.petclinic.pojos;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="petowners")
public class PetOwner extends BaseEntity {
	
	
	@OneToOne
	@JoinColumn(name="owner_id")
	private User owner;

	
	public PetOwner(User u) {
		owner=u;
	}
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval=true,mappedBy = "owner")
	@JsonManagedReference
	private List<Pet> pets;


	public void addPet(Pet p) {
		pets.add(p);
		p.setOwner(this);	
	}
}
