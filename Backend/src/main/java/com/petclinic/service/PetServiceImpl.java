package com.petclinic.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.PetReqDto;
import com.petclinic.dto.PetRespDto;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Pet;
import com.petclinic.pojos.PetOwner;
import com.petclinic.repository.PetOwnerRepository;
import com.petclinic.repository.PetRepository;

@Service
@Transactional
public class PetServiceImpl implements PetService {
	
	@Autowired
	PetRepository petRepository;
	
	@Autowired
	PetOwnerRepository petOwnerRepository;
	
	@Autowired
	ModelMapper mapper;

	@Override
	public ApiResponse addPet(PetReqDto petReqDto) {
		PetOwner po=petOwnerRepository.findById(petReqDto.getOwnerId()).orElseThrow(()->new UserNotFoundException("Invalid User Id"));
		Pet p=mapper.map(petReqDto, Pet.class);
		po.addPet(p);
		
		return new ApiResponse("Pet Added Successfully!!");
	}

	@Override
	public List<PetRespDto> getAllPets() {
		return  petRepository.findAll().stream().map(pet -> 
		mapper.map(pet, 
				PetRespDto.class)).collect(Collectors.toList());
		
		
	}
	
	@Override
	public PetRespDto getPet(Long PId) {
		 Pet p=petRepository.findById(PId).orElseThrow(()->new UserNotFoundException("Invlaid Id"));
		return  mapper.map(p,PetRespDto.class);
		
	}
	
	

	@Override
	public List<PetRespDto> getPetByPetOwnerId(Long poId) {
		PetOwner po=  petOwnerRepository.findById(poId).orElseThrow(()->new UserNotFoundException("Invalid Id"));
		return po.getPets().stream().map(pet-> mapper.map(pet,PetRespDto.class)).collect(Collectors.toList());
		 
	}

	@Override
	public ApiResponse updatePet(PetReqDto petReqDto, Long pId) {
		Pet pet=petRepository.findById(pId).orElseThrow(()->new UserNotFoundException("Invlaid Id"));
		mapper.map(petReqDto, pet);
		petRepository.save(pet);
		return new ApiResponse("pet is Updated Successfully");
	}
	
}
