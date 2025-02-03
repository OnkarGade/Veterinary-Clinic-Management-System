package com.petclinic.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.petclinic.customeexception.ResourceNotFoundException;
import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.PetOwnerReqDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Pet;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Status;
import com.petclinic.pojos.User;
import com.petclinic.repository.AppointmentRepository;
import com.petclinic.repository.DoctorRepository;
import com.petclinic.repository.PetOwnerRepository;
import com.petclinic.repository.PetRepository;
import com.petclinic.repository.UserRepository;

@Service
@Transactional
public class PetOwnerServiceImpl implements PetOwnerService {

	@Autowired
	ModelMapper mapper;

	@Autowired
	AppointmentRepository appointRepo;

	@Autowired
	PetOwnerRepository petOwnerRepo;
	@Autowired
	PetRepository petRepo;
	@Autowired
	DoctorRepository doctorRepo;
	@Autowired
	UserRepository userRepo;

	@Override
	public ApiResponse addAppointment(AppointReqDto appointReqDto) {
		System.out.println("AppointUserReqDto : doctor id - " + appointReqDto.getDoctorId());
		Pet pet = petRepo.findById(appointReqDto.getPetId())
				.orElseThrow(() -> new ResourceNotFoundException("Pet Id invalid"));
		PetOwner petOwner = petOwnerRepo.findById(appointReqDto.getPetOwnerId())
				.orElseThrow(() -> new ResourceNotFoundException("Pet Owner Id invalid"));
		Doctor doctor = doctorRepo.findById(appointReqDto.getDoctorId())
				.orElseThrow(() -> new ResourceNotFoundException("Doctor Id invalid"));
		Appointment appoint = mapper.map(appointReqDto, Appointment.class);
		appoint.setDoctor(doctor);
		appoint.setPet(pet);
		appoint.setOwner(petOwner);
		appoint.setStatus(Status.PENDING);
		System.out.println(appoint);
		Appointment Appoint = appointRepo.save(appoint);
		return new ApiResponse(" Appointment Added Successfully!");
	}

//	@Override
//	public ApiResponse updatePetOwner(PetOwnerReqDto petOwnerReqDto, Long poId) {
//		PetOwner po = petOwnerRepo.findById(poId).orElseThrow(() -> new UserNotFoundException("Invalid Id"));
////		 Update only non-null fields from DoctorReqDto
//		if (petOwnerReqDto.getFirstName() != null) {
//			po.getOwner().setFirstName(petOwnerReqDto.getFirstName());
//		}
//		if (petOwnerReqDto.getLastName() != null) {
//			po.getOwner().setLastName(petOwnerReqDto.getLastName());
//		}
//		if (petOwnerReqDto.getPhoneNo() != null) {
//			po.getOwner().setPhoneNo(petOwnerReqDto.getPhoneNo());
//		}
//		if (petOwnerReqDto.getAddress() != null) {
//			po.getOwner().setAddress(petOwnerReqDto.getAddress());
//		}
//		if (petOwnerReqDto.getPassword() != null) {
//			po.getOwner().setPassword(petOwnerReqDto.getPassword());
//		}
//		if (petOwnerReqDto.getEmail() != null) {
//			po.getOwner().setEmail(petOwnerReqDto.getEmail());
//		}
//		return new ApiResponse("Pet Owner Updated Successfully");
//	}

	@Override
	public List<PetOwnerResDto> getPetOwner() {
		List<PetOwnerResDto> petRespDtos = petOwnerRepo.findAll().stream()
				.map(petOwner -> mapper.map(petOwner, PetOwnerResDto.class)).collect(Collectors.toList());

		for (PetOwnerResDto petRespDto : petRespDtos) {
			System.out.println(petRespDto.getOwner().getEmail());
		}
		return petRespDtos;
	}


	@Override
	public ApiResponse updatePetOwnerProfile(UserReqDto userReqDto, Long poId, MultipartFile imageFile) throws IOException {
		System.out.println(userReqDto);
		PetOwner petOwner = petOwnerRepo.findById(poId).orElseThrow(() -> new UserNotFoundException("Invalid PetOwner Id"));
		User user = userRepo.findById(petOwner.getOwner().getId()).orElseThrow(() -> new UserNotFoundException("Invalid User Id"));

//		 Update only non-null fields from UserReqDto
		if (userReqDto.getFirstName() != null) {
			petOwner.getOwner().setFirstName(userReqDto.getFirstName());
		}
		if (userReqDto.getLastName() != null) {
			petOwner.getOwner().setLastName(userReqDto.getLastName());
		}
		if (userReqDto.getPhoneNo() != null) {
			petOwner.getOwner().setPhoneNo(userReqDto.getPhoneNo());
		}
		if (userReqDto.getAddress() != null) {
			petOwner.getOwner().setAddress(userReqDto.getAddress());
		}
		if (userReqDto.getPassword() != null) {
			petOwner.getOwner().setPassword(userReqDto.getPassword());
		}
		if (userReqDto.getEmail() != null) {
			petOwner.getOwner().setEmail(userReqDto.getEmail());
		}
//		if (docReqDto.getDegree() != null) {
//			doc.setDegree(docReqDto.getDegree());
//		}
//		if (docReqDto.getSpecialist() != null) {
//			doc.setSpecialist(docReqDto.getSpecialist());
//		}
		if(imageFile != null && !imageFile.isEmpty()) {
			user.setImage(imageFile.getBytes());
		}

	    // Save both user and doctor entity
	    userRepo.save(user);
	    petOwnerRepo.save(petOwner); // 🔹 Ensure petOwner updates persist
		return new ApiResponse("PetOwner is Updated Successfully");
	}
	
}