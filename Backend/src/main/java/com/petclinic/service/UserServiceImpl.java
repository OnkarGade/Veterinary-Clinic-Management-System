package com.petclinic.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.petclinic.customeexception.UserNotFoundException;
import com.petclinic.dto.ApiResponse;
import com.petclinic.dto.StaffReqDto;
import com.petclinic.dto.UserReqDto;
import com.petclinic.dto.UserResDto;
import com.petclinic.pojos.Doctor;
import com.petclinic.pojos.Pet;
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
	private UserRepository ud;
	
	@Autowired
	private PetOwnerRepository pd;
	
	@Autowired
	private DoctorRepository dd;
	
	@Autowired
	private ReceptionistRepository rd;
	
	
	public ApiResponse Register(UserReqDto urd) { 
		
		User s=mapper.map(urd, User.class);
		
		User perUser=ud.save(s);
		
		switch (perUser.getRole()) {
        
		case PETOWNER: 
        
			pd.save(new PetOwner(perUser));
        	
			break;
        
		
		
		}
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
		return new ApiResponse(perUser.getId() +" Added Successfully");
	}
	
	@Override
	public ApiResponse RegStaff(StaffReqDto sReqDto){
		
		User u=mapper.map(sReqDto, User.class);
		
		User perUser=ud.save(u);
		
		switch(sReqDto.getRole()) {
		
		case DOCTOR:
        		
			Doctor d= mapper.map(sReqDto,Doctor.class);
			
			d.setDoctor(perUser);
			//System.out.println(perUser.getAge()+perUser.getEmail());
			
			dd.save(d);
			//System.out.println(d.getDoctor().getAge()+d.getDoctor().getEmail());
			//dd.save(new Doctor(perUser));
        	
			break;
        
		case RECEPTIONIST:
        	
			Receptionist r=mapper.map(sReqDto, Receptionist.class);
			
			r.setReceptionist(perUser);
			
			rd.save(r);
			
			break; 
			
		default:
			
			break;
		}
		
		return new ApiResponse(perUser.getId()+" Added Successfully");
	}


	@Override
	public UserResDto login(UserReqDto userReqDto) {
		
		
		User u =ud.findByEmailAndPassword(userReqDto.getEmail()  , userReqDto.getPassword()).orElseThrow(()->new  UserNotFoundException("Invalid Eamil Or Password"));
		
		UserResDto userResDto=mapper.map(u, UserResDto.class);
		
		return userResDto;
	}

}
