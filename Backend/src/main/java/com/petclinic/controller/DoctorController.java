package com.petclinic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.service.DoctorService;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
	
	@Autowired
	DoctorService docService; 
	
	@GetMapping
	public ResponseEntity<?> listOfDoctor(){
		List<DoctorResDto> doctorResDtos=docService.getAllDoctors();
		if(doctorResDtos.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(doctorResDtos);
	}
	
	@PutMapping("/{dId}")
	public ResponseEntity<?> updateDoctor(@RequestBody DoctorReqDto doctorReqDto,@PathVariable Long dId){
		return ResponseEntity.ok(docService.updateDoctor(doctorReqDto,dId));
	}
	
	
}
