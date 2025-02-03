package com.petclinic.controller;

import java.io.IOException;
import java.util.List;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.ReceptionistsReqDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.service.ReceptionistService;

@RestController
@RequestMapping("/Receptionist")
public class ReceptionistController {

	@Autowired
	ReceptionistService recepService;
	
//	@PostMapping("/add/appointment")
//	public ResponseEntity<?> addAppointment(AppointReqDto appointReqDto){
//		return ResponseEntity.status(HttpStatus.CREATED).body(recepService.addAppoint(appointReqDto));
//	}
//	
//	@PostMapping("/accept/appointment/{aptId}/{recptId}")
//	public ResponseEntity<?> acceptAppoint(@PathVariable Long aptId,@PathVariable Long recptId ){
//		return ResponseEntity.ok(recepService.acceptAppoint(aptId,recptId));
//	}
	
	@PutMapping("/approveAppointment/{aptId}/{recptId}")
	public ResponseEntity<?> approveAppointment(@PathVariable Long aptId, @PathVariable Long recptId){
		return ResponseEntity.ok(recepService.approveAppointment(aptId, recptId));
	}

	@GetMapping("/getAppointments")
	public ResponseEntity<?> getAppointments(){
		List<AppointmentRespDto> appointmentRespDtos=recepService.getAppointments();
		if(appointmentRespDtos.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(appointmentRespDtos);
	}
	
//	@PutMapping("/{dId}")
//	public ResponseEntity<?> updateReceptionistProfile(@RequestBody ReceptionistsReqDto receptionistsReqDto, @PathVariable Long recepId) {
//		System.out.println("in recep controller - " + receptionistsReqDto + " " + recepId);
//		return ResponseEntity.ok(recepService.updateReceptionistProfile(receptionistsReqDto, recepId));
//	}
	
	
	@PutMapping(value = "/{dId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updateReceptionistProfile(@RequestPart("userReqDto") String userReqDtoJson,
			@PathVariable Long dId, @RequestPart(value = "imageFile", required = false) MultipartFile imageFile)
			throws IOException {
//	public ResponseEntity<?> updateDoctorProfile(@RequestBody DoctorReqDto doctorReqDto, @PathVariable Long dId) {
		System.out.println("In recep Controller - JSON String: " + userReqDtoJson);

		// Convert JSON string to UserReqDto object
		ObjectMapper objectMapper = new ObjectMapper();
		UserReqDto userReqDto = objectMapper.readValue(userReqDtoJson, UserReqDto.class);

		return ResponseEntity.ok(recepService.updateReceptionistProfile(userReqDto, dId, imageFile));
	}
	
	
	
	@GetMapping
	public ResponseEntity<?> getReceptionists(){
		List<ReceptionistsResDto> receptionistsResDtos=recepService.getReceptionists();
		if(receptionistsResDtos.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(receptionistsResDtos);
	}
	
	//update recept,petowner,pet
}
