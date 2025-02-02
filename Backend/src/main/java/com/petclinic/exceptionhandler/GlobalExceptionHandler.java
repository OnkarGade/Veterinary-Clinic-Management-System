package com.petclinic.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.petclinic.customeexception.ApiException;
import com.petclinic.customeexception.ResourceNotFoundException;
import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	@ResponseStatus(value=HttpStatus.NOT_FOUND)
	public ApiResponse handleResourceNotFoundException(
			ResourceNotFoundException e) {
		return new ApiResponse(e.getMessage());
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	@ResponseStatus(value=HttpStatus.NOT_FOUND)
	public ApiResponse handleUserNotFoundException(
			UserNotFoundException e) {
		System.out.println("inside User Exception");
		return new ApiResponse(e.getMessage());
	}
	
	@ExceptionHandler(ApiException.class)
	@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR)
	public ApiResponse handleApiException(
			ResourceNotFoundException e) {
		return new ApiResponse(e.getMessage());
	}
}
