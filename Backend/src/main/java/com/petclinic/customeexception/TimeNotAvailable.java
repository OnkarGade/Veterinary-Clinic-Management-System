package com.petclinic.customeexception;

public class TimeNotAvailable extends RuntimeException {
	public TimeNotAvailable(String mesg) {
		super(mesg);
	}
}
