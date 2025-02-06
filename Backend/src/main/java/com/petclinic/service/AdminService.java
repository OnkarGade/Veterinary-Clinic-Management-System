package com.petclinic.service;

import java.util.List;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.StaffReqDto;

public interface AdminService {

	public ApiResponse RegStaff(StaffReqDto sReqDto);

	public List<DoctorResDto> getAllDoctors();
	
	public List<ReceptionistsResDto> getReceptionists();

	public ApiResponse softDeleteStaff(Long uId);

	public ApiResponse reinstateStaff(Long uId);

}