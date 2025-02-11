package com.petclinic.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.UserReqDto;

public interface ReceptionistService {

//	public ApiResponse addAppoint(AppointReqDto appointReqDto);
	
	public ApiResponse approveAppointment(Long aptId);

//	public ApiResponse acceptAppoint(Long aptId, Long recptId);

	public List<AppointmentRespDto> getAppointments();

	//public List<ReceptionistsResDto> getReceptionists();
	
	public ApiResponse updateReceptionistProfile(UserReqDto userReqDto, Long dId, MultipartFile imageFile)
		      throws IOException;
	
	
}
