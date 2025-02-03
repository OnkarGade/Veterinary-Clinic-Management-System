package com.petclinic.service;

import java.io.IOException;
import java.time.LocalTime;
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
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.ReceptionistsReqDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Pet;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Receptionist;
import com.petclinic.pojos.Status;
import com.petclinic.pojos.User;
import com.petclinic.repository.AppointmentRepository;
import com.petclinic.repository.DoctorRepository;
import com.petclinic.repository.PetOwnerRepository;
import com.petclinic.repository.PetRepository;
import com.petclinic.repository.ReceptionistRepository;
import com.petclinic.repository.UserRepository;

@Service
@Transactional
public class ReceptionistServiceImpl implements ReceptionistService {

	@Autowired
	AppointmentRepository appointRepo;

	@Autowired
	DoctorRepository docRepo;

	@Autowired
	ModelMapper mapper;

	@Autowired
	ReceptionistRepository respRepo;

	@Autowired
	PetOwnerRepository petOwnerRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	PetRepository petRepo;

	@Override
	public ApiResponse addAppoint(AppointReqDto appointReqDto) {
		Doctor doc = docRepo.findById(appointReqDto.getDoctorId())
				.orElseThrow(() -> new UserNotFoundException("Invalid Id"));
		System.out.println(doc.getDoctor().getEmail());
		Receptionist resp = respRepo.findById(appointReqDto.getRecepId())
				.orElseThrow(() -> new UserNotFoundException("Invalid Id"));
		System.out.println(resp.getReceptionist().getEmail());
		PetOwner po = petOwnerRepo.findById(appointReqDto.getPetOwnerId())
				.orElseThrow(() -> new UserNotFoundException("Invalid Id"));
		System.out.println(po.getOwner().getEmail());
		Pet p = petRepo.findById(appointReqDto.getPetId()).orElseThrow(() -> new UserNotFoundException("Invalid Id"));
		System.out.println(p.getName());
		Appointment appoint = mapper.map(appointReqDto, Appointment.class);

		appoint.setAppointTime(LocalTime.parse(appointReqDto.getAppointTime()));
		resp.addAppoint(appoint);
		doc.addAppoint(appoint);
		appoint.setOwner(po);
		appoint.setPet(p);
//		appoint.setStatus(Status.ACCEPTED);
		return new ApiResponse("Appointment Added Successfully!!");
	}

	@Transactional
	@Override
	public ApiResponse acceptAppoint(Long aptId, Long recptId) {
		System.out.println("appointment id - " + aptId + " recptId - " + recptId);
		Appointment aps = appointRepo.findById(aptId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid appointmentuser Id"));
		Appointment apt = mapper.map(aps, Appointment.class);
		Receptionist r = respRepo.findById(recptId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid receptionist Id"));
		apt.setReceptionist(r);
		apt.setStatus(Status.APPROVED);
		Appointment perApt = appointRepo.save(apt);
		return new ApiResponse("Appointment is Accepted");
	}

	@Override
	public List<AppointmentRespDto> getAppointments() {
		return appointRepo.findAll().stream().map(appoint -> mapper.map(appoint, AppointmentRespDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<ReceptionistsResDto> getReceptionists() {
		return respRepo.findAll().stream().map(receptionist -> mapper.map(receptionist, ReceptionistsResDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse approveAppointment(Long aptId, Long recptId) {
		Appointment appointment = appointRepo.findById(aptId)
				.orElseThrow(() -> new ResourceNotFoundException("Apptmt Id invalid!"));
		Receptionist receptionist = respRepo.findById(recptId)
				.orElseThrow(() -> new ResourceNotFoundException("Recep Id not found!"));
		appointment.setReceptionist(receptionist);
		appointment.setStatus(Status.APPROVED);
		return new ApiResponse("Appointment approved!");
	}

	@Override
	public ApiResponse updateReceptionistProfile(ReceptionistsReqDto receptionistsReqDto, Long recepId) {

		System.out.println(receptionistsReqDto);
		Receptionist receptionist= respRepo.findById(recepId).orElseThrow(() -> new UserNotFoundException("Invalid Receptionist Id"));
		if (receptionistsReqDto.getFirstName() != null) {
			receptionist.getReceptionist().setFirstName(receptionistsReqDto.getFirstName());
		}
		if (receptionistsReqDto.getLastName() != null) {
			receptionist.getReceptionist().setLastName(receptionistsReqDto.getLastName());
		}
		if (receptionistsReqDto.getPhoneNo() != null) {
			receptionist.getReceptionist().setPhoneNo(receptionistsReqDto.getPhoneNo());
		}
		if (receptionistsReqDto.getAddress() != null) {
			receptionist.getReceptionist().setAddress(receptionistsReqDto.getAddress());
		}
		return new ApiResponse("Doctor is Updated Successfully");
	
	}

	@Override
	public ApiResponse updateReceptionistProfile(UserReqDto userReqDto, Long recepId, MultipartFile imageFile) throws IOException {
		System.out.println(userReqDto);
		Receptionist receptionist= respRepo.findById(recepId).orElseThrow(() -> new UserNotFoundException("Invalid Receptionist Id"));
		User user = userRepo.findById(receptionist.getReceptionist().getId()).orElseThrow(() -> new UserNotFoundException("Invalid User Id"));
		if (userReqDto.getFirstName() != null) {
			receptionist.getReceptionist().setFirstName(userReqDto.getFirstName());
		}
		if (userReqDto.getLastName() != null) {
			receptionist.getReceptionist().setLastName(userReqDto.getLastName());
		}
		if (userReqDto.getPhoneNo() != null) {
			receptionist.getReceptionist().setPhoneNo(userReqDto.getPhoneNo());
		}
		if (userReqDto.getAddress() != null) {
			receptionist.getReceptionist().setAddress(userReqDto.getAddress());
		}
		if (userReqDto.getPassword() != null) {
			receptionist.getReceptionist().setPassword(userReqDto.getPassword());
		}
		if (userReqDto.getEmail() != null) {
			receptionist.getReceptionist().setEmail(userReqDto.getEmail());
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
	    respRepo.save(receptionist); // 🔹 Ensure receptionist updates persist
		return new ApiResponse("Receptionist is Updated Successfully");
			
	}
	
	
}