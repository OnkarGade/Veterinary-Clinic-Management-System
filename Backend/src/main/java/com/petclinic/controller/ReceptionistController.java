package com.petclinic.controller;

import java.util.List;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.service.ReceptionistService;

@RestController
@RequestMapping("/Receptionist")
public class ReceptionistController {

	@Autowired
	ReceptionistService recepService;
	
	@PostMapping("/add/appointment")
	public ResponseEntity<?> addAppointment(AppointReqDto appointReqDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(recepService.addAppoint(appointReqDto));
	}
	
	@PostMapping("/approve/addappointment/{aptId}/{recptId}")
	public ResponseEntity<?> approveAppointment(@PathVariable Long aptId,@PathVariable Long recptId ){
		return ResponseEntity.ok(recepService.approveAppoint(aptId,recptId));
	}
	
	@GetMapping("/getAppointments")
	public ResponseEntity<?> getAppointments(){
		List<AppointmentRespDto> appointmentRespDtos=recepService.getAppointments();
		if(appointmentRespDtos.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(appointmentRespDtos);
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
