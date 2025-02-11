package com.petclinic.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.LocalTime;
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
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.BillingRespDto;
import com.petclinic.dto.PetOwnerResDto2;
import com.petclinic.dto.PetRespDto2;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.pojos.Appointment;
import com.petclinic.pojos.Billing;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Pet;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Receptionist;
import com.petclinic.pojos.Status;
import com.petclinic.pojos.User;
import com.petclinic.repository.AppointmentRepository;
import com.petclinic.repository.BillingRepository;
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
	PetRepository petRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	BillingRepository billRepo;
	
	@Autowired
	EmailService emailService;
	
	String emailBody = "<html><body>"
			+ "<h2>Invoice Details</h2>"
			+ "<p>Dear Customer,</p>"
			+ "<p>Thank you for your payment. "
			+ "Here is your invoice:</p>"
			+ "<table border='1' style='border-collapse:collapse;width:100%'>"
			+ "<tr><td><strong>Total</strong></td><td><strong>Rs. 700</strong></td></tr>"
			+ "</table>"
			+ "<p>We hope your pet is well soon!</p>"
			+ "<p>Best Regards,<br>Veterinary Clinic</p>" + "</body></html>";
	
//	@Autowired
	//AppointmentUserRepository appointUserRepo;
	
	

	
//	@Override
//	public ApiResponse addAppoint(AppointReqDto appointReqDto) {
//		Doctor doc=docRepo.findById(appointReqDto.getDoctorId()).orElseThrow(()->new UserNotFoundException("Invalid Id"));
//		System.out.println(doc.getDoctor().getEmail());
//		Receptionist resp=respRepo.findById(appointReqDto.getRecepId()).orElseThrow(()->new UserNotFoundException("Invalid Id"));
//		System.out.println(resp.getReceptionist().getEmail());
//		PetOwner po=petOwnerRepo.findById(appointReqDto.getPetOwnerId()).orElseThrow(()->new UserNotFoundException("Invalid Id"));
//		System.out.println(po.getOwner().getEmail());
//		Pet p =petRepo.findById(appointReqDto.getPetId()).orElseThrow(()->new UserNotFoundException("Invalid Id"));
//		System.out.println(p.getName());
//		Appointment appoint=mapper.map(appointReqDto,Appointment.class);
//		
//		appoint.setAppointTime(LocalTime.parse(appointReqDto.getAppointTime()));
//		
//		resp.addAppoint(appoint);
//		
//		doc.addAppoint(appoint);
//		
//		appoint.setOwner(po);
//		
//		appoint.setPet(p);
//		
//		return new ApiResponse("Appointment Added Successfully!!");
//		
//	}

//	@Override
//	public ApiResponse acceptAppoint(Long aptId, Long recptId) {
//		//AppointmentUser aps =appointUserRepo.findById(aptId).orElseThrow(()->new ResourceNotFoundException("Invalid Id"));
//		//Appointment apt=mapper.map(aps, Appointment.class);
//		Receptionist r=respRepo.findById(recptId).orElseThrow(()->new ResourceNotFoundException("Invalid Id"));
//		//apt.setReceptionist(r);
//		//apt.setStatus(Status.ACCEPTED);
//		return new ApiResponse("Appointment is Accepted");
//	}

	@Override
	public List<AppointmentRespDto> getAppointments() {
		return appointRepo.findAll().stream().map(appoint-> mapper.map(appoint, AppointmentRespDto.class)).collect(Collectors.toList());
		
	}

//	@Override
//	public List<ReceptionistsResDto> getReceptionists() {
//		return respRepo.findAll().stream().map(receptionist-> mapper.map(receptionist, ReceptionistsResDto.class)).collect(Collectors.toList());
//		
//	}
	
	
	@Override
	  public ApiResponse approveAppointment(Long aptId) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		   
	    Long userId = (Long) auth.getCredentials();
	    Appointment appointment = appointRepo.findById(aptId)
	        .orElseThrow(() -> new ResourceNotFoundException("Apptmt Id invalid!"));
	    Receptionist receptionist = respRepo.findByReceptionistId(userId)
	        .orElseThrow(() -> new ResourceNotFoundException("Recep Id not found!"));
	    appointment.setReceptionist(receptionist);
	    appointment.setStatus(Status.APPROVED);
	    return new ApiResponse("Appointment approved!");
	  }


	  @Override
	  public ApiResponse updateReceptionistProfile(UserReqDto userReqDto, Long recepId, MultipartFile imageFile)
	      throws IOException {
	    System.out.println(userReqDto);
	    Receptionist receptionist = respRepo.findById(recepId)
	        .orElseThrow(() -> new UserNotFoundException("Invalid Receptionist Id"));
	    User user = userRepo.findById(receptionist.getReceptionist().getId())
	        .orElseThrow(() -> new UserNotFoundException("Invalid User Id"));
	    if (userReqDto.getFirstName() != null)
	      receptionist.getReceptionist().setFirstName(userReqDto.getFirstName());
	    if (userReqDto.getLastName() != null)
	      receptionist.getReceptionist().setLastName(userReqDto.getLastName());
	    if (userReqDto.getPhoneNo() != null)
	      receptionist.getReceptionist().setPhoneNo(userReqDto.getPhoneNo());
	    if (userReqDto.getAddress() != null)
	      receptionist.getReceptionist().setAddress(userReqDto.getAddress());
	    if (userReqDto.getPassword() != null)
	      receptionist.getReceptionist().setPassword(userReqDto.getPassword());
	    if (userReqDto.getEmail() != null)
	      receptionist.getReceptionist().setEmail(userReqDto.getEmail());
//	    if (docReqDto.getDegree() != null) {
//	      doc.setDegree(docReqDto.getDegree());
//	    }
//	    if (docReqDto.getSpecialist() != null) {
//	      doc.setSpecialist(docReqDto.getSpecialist());
//	    }
	    if (imageFile != null && !imageFile.isEmpty())
	      user.setImage(imageFile.getBytes());

	    // Save both user and doctor entity
	    userRepo.save(user);
	    respRepo.save(receptionist); // 🔹 Ensure receptionist updates persist
	    return new ApiResponse("Receptionist is Updated Successfully");

	  }

	@Override
	public List<BillingRespDto> getBill(){
		return billRepo.findByStatus(Status.PENDING).stream()
		.map(bill -> {
			PetOwner po=bill.getPrescription().getAppointment().getOwner();
			Pet p=bill.getPrescription().getAppointment().getPet();
			PetOwnerResDto2 petOwnerResDto2=mapper.map(po,PetOwnerResDto2.class);
			PetRespDto2 petRespDto2= mapper.map(p,PetRespDto2.class);
			bill.setTotalAmount(700);
			BillingRespDto billingRespDto=new BillingRespDto(petRespDto2,petOwnerResDto2);
			mapper.map(bill, billingRespDto);
			return billingRespDto;
		}).collect(Collectors.toList());
		//.orElseThrow(()->new ResourceNotFoundException("Bill Does Not Exist"));
		
		//PetOwner po=billing.getPrescription().getAppointment().getOwner();
		//return ;
	}


	@Override
	public ApiResponse payBill(Long bId) {		
		Billing billing = billRepo.findById(bId).orElseThrow(() -> new ResourceNotFoundException("Bill Not found"));
		billing.setStatus(Status.COMPLETED);
		billing.setBillDate(LocalDateTime.now());
		String emailId= billing.getPrescription().getAppointment().getOwner().getOwner().getEmail();
		System.out.println(emailId);
		emailService.sendEmail(emailId, "Invoice", emailBody);
		return new ApiResponse("Bill paid");
	}

	@Override
	public List<AppointmentRespDto> getPendingAppointments() {
		return appointRepo.findByStatus(Status.PENDING).stream().map(appoint -> mapper.map(appoint,AppointmentRespDto.class)).collect(Collectors.toList());
	}

	@Override
	public ApiResponse denieAppointment(Long aptId) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		   
	    Long userId = (Long) auth.getCredentials();
	    Appointment appointment = appointRepo.findByIdAndStatus(aptId,Status.PENDING)
	        .orElseThrow(() -> new ResourceNotFoundException("Apptmt Id invalid!"));
	    
	    Receptionist receptionist = respRepo.findByReceptionistId(userId)
	        .orElseThrow(() -> new ResourceNotFoundException("Recep Id not found!"));
	    appointment.setReceptionist(receptionist);
	    appointment.setStatus(Status.DENIED);
	    return new ApiResponse("Appointment denied!");
	}
	
	
	
	
	

}
