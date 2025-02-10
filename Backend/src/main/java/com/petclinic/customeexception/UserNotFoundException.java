package com.petclinic.customeexception;

public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException(String mesg) {
		super(mesg);
	}
}
