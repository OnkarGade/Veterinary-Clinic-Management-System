package com.petclinic.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.DoctorResDto;
import com.petclinic.dto.PetOwnerResDto;
import com.petclinic.dto.ReceptionistsResDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.PetOwner;
import com.petclinic.pojos.Receptionist;
import com.petclinic.pojos.Role;
import com.petclinic.pojos.User;
import com.petclinic.repository.DoctorRepository;
import com.petclinic.repository.PetOwnerRepository;
import com.petclinic.repository.ReceptionistRepository;
import com.petclinic.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private PetOwnerRepository petOwnerRepo;

	@Autowired
	private DoctorRepository docRepo;

	@Autowired
	private ReceptionistRepository recepRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public ApiResponse Register(UserReqDto urd) {
		if (urd.getRole() == Role.ADMIN || urd.getRole() == Role.DOCTOR || urd.getRole() == Role.RECEPTIONIST)
			return new ApiResponse("Can't register with this role. Contact administrator!");
		User s = mapper.map(urd, User.class);
		s.setPassword(passwordEncoder.encode(urd.getPassword()));
		User perUser = userRepo.save(s);
		// switch (perUser.getRole()) {
		// case PETOWNER:
		petOwnerRepo.save(new PetOwner(perUser));
		// break;
//		if(perUser.getRole()==Role.PETOWNER) {
//			PetOwner po= new PetOwner();
//			po.setOwner(perUser);
//			pd.save(po);
//		}
//		else if(perUser.getRole()==Role.DOCTOR) {
//			Doctor doc=new Doctor();
//			doc.setDoctor(perUser);
//			dd.save(doc);
//		}
//		else if(perUser.getRole()==Role.RECEPTIONIST) {
//			Receptionist rec=new Receptionist();
//			rec.setReceptionist(perUser);
//			rd.save(rec);
//		}
		return new ApiResponse(perUser.getId() + " Added Successfully");
	}

//	@Override
//	public ApiResponse RegStaff(StaffReqDto sReqDto) {
//
//		User u = mapper.map(sReqDto, User.class);
//
//		User perUser = ud.save(u);
//
//		switch (sReqDto.getRole()) {
//
//		case DOCTOR:
//
//			Doctor d = mapper.map(sReqDto, Doctor.class);
//			d.setDoctor(perUser);
//			// System.out.println(perUser.getAge()+perUser.getEmail());
//			dd.save(d);
//			// System.out.println(d.getDoctor().getAge()+d.getDoctor().getEmail());
//			// dd.save(new Doctor(perUser));
//			break;
//
//		case RECEPTIONIST:
//
//			Receptionist r = mapper.map(sReqDto, Receptionist.class);
//			r.setReceptionist(perUser);
//			rd.save(r);
//			break;
//
//		default:
//			break;
//		}
//
//		return new ApiResponse(perUser.getId() + " Added Successfully");
//	}

//	@Override
//	public UserResDto login(UserReqDto userReqDto) {
//
//		User u = ud.findByEmailAndPassword(userReqDto.getEmail(), userReqDto.getPassword())
//				.orElseThrow(() -> new UserNotFoundException("Invalid Eamil Or Password"));
//
//		UserResDto userResDto = mapper.map(u, UserResDto.class);
//
//		return userResDto;
//	}

//	// Upload or Replace Profile Image
//	public void saveProfileImage(Long userId, MultipartFile file) throws IOException {
//		User user = ud.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
//		user.setImage(file.getBytes());
//		ud.save(user);
//	}

//	@Override
//	public byte[] getProfileImage(Long userId) {
//		return ud.findById(userId).map(User::getImage).orElse(null);
//	}

	@Override
	public ApiResponse getUser() {

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Long userId = (Long) auth.getCredentials();
		User u = userRepo.findById(userId).orElseThrow(() -> new UserNotFoundException("Invalid Id"));
		switch (u.getRole()) {
		case PETOWNER:
			PetOwner po = petOwnerRepo.findByOwnerId(userId).orElseThrow(() -> new UserNotFoundException("Invalid Id"));
			PetOwnerResDto ps = mapper.map(po, PetOwnerResDto.class);
			return new ApiResponse(ps);
		case DOCTOR:
			Doctor doc = docRepo.findByDoctorId(userId).orElseThrow(() -> new UserNotFoundException("Invalid Id"));
			DoctorResDto dr = mapper.map(doc, DoctorResDto.class);
			return new ApiResponse(dr);
		case RECEPTIONIST:
			Receptionist recep = recepRepo.findByReceptionistId(userId)
					.orElseThrow(() -> new UserNotFoundException("Invalid Id"));
			ReceptionistsResDto rs = mapper.map(recep, ReceptionistsResDto.class);
			return new ApiResponse(rs);
		default:
			return null;
		}
//		return null;
	}

	@Override
	public Role getRole(String email) {
		return userRepo.findByEmail(email).orElseThrow(() -> new UserNotFoundException("Email invalid")).getRole();
	}

}