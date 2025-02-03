package com.petclinic.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.StaffReqDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.dto.UserResDto;
import com.petclinic.pojos.User;

public interface UserService {
	public ApiResponse Register(UserReqDto poDto);

	public UserResDto login(UserReqDto userReqDto);
	
	public ApiResponse RegStaff(StaffReqDto sReqDto);

	public void saveProfileImage(Long userId, MultipartFile file) throws IOException;

	public byte[] getProfileImage(Long userId);
}
