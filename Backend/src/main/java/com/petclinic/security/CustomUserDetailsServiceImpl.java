package com.petclinic.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Receptionist;
import com.petclinic.pojos.User;
import com.petclinic.repository.DoctorRepository;
import com.petclinic.repository.PetOwnerRepository;
import com.petclinic.repository.ReceptionistRepository;
import com.petclinic.repository.UserRepository;

@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService {
//depcy
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	PetOwnerRepository petOwnerRepo;
	
	@Autowired
	DoctorRepository docRepo;
	
	@Autowired
	ReceptionistRepository recepRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// invoke dao' s method
		System.out.println("inside loadUserByUsername : "+email);
		User user = userRepo.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Email not found !!!!!"));
		System.out.println("Fname = "+user.getFirstName());
		switch(user.getRole()) {
		 case PETOWNER:
			 //PetOwner po=new PetOwner();
			 PetOwner po=petOwnerRepo.findByOwnerId(user.getId()).orElseThrow(()->new UserNotFoundException("Invalid email"));
			 return new CustomUserDetailsImpl(po);
			 
		 case DOCTOR:
			 Doctor doc=docRepo.findByDoctorId(user.getId()).orElseThrow(()->new UserNotFoundException("Invalid email"));
			 return new CustomUserDetailsImpl(doc);
			 
		 case RECEPTIONIST:
			 Receptionist recp=recepRepo.findByReceptionistId(user.getId()).orElseThrow(()->new UserNotFoundException("Invalid email"));
		}
		//admin
		return new CustomUserDetailsImpl(user);
	}

}
