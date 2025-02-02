package com.petclinic.service;

import java.util.List;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointUserReqDto;
import com.petclinic.dto.PetOwnerReqDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.PetRespDto;

public interface PetOwnerService {

	public ApiResponse addAppointment(AppointUserReqDto appointUserReqDto);

	public ApiResponse updatePetOwner(PetOwnerReqDto petOwnerReqDto, Long poId);

	public List<PetOwnerResDto> getPetOwner();

}
