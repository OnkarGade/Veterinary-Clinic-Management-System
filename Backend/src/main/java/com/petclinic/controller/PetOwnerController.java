package com.petclinic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinic.dto.AppointUserReqDto;
import com.petclinic.dto.PetOwnerReqDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.service.PetOwnerService;

@RestController
@RequestMapping("/petowner")
public class PetOwnerController {

	@Autowired
	PetOwnerService petOwnerService;
	
	@PostMapping("/addAppointment")
	public ResponseEntity<?> addAppoint(AppointUserReqDto appointUserReqDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(petOwnerService.addAppointment(appointUserReqDto));
	}
	
	@PutMapping("/poId")
	public ResponseEntity<?> updatePetOwner(@RequestBody PetOwnerReqDto petOwnerReqDto,@PathVariable Long poId){
		return ResponseEntity.ok(petOwnerService.updatePetOwner(petOwnerReqDto,poId));
	}
	
	@GetMapping
	public ResponseEntity<?> getPetOwner(){
		List<PetOwnerResDto> petOwnerResDtos=petOwnerService.getPetOwner();
		return ResponseEntity.ok(petOwnerService.getPetOwner());
	}
	
	//Adding get po
}
