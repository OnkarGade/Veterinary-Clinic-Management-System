package com.petclinic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AuthRequest;
import com.petclinic.dto.AuthResp;
import com.petclinic.dto.StaffReqDto;
import com.petclinic.dto.UserReqDto;
//import com.petclinic.security.JwtUtils;
import com.petclinic.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
//	@Autowired
//	private AuthenticationManager authenticationManager;
//	@Autowired
//	private JwtUtils jwtUtils;

	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserReqDto userReqDto){
		return  ResponseEntity.status(HttpStatus.CREATED).body(userService.Register(userReqDto));
	}
	
	@PostMapping("/registerStaff")
	public ResponseEntity<?> addStaff(@RequestBody StaffReqDto sReqDto){
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.RegStaff(sReqDto));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody UserReqDto userReqDto){
		return  ResponseEntity.status(HttpStatus.OK).body(userService.login(userReqDto));
	}
	
//	@PostMapping("/signin")
//	
//	public ResponseEntity<?> userSignIn(@RequestBody AuthRequest dto) {
//		
//		System.out.println("heell");
//		System.out.println(dto.getEmail());
//		UsernamePasswordAuthenticationToken 
//		authenticationToken = new UsernamePasswordAuthenticationToken(dto.getEmail(),dto.getPassword());
//		
//		
//		
//		Authentication authToken = 
//				authenticationManager.authenticate(authenticationToken);
//		
//		
//		System.out.println(authToken.isAuthenticated());
//
//		return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResp("Successful Auth !",
//				jwtUtils.generateJwtToken(authToken)));		
//		
//	}
	
	

}
