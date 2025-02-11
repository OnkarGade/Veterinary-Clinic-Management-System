package com.petclinic.pojos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "petowners")
public class PetOwner extends BaseEntity {

	@OneToOne
	@JoinColumn(name = "uid")
	private User owner;

	public PetOwner(User u) {
		owner = u;
	}

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "owner")
	@JsonManagedReference
	private List<Pet> pets;

	public void addPet(Pet p) {
		pets.add(p);
		System.out.println("Pet = "+p);
		p.setOwner(this);
	}
}