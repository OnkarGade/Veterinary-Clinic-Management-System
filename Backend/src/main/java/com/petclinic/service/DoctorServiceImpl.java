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
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.User;
import com.petclinic.repository.DoctorRepository;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {

	
	@Autowired
	DoctorRepository docRepo;
	
	@Autowired
	ModelMapper mapper;
	
	@Override
	public List<DoctorResDto> getAllDoctors() {
		
		List<DoctorResDto> doctorResDtos=docRepo.findAll().stream().map(doctor -> 
		mapper.map(doctor, 
				DoctorResDto.class)).collect(Collectors.toList());
		
		for (DoctorResDto doctorResDto : doctorResDtos) {
			System.out.println(doctorResDto.getDoctor().getEmail());
		}
		return doctorResDtos;
	}

	@Override
	public ApiResponse updateDoctor(DoctorReqDto docReqDto, Long dId) {
		
		System.out.println(docReqDto);
		//System.out.println(doctorReqDto.getEmail());
		User u=mapper.map(docReqDto, User.class);
		//System.out.println( u.getEmail());  
		Doctor doc=docRepo.findById(dId).orElseThrow(()->new UserNotFoundException("Invlaid Id"));
		//System.out.println(doc.getDoctor().getEmail());
		mapper.map(docReqDto, doc);
		doc.setDoctor(u);
		//System.out.println(doc.getDoctor().getFirstName());
		docRepo.save(doc);
		return new ApiResponse("Doctor is Updated Successfully");
	}

	
}
