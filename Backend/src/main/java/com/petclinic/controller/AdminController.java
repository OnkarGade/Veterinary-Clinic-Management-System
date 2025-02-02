//package com.petclinic.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.petclinic.dto.StaffReqDto;
//import com.petclinic.dto.UserReqDto;
//import com.petclinic.service.AdminService;
//
//@RequestMapping("/Admin")
//@RestController
//public class AdminController {
//	
//	@Autowired
//	private AdminService as;
//	
//	@PostMapping("/RegisterStaff")
//	public ResponseEntity<?> addStaff(@RequestBody StaffReqDto sReqDto){
//			return ResponseEntity.status(HttpStatus.CREATED).body(as.RegStaff(sReqDto));
//	}
//}
