package com.petclinic.customeexception;

public class ApiException extends RuntimeException {
	public ApiException(String mesg) {
		super(mesg);
	}
}
