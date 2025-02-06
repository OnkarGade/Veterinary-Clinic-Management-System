package com.petclinic.service;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.UserReqDto;
import com.petclinic.pojos.Role;

public interface UserService {
	public ApiResponse Register(UserReqDto poDto);

	public ApiResponse getUser();

	public Role getRole(String email);

//	public UserResDto login(UserReqDto userReqDto);

//	public ApiResponse RegStaff(StaffReqDto sReqDto);

//	public void saveProfileImage(Long userId, MultipartFile file) throws IOException;

//	public byte[] getProfileImage(Long userId);
}
