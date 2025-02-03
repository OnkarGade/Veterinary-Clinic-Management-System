package com.petclinic.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Status;
import com.petclinic.pojos.User;
import com.petclinic.repository.AppointmentRepository;
import com.petclinic.repository.DoctorRepository;
import com.petclinic.repository.UserRepository;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

	@Autowired
	DoctorRepository docRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	ModelMapper mapper;

	@Autowired
	AppointmentRepository appointmentRepository;

	@Override
	public List<DoctorResDto> getAllDoctors() {

		List<DoctorResDto> doctorResDtos = docRepo.findAll().stream()
				.map(doctor -> mapper.map(doctor, DoctorResDto.class)).collect(Collectors.toList());

		for (DoctorResDto doctorResDto : doctorResDtos) {
			System.out.println(doctorResDto.getDoctor().getEmail());
		}
		return doctorResDtos;
	}

	@Override
	public ApiResponse updateDoctor(UserReqDto userReqDto, Long dId, MultipartFile imageFile) throws IOException {

		System.out.println(userReqDto);
		Doctor doc = docRepo.findById(dId).orElseThrow(() -> new UserNotFoundException("Invalid Doctor Id"));
		User user = userRepo.findById(doc.getDoctor().getId()).orElseThrow(() -> new UserNotFoundException("Invalid User Id"));

//		 Update only non-null fields from UserReqDto
		if (userReqDto.getFirstName() != null) {
			doc.getDoctor().setFirstName(userReqDto.getFirstName());
		}
		if (userReqDto.getLastName() != null) {
			doc.getDoctor().setLastName(userReqDto.getLastName());
		}
		if (userReqDto.getPhoneNo() != null) {
			doc.getDoctor().setPhoneNo(userReqDto.getPhoneNo());
		}
		if (userReqDto.getAddress() != null) {
			doc.getDoctor().setAddress(userReqDto.getAddress());
		}
		if (userReqDto.getPassword() != null) {
			doc.getDoctor().setPassword(userReqDto.getPassword());
		}
		if (userReqDto.getEmail() != null) {
			doc.getDoctor().setEmail(userReqDto.getEmail());
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
	    docRepo.save(doc); // 🔹 Ensure doctor updates persist
		return new ApiResponse("Doctor is Updated Successfully");
	}

	@Override
	public List<AppointmentRespDto> getTodaysAppts() {
		List<AppointmentRespDto> appointmentRespDtos = appointmentRepository.findAll().stream()
				.map(appointment -> mapper.map(appointment, AppointmentRespDto.class))
				.filter(appt -> appt.getAppointDate().equals(LocalDate.now()))
				.filter(appt -> appt.getStatus().equals(Status.APPROVED)).collect(Collectors.toList());
		return appointmentRespDtos;
	}

}
