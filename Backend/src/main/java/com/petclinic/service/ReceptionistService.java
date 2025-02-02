package com.petclinic.service;

import java.util.List;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.ReceptionistsResDto;

public interface ReceptionistService {

	public ApiResponse addAppoint(AppointReqDto appointReqDto);

	public ApiResponse approveAppoint(Long aptId, Long recptId);

	public List<AppointmentRespDto> getAppointments();

	public List<ReceptionistsResDto> getReceptionists();
	
	
}
