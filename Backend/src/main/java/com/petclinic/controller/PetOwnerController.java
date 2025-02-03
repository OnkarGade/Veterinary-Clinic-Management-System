package com.petclinic.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.PetOwnerReqDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.service.PetOwnerService;

@RestController
@RequestMapping("/petowner")
public class PetOwnerController {

	@Autowired
	PetOwnerService petOwnerService;

	@PostMapping("/addAppointment")
	public ResponseEntity<?> addAppoint(@RequestBody AppointReqDto appointReqDto) {
//		System.out.println("in add app. user - controller " + appointUserReqDto.getDoctorId() + " "
//				+ appointUserReqDto.getPetId() + " " + appointUserReqDto.getPetOwnerId());
		return ResponseEntity.status(HttpStatus.CREATED).body(petOwnerService.addAppointment(appointReqDto));
	}

//	@PutMapping("/poId")
//	public ResponseEntity<?> updatePetOwner(@RequestBody PetOwnerReqDto petOwnerReqDto, @PathVariable Long poId) {
//		return ResponseEntity.ok(petOwnerService.updatePetOwner(petOwnerReqDto, poId));
//	}

	@PutMapping(value = "/{poId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updatePetOwnerProfile(@RequestPart("userReqDto") String userReqDtoJson,
			@PathVariable Long poId, @RequestPart(value = "imageFile", required = false) MultipartFile imageFile)
			throws IOException {
//	public ResponseEntity<?> updateDoctorProfile(@RequestBody DoctorReqDto doctorReqDto, @PathVariable Long dId) {
		System.out.println("In PetOwner Controller - JSON String: " + userReqDtoJson);

		// Convert JSON string to UserReqDto object
		ObjectMapper objectMapper = new ObjectMapper();
		UserReqDto userReqDto = objectMapper.readValue(userReqDtoJson, UserReqDto.class);

		return ResponseEntity.ok(petOwnerService.updatePetOwnerProfile(userReqDto, poId, imageFile));
	}

	@GetMapping
	public ResponseEntity<?> getPetOwner() {
		List<PetOwnerResDto> petOwnerResDtos = petOwnerService.getPetOwner();
		return ResponseEntity.ok(petOwnerService.getPetOwner());
	}

}
