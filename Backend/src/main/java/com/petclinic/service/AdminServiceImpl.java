package com.petclinic.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.StaffReqDto;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Receptionist;
import com.petclinic.pojos.Role;
import com.petclinic.pojos.User;
import com.petclinic.repository.DoctorRepository;
import com.petclinic.repository.ReceptionistRepository;
import com.petclinic.repository.UserRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	ModelMapper user;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	private DoctorRepository docRepo;
	
	@Autowired
	private ReceptionistRepository respRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public ApiResponse RegStaff(StaffReqDto sReqDto){
		
		User u=mapper.map(sReqDto, User.class);
		
		u.setPassword(passwordEncoder.encode(sReqDto.getPassword()));
		
		User perUser=userRepo.save(u);
		
		switch(sReqDto.getRole()) {
		
		case DOCTOR:
        	
			
			Doctor d= mapper.map(sReqDto,Doctor.class);
			
			d.setDoctor(perUser);
			
			docRepo.save(d);
			//dd.save(new Doctor(perUser));
        	
			break;
        
		case RECEPTIONIST:
        	
			Receptionist r=mapper.map(sReqDto, Receptionist.class);
			
			r.setReceptionist(perUser);
			
			respRepo.save(r);
			
			break; 
			
		default:
			
			break;
		}
		
		return new ApiResponse(perUser.getId()+"Added Successfully");
	}
	
	@Override
	public List<DoctorResDto> getAllDoctors() {
		
		List<DoctorResDto> doctorResDtos=docRepo.findAll().stream().map(doctor -> 
		mapper.map(doctor, 
				DoctorResDto.class)).collect(Collectors.toList());
		
//		for (DoctorResDto doctorResDto : doctorResDtos) {
//			System.out.println(doctorResDto.getDoctor().getEmail());
//		}
		return doctorResDtos;
	}
	
	@Override
	public List<ReceptionistsResDto> getReceptionists() {
		return respRepo.findAll().stream().map(receptionist-> mapper.map(receptionist, ReceptionistsResDto.class)).collect(Collectors.toList());
		
	}

	@Override
	public ApiResponse softDeleteStaff(Long uId) {
		User u =userRepo.findById(uId).orElseThrow(()-> new UserNotFoundException("Invalid Id"));
		u.setActive(false);
		if(u.getRole()==Role.DOCTOR) {
			return new ApiResponse("Doctor is Successfully Deleted");
		}
		return new  ApiResponse("Receptionist is Successfully Deleted");
		
	}
	

	@Override
	public ApiResponse reinstateStaff(Long uId) {
		User u =userRepo.findById(uId).orElseThrow(()-> new UserNotFoundException("Invalid Id"));
		u.setActive(true);
		if(u.getRole()==Role.DOCTOR) {
			return new ApiResponse("Doctor is Successfully reinstated");
		}
		return new  ApiResponse("Receptionist is Successfully reinstated");
		
	}
	
}
