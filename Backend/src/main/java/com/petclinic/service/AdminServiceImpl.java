//package com.petclinic.service;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import com.petclinic.daos.DoctorDao;
//import com.petclinic.daos.ReceptionistDao;
//import com.petclinic.daos.UserDao;
//import com.petclinic.dto.ApiResponse;
//import com.petclinic.dto.StaffReqDto;
//import com.petclinic.pojos.Doctor;
//import com.petclinic.pojos.Receptionist;
//import com.petclinic.pojos.User;
//
//public class AdminServiceImpl implements AdminService {
//	
//	@Autowired
//	ModelMapper mapper;
//	
//	@Autowired
//	ModelMapper user;
//	
//	@Autowired
//	UserDao ud;
//	
//	@Autowired
//	private DoctorDao dd;
//	
//	@Autowired
//	private ReceptionistDao rd;
//
//	@Override
//	public ApiResponse RegStaff(StaffReqDto sReqDto){
//		
//		User u=mapper.map(sReqDto, User.class);
//		
//		User perUser=ud.save(u);
//		
//		switch(sReqDto.getRole()) {
//		
//		case DOCTOR:
//        	
//			
//			Doctor d= mapper.map(sReqDto,Doctor.class);
//			
//			d.setDoctor(perUser);
//			
//			dd.save(d);
//			//dd.save(new Doctor(perUser));
//        	
//			break;
//        
//		case RECEPTIONIST:
//        	
//			Receptionist r=mapper.map(sReqDto, Receptionist.class);
//			
//			r.setReceptionist(perUser);
//			
//			rd.save(r);
//			
//			break; 
//			
//		default:
//			
//			break;
//		}
//		
//		return new ApiResponse(perUser.getId()+"Added Successfully");
//	}
//
//}
