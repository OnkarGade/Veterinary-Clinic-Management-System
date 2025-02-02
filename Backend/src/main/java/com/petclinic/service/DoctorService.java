package com.petclinic.service;

import java.util.List;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.pojos.Doctor;

public interface DoctorService {

	public List<DoctorResDto> getAllDoctors();

	public ApiResponse updateDoctor(DoctorReqDto doctorReqDto, Long dId);

}
