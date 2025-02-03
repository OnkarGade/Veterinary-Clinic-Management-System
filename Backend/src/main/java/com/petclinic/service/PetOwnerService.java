package com.petclinic.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.PetOwnerReqDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.UserReqDto;

public interface PetOwnerService {

	public ApiResponse addAppointment(AppointReqDto appointUserReqDto);

//	public ApiResponse updatePetOwner(PetOwnerReqDto petOwnerReqDto, Long poId);

	public List<PetOwnerResDto> getPetOwner();

	public ApiResponse updatePetOwnerProfile(UserReqDto userReqDto, Long poId, MultipartFile imageFile) throws IOException;
	
}

