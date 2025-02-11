package com.petclinic.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.MedicineReqDto;
import com.petclinic.dto.PrescriptionReqDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.service.DoctorService;

@RestController
@RequestMapping("/doctor")
@CrossOrigin(origins = "*")
public class DoctorController {
	
//	@Autowired
//	DoctorService docService; 
//	
//
//	
//	@PutMapping("/{dId}")
//	public ResponseEntity<?> updateDoctor(@RequestBody DoctorReqDto doctorReqDto,@PathVariable Long dId){
//		 Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//	        
//	        Long userId = (Long) auth.getCredentials();
//	        System.out.println("User id "+userId);
//		return ResponseEntity.ok(docService.updateDoctor(doctorReqDto,dId));
//	}
	  @Autowired
	  DoctorService docService;

	  @PutMapping(value = "/{dId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	  public ResponseEntity<?> updateDoctorProfile(@RequestPart("userReqDto") String userReqDtoJson,
	      @PathVariable Long dId, @RequestPart(value = "imageFile", required = false) MultipartFile imageFile)
	      throws IOException {
	//  public ResponseEntity<?> updateDoctorProfile(@RequestBody DoctorReqDto doctorReqDto, @PathVariable Long dId) {
	    System.out.println("In Doctor Controller - JSON String: " + userReqDtoJson);

	    // Convert JSON string to UserReqDto object
	    ObjectMapper objectMapper = new ObjectMapper();
	    objectMapper.findAndRegisterModules();
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

	  @GetMapping("/futureappts")
	  public ResponseEntity<?> getFutureAppts() {
	    System.out.println("in future appointments");
	    List<AppointmentRespDto> appointmentRespDtos = docService.getFutureAppts();
	    if (appointmentRespDtos.isEmpty())
	      return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	    return ResponseEntity.ok(appointmentRespDtos);
	  }
	  
	  @PostMapping("/addPrescription")
	  public ResponseEntity<?> addPrescription(@RequestBody PrescriptionReqDto prescriptionReqDto) {
	    System.out.println("In prescription of doctor");
	    return ResponseEntity.status(HttpStatus.CREATED).body(docService.addPrescription(prescriptionReqDto));
	  }

	  @PostMapping("/addMedicine")
	  public ResponseEntity<?> addMedicine(@RequestBody MedicineReqDto medicineReqDto) {
	    System.out.println("In Doctor Controller");
	    return ResponseEntity.status(HttpStatus.CREATED).body(docService.addMedicine(medicineReqDto));
	  }
	  
	  @GetMapping("/prescription/{pId}")
	  public ResponseEntity<?> getPrescription(@PathVariable Long pId ){
		  return ResponseEntity.ok(docService.getPrescription(pId));
	  }
	  
	 
}
