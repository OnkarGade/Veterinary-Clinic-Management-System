package com.petclinic.security;

import java.util.Collection;
import java.util.List;

import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Pet;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Receptionist;
import com.petclinic.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@Getter
@Setter
@NoArgsConstructor
public class CustomUserDetailsImpl implements UserDetails {
	private User user;
	private Doctor doctor;
	private Receptionist recep;
	private PetOwner petOwner;
	//private Pet pet;
	

	public CustomUserDetailsImpl(User User) {
		super();
		this.user = User;
	}
	
	public CustomUserDetailsImpl(Doctor doc) {
		this.doctor=doc;
	}
	
	public CustomUserDetailsImpl(Receptionist recep) {
		this.recep=recep;
	}

	public CustomUserDetailsImpl(PetOwner petOwner) {
		this.petOwner=petOwner;
	}

	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of
				(new SimpleGrantedAuthority(
						user.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
	}

	public User getUser() {
		return user;
	}
	

}
