package com.petclinic.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointUserReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.PetOwnerReqDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.PetRespDto;
import com.petclinic.pojos.AppointmentUser;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Status;
import com.petclinic.repository.AppointmentUserRepository;
import com.petclinic.repository.PetOwnerRepository;
import com.petclinic.repository.PetRepository;

@Service
@Transactional
public class PetOwnerServiceImpl implements PetOwnerService{
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	AppointmentUserRepository appointUserRepo;
	
	@Autowired
	PetOwnerRepository petOwnerRepo;

	@Override
	public ApiResponse addAppointment(AppointUserReqDto appointUserReqDto) {
		AppointmentUser appointUser= mapper.map(appointUserReqDto,AppointmentUser.class);
		appointUser.setStatus(Status.PENDING);
		AppointmentUser perAppointUser=appointUserRepo.save(appointUser);
		return new ApiResponse(" Appointment Added Successfully!");
	}

	@Override
	public ApiResponse updatePetOwner(PetOwnerReqDto petOwnerReqDto, Long poId) {
		PetOwner po =petOwnerRepo.findById(poId).orElseThrow(()-> new UserNotFoundException("Invalid Id"));
		mapper.map(petOwnerReqDto, po);
		petOwnerRepo.save(po);
		return new ApiResponse("Pet Owner Updated Successfully");
	}

	@Override
	public List<PetOwnerResDto> getPetOwner() {
		List<PetOwnerResDto> petRespDtos=petOwnerRepo.findAll().stream().map(petOwner -> 
		mapper.map(petOwner, 
				PetOwnerResDto.class)).collect(Collectors.toList());
		
		for (PetOwnerResDto petRespDto : petRespDtos) {
			System.out.println(petRespDto.getOwner().getEmail());
		}
		return petRespDtos;
	
	}
	
	
	
}
