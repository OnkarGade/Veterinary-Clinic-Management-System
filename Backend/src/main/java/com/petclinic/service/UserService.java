package com.petclinic.service;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.StaffReqDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.dto.UserResDto;
import com.petclinic.pojos.Role;
import com.petclinic.pojos.User;

public interface UserService {
	public ApiResponse Register(UserReqDto poDto);

	public ApiResponse getUser();

	public Role getRole(String email);

	//public UserResDto login(UserReqDto userReqDto);
	
	//public ApiResponse RegStaff(StaffReqDto sReqDto);
}
