package com.petclinic.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.UserReqDto;

public interface DoctorService {

	public List<DoctorResDto> getAllDoctors();

	public ApiResponse updateDoctor(UserReqDto doctorReqDto, Long dId, MultipartFile imageFile) throws IOException;

	public List<AppointmentRespDto> getTodaysAppts();

}
