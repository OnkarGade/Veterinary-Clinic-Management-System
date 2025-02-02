//package com.petclinic.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.petclinic.pojos.User;
//import com.petclinic.repository.UserRepository;
//
//@Service
//@Transactional
//public class CustomUserDetailsServiceImpl implements UserDetailsService {
////depcy
//	@Autowired
//	private UserRepository userRepository;
//
//	@Override
//	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//		// invoke dao' s method
//		User userEntity = userRepository.findByEmail(email)
//				.orElseThrow(() -> new UsernameNotFoundException("Email not found !!!!!"));
//		System.out.println("heell2");
//		return new CustomUserDetailsImpl(userEntity);
//	}
//
//}
