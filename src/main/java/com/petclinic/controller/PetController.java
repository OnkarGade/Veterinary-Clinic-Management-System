package com.petclinic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinic.dto.PetReqDto;
import com.petclinic.dto.PetRespDto;
import com.petclinic.service.PetService;

@RestController
@RequestMapping("/pet")
@CrossOrigin(origins = "*")
public class PetController {

	@Autowired
	PetService petService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addPet(@RequestBody PetReqDto petReqDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(petService.addPet(petReqDto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllPet(){
		List<PetRespDto> petRespDtos= petService.getAllPets();
		if(petRespDtos.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(petService.getAllPets());
	}
	
	@GetMapping("/{pId}")
	public ResponseEntity<?> getPetById(@PathVariable Long pId){
		return ResponseEntity.ok(petService.getPet(pId));
	}
	
//	@GetMapping("/petowner/{poId}")
//	public ResponseEntity<?> getPetByPetOwnerId(@PathVariable Long poId){
//		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        
//        Long userId = (Long) auth.getCredentials();
//        System.out.println("User id "+userId);
//		return ResponseEntity.ok(petService.getPetByPetOwnerId(userId));
//	}
	
//	@GetMapping("/petowner")
//	public ResponseEntity<?> getPetByPetOwnerId(){
//		
//		return ResponseEntity.ok(petService.getPetByPetOwnerId());
//	}
	
	@PutMapping("/{pId}")
	public ResponseEntity<?> updatePet(@RequestBody PetReqDto petReqDto,@PathVariable Long pId){
		return ResponseEntity.ok(petService.updatePet(petReqDto,pId));
	}
	
	
		
	
}
