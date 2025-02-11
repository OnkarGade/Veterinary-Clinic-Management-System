package com.petclinic.pojos;

public enum Status {
	PENDING, APPROVED, COMPLETED, DENIED /*, ACCEPTED */
}

// We added DENIED later so we have to drop database so that entry can be made.

/*
 * PENDING - Appointment is requested by pet owner and not yet approved by the receptionist
 * Also, if petowner comes offline, his appointment will be registered but will be in pending status
 * 
 * APPROVED - Receptionist has approved appointment which was requested by pet owner (which was pending) -- also offline wala case
 * 
 * COMPLETED - Doctor has seen patient -- approved se completed me jayega
 * 
 * ACCEPTED - Petowner ne jo appointment book ki hai wo accept ho gyi hai
 */
/*
 * Pet owner will see any of these 4 status
 */