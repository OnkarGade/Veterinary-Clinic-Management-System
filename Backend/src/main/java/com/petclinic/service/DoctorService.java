package com.petclinic.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.DoctorReqDto;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.MedicineReqDto;
import com.petclinic.dto.PrescriptionReqDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.dto.PresMediResDto;
import com.petclinic.pojos.Doctor;

public interface DoctorService {
	
	public ApiResponse updateDoctor(UserReqDto userReqDto, Long dId, MultipartFile imageFile) throws IOException;
	
	public ApiResponse addMedicine(MedicineReqDto medicineReqDto);
	
	public List<AppointmentRespDto> getTodaysAppts();
	
	 public List<AppointmentRespDto> getFutureAppts();
	 
	 public ApiResponse addPrescription(PrescriptionReqDto prescriptionReqDto);

	public List<PresMediResDto> getPrescription(Long pId);
	
	

}
