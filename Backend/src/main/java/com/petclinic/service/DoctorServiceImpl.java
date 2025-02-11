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

import com.petclinic.customeexception.ResourceNotFoundException;
import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.MedicineReqDto;
import com.petclinic.dto.PresMediResDto;
import com.petclinic.dto.PrescriptionReqDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Billing;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Medicine;
import com.petclinic.pojos.Prescription;
import com.petclinic.pojos.User;
import com.petclinic.repository.AppointmentRepository;
import com.petclinic.repository.BillingRepository;
import com.petclinic.repository.DoctorRepository;
import com.petclinic.repository.MedicineRepository;
import com.petclinic.repository.PrescriptionRepository;
import com.petclinic.repository.UserRepository;
import com.petclinic.pojos.Status;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

	
	@Autowired
	DoctorRepository docRepo;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	UserRepository userRepo;


	@Autowired
	AppointmentRepository appointmentRepository;

	@Autowired
	PrescriptionRepository prescriptionRepository;
	
	@Autowired
	MedicineRepository medicineRepository;
	
	@Autowired
	BillingRepository billingRepository;
	
//	@Override
//	public List<DoctorResDto> getAllDoctors() {
//		
//		List<DoctorResDto> doctorResDtos=docRepo.findAll().stream().map(doctor -> 
//		mapper.map(doctor, 
//				DoctorResDto.class)).collect(Collectors.toList());
//		
//		for (DoctorResDto doctorResDto : doctorResDtos) {
//			System.out.println(doctorResDto.getDoctor().getEmail());
//		}
//		return doctorResDtos;
//	}

//	@Override
//	public ApiResponse updateDoctor(DoctorReqDto docReqDto, Long dId) {
//		
//		
//		
//		System.out.println(docReqDto);
//		//System.out.println(doctorReqDto.getEmail());
//		User u=mapper.map(docReqDto, User.class);
//		//System.out.println( u.getEmail());  
//		Doctor doc=docRepo.findById(dId).orElseThrow(()->new UserNotFoundException("Invlaid Id"));
//		//System.out.println(doc.getDoctor().getEmail());
//		mapper.map(docReqDto, doc);
//		doc.setDoctor(u);
//		//System.out.println(doc.getDoctor().getFirstName());
//		docRepo.save(doc);
//		return new ApiResponse("Doctor is Updated Successfully");
//	}

//	@Override
//	public ApiResponse updateDoctor(DoctorReqDto docReqDto, Long dId) {
//	    System.out.println(docReqDto);
//
//	    // Fetch the existing doctor entity
//	    Doctor doc = docRepo.findById(dId)
//	        .orElseThrow(() -> new UserNotFoundException("Invalid Id"));
//
//	    // Fetch the existing user associated with this doctor
//	    User existingUser = doc.getDoctor();
//
//	    // Update only the necessary fields (DO NOT create a new User object)
//	    existingUser.setFirstName(docReqDto.getFirstName());
//	    existingUser.setLastName(docReqDto.getLastName());
//	    //existingUser.setAge(docReqDto.getAge());
//	    existingUser.setRole(docReqDto.getRole());
//	    existingUser.setPhoneNo(docReqDto.getPhoneNo());
//	    existingUser.setAddress(docReqDto.getAddress());
//	    existingUser.setGender(docReqDto.getGender());
//	    existingUser.setEmail(docReqDto.getEmail());
//	    // Check if the email is being changed
////	    if (!existingUser.getEmail().equals(docReqDto.getEmail())) {
////	        // Validate if new email is already taken
////	        if (userRepo.findByEmail(docReqDto.getEmail()).isPresent()) {
////	            throw new RuntimeException("Email already exists!");
////	        }
////	        existingUser.setEmail(docReqDto.getEmail());
////	    }
//
//	    // Update Doctor entity (excluding user reassignment)
//	    doc.setDegree(docReqDto.getDegree());
//	    doc.setSpecialist(docReqDto.getSpecialist());
//	    doc.setAadharNo(docReqDto.getAadharNo());
//
//	    // Save the updated doctor entity
//	    docRepo.save(doc);
//
//	    return new ApiResponse("Doctor is updated successfully");
//	}

	@Override
	  public ApiResponse updateDoctor(UserReqDto userReqDto, Long dId, MultipartFile imageFile) throws IOException {

	    System.out.println(userReqDto);
	    Doctor doc = docRepo.findById(dId).orElseThrow(() -> new UserNotFoundException("Invalid Doctor Id"));
	    User user = userRepo.findById(doc.getDoctor().getId())
	        .orElseThrow(() -> new UserNotFoundException("Invalid User Id"));

//	     Update only non-null fields from UserReqDto
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
//	    if (docReqDto.getDegree() != null) {
//	      doc.setDegree(docReqDto.getDegree());
//	    }
//	    if (docReqDto.getSpecialist() != null) {
//	      doc.setSpecialist(docReqDto.getSpecialist());
//	    }
	   doc.getDoctor().setDob(userReqDto.getDob());
	    if (imageFile != null && !imageFile.isEmpty()) {
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

	  @Override
	  public List<AppointmentRespDto> getFutureAppts() {
	    List<AppointmentRespDto> appointmentRespDtos = appointmentRepository.findAll().stream()
	        .map(appointment -> mapper.map(appointment, AppointmentRespDto.class))
	        .filter(appt -> !appt.getAppointDate().equals(LocalDate.now()))
	        .filter(appt -> appt.getStatus().equals(Status.APPROVED)).collect(Collectors.toList());
	    return appointmentRespDtos;
	  }

	  @Override
	  public ApiResponse addPrescription(PrescriptionReqDto prescriptionReqDto) {
	    Appointment appointment = appointmentRepository.findById(prescriptionReqDto.getAptId())
	        .orElseThrow(() -> new ResourceNotFoundException("Appointment not found!"));
	    appointment.setStatus(Status.COMPLETED);
	    Prescription prescription = new Prescription();
	    prescription.setAppointment(appointment);
	    prescription.setDiagnosis(prescriptionReqDto.getDiagnosis());
	    prescription.setPrescriptionAdvice(prescriptionReqDto.getPrescriptionAdvice());
	    prescriptionRepository.save(prescription);
	    Billing billing=new Billing();
	    billing.setPrescription(prescription);
	    billing.setStatus(Status.PENDING);
	    billingRepository.save(billing);
	    Long presId = prescription.getId();
	    return new ApiResponse("Prescription added with prescription Id - " + presId);
	  }

	  @Override
	  public ApiResponse addMedicine(MedicineReqDto medicineReqDto) {
	    Prescription prescription = prescriptionRepository.findById(medicineReqDto.getPrescriptionId())
	        .orElseThrow(() -> new ResourceNotFoundException("Prescription not found!"));
	    Medicine medicine = mapper.map(medicineReqDto, Medicine.class);
	    medicine.setPrescription(prescription);
	    medicineRepository.save(medicine);
	    return new ApiResponse("Medicine added!");
	  }

	@Override
	public List<PresMediResDto> getPrescription(Long pId) {
		return medicineRepository.findByPrescriptionAppointmentPetId(pId).stream().map(medicine->mapper.map(medicine,PresMediResDto.class)).collect(Collectors.toList());
		
	}
	  
	  
	  
	  
}
