//package com.petclinic.security;
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.stereotype.Component;
//
//@Component
//public class SecurityUtils {
//
//    public static Long getSelfIdFromSecurityContext() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication instanceof UsernamePasswordAuthenticationToken) {
//            Object details = ((UsernamePasswordAuthenticationToken) authentication).getDetails();
//            if (details instanceof Long) {
//                return (Long) details; // This is self_id
//            }
//        }
//        return null; // Return null if self_id is not found
//    }
//}
