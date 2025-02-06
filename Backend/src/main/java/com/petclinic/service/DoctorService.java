package com.petclinic.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AppointmentRespDto;
import com.petclinic.dto.MedicineReqDto;
import com.petclinic.dto.PrescriptionReqDto;
import com.petclinic.dto.UserReqDto;

public interface DoctorService {

	public ApiResponse updateDoctor(UserReqDto doctorReqDto, Long dId, MultipartFile imageFile) throws IOException;

	public List<AppointmentRespDto> getTodaysAppts();

	public List<AppointmentRespDto> getFutureAppts();

	public ApiResponse addPrescription(PrescriptionReqDto prescriptionReqDto);

	public ApiResponse addMedicine(MedicineReqDto medicineReqDto);

}
