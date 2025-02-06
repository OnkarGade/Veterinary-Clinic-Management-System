package com.petclinic.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.petclinic.customeexception.ResourceNotFoundException;
import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointReqDto;
import com.petclinic.dto.AppointmentRespDto2;
import com.petclinic.dto.DoctorResDto2;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.PetRespDto;
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
	@Autowired
	AppointmentRepository appRepo;

	@Override
	public ApiResponse addAppointment(AppointReqDto appointReqDto) {
		System.out.println("AppointUserReqDto : doctor id - " + appointReqDto.getDoctorId());
		Pet pet = petRepo.findById(appointReqDto.getPetId())
				.orElseThrow(() -> new ResourceNotFoundException("Pet Id invalid"));
		// JWT code for finding and retrieving userId from Security Context
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long userId = (Long) auth.getCredentials();
		PetOwner petOwner = petOwnerRepo.findByOwnerId(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Pet Owner Id invalid"));
		Doctor doctor = doctorRepo.findById(appointReqDto.getDoctorId())
				.orElseThrow(() -> new ResourceNotFoundException("Doctor Id invalid"));
		Appointment appoint = mapper.map(appointReqDto, Appointment.class);
		appoint.setDoctor(doctor);
		appoint.setPet(pet);
		appoint.setOwner(petOwner);
		appoint.setStatus(Status.PENDING);
		System.out.println(appoint);
		appointRepo.save(appoint);
		return new ApiResponse(" Appointment Added Successfully!");
	}

	@Override
	public List<PetOwnerResDto> getPetOwner() {
		List<PetOwnerResDto> petOwnerRespDtos = petOwnerRepo.findAll().stream()
				.map(petOwner -> mapper.map(petOwner, PetOwnerResDto.class)).collect(Collectors.toList());
		for (PetOwnerResDto petRespDto : petOwnerRespDtos) {
			System.out.println(petRespDto.getOwner().getEmail());
		}
		return petOwnerRespDtos;
	}

	@Override
	public ApiResponse updatePetOwnerProfile(UserReqDto userReqDto, Long poId, MultipartFile imageFile)
			throws IOException {
		System.out.println(userReqDto);
		PetOwner petOwner = petOwnerRepo.findById(poId)
				.orElseThrow(() -> new UserNotFoundException("Invalid PetOwner Id"));
		User user = userRepo.findById(petOwner.getOwner().getId())
				.orElseThrow(() -> new UserNotFoundException("Invalid User Id"));
//		 Update only non-null fields from UserReqDto
		if (userReqDto.getFirstName() != null)
			petOwner.getOwner().setFirstName(userReqDto.getFirstName());
		if (userReqDto.getLastName() != null)
			petOwner.getOwner().setLastName(userReqDto.getLastName());
		if (userReqDto.getPhoneNo() != null)
			petOwner.getOwner().setPhoneNo(userReqDto.getPhoneNo());
		if (userReqDto.getAddress() != null)
			petOwner.getOwner().setAddress(userReqDto.getAddress());
		if (userReqDto.getPassword() != null)
			petOwner.getOwner().setPassword(userReqDto.getPassword());
		if (userReqDto.getEmail() != null)
			petOwner.getOwner().setEmail(userReqDto.getEmail());
//		if (docReqDto.getDegree() != null) {
//			doc.setDegree(docReqDto.getDegree());
//		}
//		if (docReqDto.getSpecialist() != null) {
//			doc.setSpecialist(docReqDto.getSpecialist());
//		}
		if (imageFile != null && !imageFile.isEmpty())
			user.setImage(imageFile.getBytes());
		// Save both user and doctor entity
		userRepo.save(user);
		petOwnerRepo.save(petOwner); // Ensure petOwner updates persist
		return new ApiResponse("PetOwner is Updated Successfully");
	}

	@Override
	public List<PetRespDto> getPetByPetOwnerId() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long userId = (Long) auth.getCredentials();
		PetOwner po = petOwnerRepo.findByOwnerId(userId).orElseThrow(() -> new UserNotFoundException("Invalid Id"));
		return po.getPets().stream().map(pet -> mapper.map(pet, PetRespDto.class)).collect(Collectors.toList());
	}

	@Override
	public List<DoctorResDto2> availableDoctors() {
		List<Doctor> doctors = doctorRepo.findByIsActive(true);
//		List<DoctorResDto2> doctorResDto2s = new ArrayList<>();
//		for (Doctor doctor : doctors) {
//			DoctorResDto2 doc = new DoctorResDto2();
//			doc.setDoctorId(doctor.getId());
//			doc.setName(doctor.getDoctor().getFirstName() + " " + doctor.getDoctor().getLastName());
//			doctorResDto2s.add(doc);
//		}
//		return doctorResDto2s;

		return doctors.stream().map(doctor -> {
			DoctorResDto2 doctorResDto2 = new DoctorResDto2();
			doctorResDto2.setId(doctor.getId());
			doctorResDto2.setName(doctor.getDoctor().getFirstName() + " " + doctor.getDoctor().getLastName());
			return doctorResDto2;
		}).collect(Collectors.toList());
	}

	@Override
	public List<AppointmentRespDto2> getPendAppAppointments() {
		// JWT code for finding and retrieving userId from Security Context
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long userId = (Long) auth.getCredentials();
		PetOwner petOwner = petOwnerRepo.findByOwnerId(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Pet Owner Id invalid"));
		List<AppointmentRespDto2> appointmentRespDto2s = appointRepo.findByOwnerId(petOwner.getId()).stream()
				.filter(appointment -> (appointment.getStatus() == Status.APPROVED
						|| appointment.getStatus() == Status.PENDING))
				.map(appointment -> {
					AppointmentRespDto2 appointmentRespDto2 = mapper.map(appointment, AppointmentRespDto2.class);
					appointmentRespDto2.getDoctor().setName(appointment.getDoctor().getDoctor().getFirstName() + " "
							+ appointment.getDoctor().getDoctor().getLastName());
					return appointmentRespDto2;
				}).collect(Collectors.toList());
		return appointmentRespDto2s;
	}

	@Override
	public List<AppointmentRespDto2> getCompletedAppointments() {
		// JWT code for finding and retrieving userId from Security Context
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long userId = (Long) auth.getCredentials();
		PetOwner petOwner = petOwnerRepo.findByOwnerId(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Pet Owner Id invalid"));
		return appointRepo.findByOwnerIdAndStatus(petOwner.getId(), Status.COMPLETED).stream().map(appointment -> {
			AppointmentRespDto2 appointmentRespDto2 = mapper.map(appointment, AppointmentRespDto2.class);
			appointmentRespDto2.getDoctor().setName(appointment.getDoctor().getDoctor().getFirstName() + " "
					+ appointment.getDoctor().getDoctor().getLastName());
			return appointmentRespDto2;
		}).collect(Collectors.toList());
	}

}