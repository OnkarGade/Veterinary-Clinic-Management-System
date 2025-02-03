package com.petclinic.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.service.DoctorService;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	DoctorService docService;

	@GetMapping
	public ResponseEntity<?> listOfDoctors() {
		List<DoctorResDto> doctorResDtos = docService.getAllDoctors();
		if (doctorResDtos.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(doctorResDtos);
	}

	@PutMapping(value = "/{dId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updateDoctorProfile(@RequestPart("userReqDto") String userReqDtoJson,
			@PathVariable Long dId, @RequestPart(value = "imageFile", required = false) MultipartFile imageFile)
			throws IOException {
//	public ResponseEntity<?> updateDoctorProfile(@RequestBody DoctorReqDto doctorReqDto, @PathVariable Long dId) {
		System.out.println("In Doctor Controller - JSON String: " + userReqDtoJson);

		// Convert JSON string to UserReqDto object
		ObjectMapper objectMapper = new ObjectMapper();
		UserReqDto userReqDto = objectMapper.readValue(userReqDtoJson, UserReqDto.class);

		return ResponseEntity.ok(docService.updateDoctor(userReqDto, dId, imageFile));
	}

	@GetMapping("/todaysappts")
	public ResponseEntity<?> getTodaysAppts() {
		System.out.println("in today's appointments");
		List<AppointmentRespDto> appointmentRespDtos = docService.getTodaysAppts();
		if (appointmentRespDtos.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(appointmentRespDtos);
	}

}