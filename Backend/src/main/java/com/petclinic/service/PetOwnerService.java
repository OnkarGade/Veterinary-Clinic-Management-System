package com.petclinic.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.AppointmentRespDto2;
import com.petclinic.dto.DoctorResDto2;
import com.petclinic.dto.PetOwnerReqDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.PetRespDto;
import com.petclinic.dto.UserReqDto;

public interface PetOwnerService {

	public ApiResponse addAppointment(AppointReqDto appointReqDto);

	public ApiResponse updatePetOwnerProfile(UserReqDto userReqDto, Long poId, MultipartFile imageFile) throws IOException;

	public List<PetOwnerResDto> getPetOwner();
	
	public List<PetRespDto> getPetByPetOwnerId();

	public List<DoctorResDto2> availableDoctor();

	public List<AppointmentRespDto2> getPendAppAppointments();

	public List<AppointmentRespDto2> getCompletedAppointments();

}
