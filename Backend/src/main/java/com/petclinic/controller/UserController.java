package com.petclinic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinic.dto.AuthRequest;
import com.petclinic.dto.AuthResp;
import com.petclinic.dto.UserReqDto;
import com.petclinic.security.JwtUtils;
import com.petclinic.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtils jwtUtils;

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserReqDto userReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.Register(userReqDto));
	}

	@GetMapping("/profile")
	public ResponseEntity<?> getUser() {
		return ResponseEntity.ok(userService.getUser());
	}

	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto) {
		System.out.println("in sign in " + dto);
		// 1. Create auth token using suser supplied em n pwd
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				dto.getEmail(), dto.getPassword());
		System.out.println(authenticationToken.isAuthenticated());// f
		// 2. invoke Spring sec supplied auth mgr's authenticate method
		Authentication authToken = authenticationManager.authenticate(authenticationToken);
		// => auth success
		System.out.println(authToken.isAuthenticated());// t
		// 3 . Send auth respone to the client containing JWTS
		return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResp("Successful Auth !",
				jwtUtils.generateJwtToken(authToken), userService.getRole(dto.getEmail())));
	}
	
//	@PostMapping("/registerStaff")
//	public ResponseEntity<?> addStaff(@RequestBody StaffReqDto sReqDto){
//			return ResponseEntity.status(HttpStatus.CREATED).body(userService.RegStaff(sReqDto));
//	}

//	@PostMapping("/login")
//	public ResponseEntity<?> loginUser(@RequestBody UserReqDto userReqDto) {
//		return ResponseEntity.status(HttpStatus.OK).body(userService.login(userReqDto));
//	}

	// Upload or Replace Profile Image
//    @PostMapping("/upload/{userId}")
//    public ResponseEntity<String> uploadImage(@PathVariable Long userId, @RequestParam("image") MultipartFile file) throws IOException {
//        System.out.println("In upload image");
//    	userService.saveProfileImage(userId, file);
//		return ResponseEntity.ok("Profile image uploaded successfully");
//    }
//
//    // Retrieve Profile Image
//    @GetMapping("/image/{userId}")
//    public ResponseEntity<byte[]> getImage(@PathVariable Long userId) {
//        byte[] image = userService.getProfileImage(userId);
//        if (image != null) {
//            return ResponseEntity.ok()
//                    .header(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE)
//                    .body(image);
//        }
//        return ResponseEntity.notFound().build();
//    }

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

//	@PostMapping("/signin")
//	
//	public ResponseEntity<?> userSignIn(@RequestBody AuthRequest dto) {
//		
//		System.out.println("heell");
//		System.out.println(dto.getEmail());
//		UsernamePasswordAuthenticationToken 
//		authenticationToken = new UsernamePasswordAuthenticationToken(dto.getEmail(),dto.getPassword());
//		
//		
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
