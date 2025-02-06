package com.petclinic.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class AppointmentController {
	// today's appointment + pending ->for Receptionist
	// today's appointment + Approved -> for Doctor
}
