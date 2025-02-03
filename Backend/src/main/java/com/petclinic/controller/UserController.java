package com.petclinic.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.AuthRequest;
import com.petclinic.dto.AuthResp;
import com.petclinic.dto.StaffReqDto;
import com.petclinic.dto.UserReqDto;
//import com.petclinic.security.JwtUtils;
//import com.petclinic.security.JwtUtils;
import com.petclinic.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserService userService;

//	@Autowired
//	private AuthenticationManager authenticationManager;
//	@Autowired
//	private JwtUtils jwtUtils;

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserReqDto userReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.Register(userReqDto));
	}

	@PostMapping("/registerStaff")
	public ResponseEntity<?> addStaff(@RequestBody StaffReqDto sReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.RegStaff(sReqDto));
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody UserReqDto userReqDto) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.login(userReqDto));
	}
	
	// Upload or Replace Profile Image
    @PostMapping("/upload/{userId}")
    public ResponseEntity<String> uploadImage(@PathVariable Long userId, @RequestParam("image") MultipartFile file) throws IOException {
        System.out.println("In upload image");
    	userService.saveProfileImage(userId, file);
		return ResponseEntity.ok("Profile image uploaded successfully");
    }

    // Retrieve Profile Image
    @GetMapping("/image/{userId}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long userId) {
        byte[] image = userService.getProfileImage(userId);
        if (image != null) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE)
                    .body(image);
        }
        return ResponseEntity.notFound().build();
    }
	

//	@PostMapping("/login")
//	public ResponseEntity<?> userSignIn(@RequestBody AuthRequest dto) {
//		
//		System.out.println("heell");
//		System.out.println(dto.getEmail());
//		UsernamePasswordAuthenticationToken 
//		authenticationToken = new UsernamePasswordAuthenticationToken(dto.getEmail(),dto.getPassword());
//				
//		Authentication authToken = 
//				authenticationManager.authenticate(authenticationToken);
//		
//		
//		System.out.println(authToken.isAuthenticated());
//
//		return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResp("Successful Auth !",
//				jwtUtils.generateJwtToken(authToken)));		
//		
//	}

}