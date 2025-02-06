package com.petclinic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.StaffReqDto;
import com.petclinic.service.AdminService;

@CrossOrigin(origins = "*")
@RequestMapping("/admin")
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping("/registerstaff")
	public ResponseEntity<?> addStaff(@RequestBody StaffReqDto sReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(adminService.RegStaff(sReqDto));
	}

	@GetMapping("/doctors")
	public ResponseEntity<?> listOfDoctors() {
		List<DoctorResDto> doctorResDtos = adminService.getAllDoctors();
		if (doctorResDtos.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(doctorResDtos);
	}

	@GetMapping("/receptionists")
	public ResponseEntity<?> getReceptionists() {
		List<ReceptionistsResDto> receptionistsResDtos = adminService.getReceptionists();
		if (receptionistsResDtos.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(receptionistsResDtos);
	}

	@PatchMapping("/deletestaff/{uId}")
	public ResponseEntity<?> softDeleteStaff(@PathVariable Long uId) {
		return ResponseEntity.ok(adminService.softDeleteStaff(uId));
	}
	
	@PatchMapping("/reinstatestaff/{uId}")
	public ResponseEntity<?> reinstateStaff(@PathVariable Long uId) {
		return ResponseEntity.ok(adminService.reinstateStaff(uId));
	}

}