package com.petclinic.service;

import java.util.List;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.PetReqDto;
import com.petclinic.dto.PetRespDto;

public interface PetService {

	public ApiResponse addPet(PetReqDto petReqDto) ;

	public List<PetRespDto> getAllPets();

	public ApiResponse updatePet(PetReqDto petReqDto, Long pId);

	public PetRespDto getPet(Long PId);
		
}