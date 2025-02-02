//package com.petclinic.security;
//
//import java.security.Key;
//import java.util.Collection;
//import java.util.Date;
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.stereotype.Component;
//
//import com.petclinic.pojos.Role;
//import com.petclinic.pojos.User;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//import jakarta.annotation.PostConstruct;
//import lombok.extern.slf4j.Slf4j;
//
//@Component
//@Slf4j
//public class JwtUtils {
////inject the props in JWT Utils class for creating n validation of JWT
//	/*
//	 * @Value => injection of a value (name n value : xml tags)
//	 * arg - Spring expression Lang - SpEL
//	 */
//	@Value("${spring.security.jwt.secret.key}") //example of value injected as dependency , using SpEL
//	private String jwtSecret;
//
//	@Value("${spring.security.jwt.exp.time}")
//	private int jwtExpirationMs;
//	
//	
//	private Key key;
//
//	@PostConstruct
//	public void init() {
//		key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
//	}
//
//	
//	public String generateJwtToken(Authentication authentication) {
//		log.info("generate jwt token " + authentication);//contains verified user details
//		CustomUserDetailsImpl userPrincipal = (CustomUserDetailsImpl) authentication.getPrincipal();
//		
//		return Jwts.builder() 
//				.setSubject((userPrincipal.getUsername())) 
//				
//				.setIssuedAt(new Date())// 
//				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))// 
//				
//				
//				.claim("authorities", getAuthoritiesInString(userPrincipal.getAuthorities()))
//				
//				.claim("role",userPrincipal.getUserEntity().getRole())
//				.claim("firstName", userPrincipal.getUserEntity().getFirstName())
//				.claim("lastName", userPrincipal.getUserEntity().getLastName())
//				.claim("email",userPrincipal.getUserEntity().getEmail())
//				.claim("id",userPrincipal.getUserEntity().getId())
//		
//				.signWith(key, SignatureAlgorithm.HS512) 
//
//				
//				.compact();
//	}
//
//	// this method will be invoked by our custom JWT filter
//	public String getUserNameFromJwtToken(Claims claims) {
//		return claims.getSubject();
//	}
//
//	// this method will be invoked by our custom JWT filter
//	public Claims validateJwtToken(String jwtToken) {
//		// try {
//		Claims claims = Jwts.parserBuilder() //create JWT parser
//				.setSigningKey(key) //sets the SAME secret key for JWT signature verification
//				.build()//rets the JWT parser set with the Key
//				.parseClaimsJws(jwtToken) //rets JWT with Claims added in the body
//				.getBody();//=> JWT valid ,  rets the Claims(payload)
//		
//		return claims;		
//	}
//	// Accepts Collection<GrantedAuthority> n rets comma separated list of it's
//	// string form
//
//	private String getAuthoritiesInString(Collection<? extends GrantedAuthority> authorities) {
//		String authorityString = authorities.stream().
//				map(authority -> authority.getAuthority())
//				.collect(Collectors.joining(","));
//		System.out.println(authorityString);
//		return authorityString;
//	}
//	// this method will be invoked by our custom JWT filter to get list of granted authorities n store it in auth token
//		public List<GrantedAuthority> getAuthoritiesFromClaims(Claims claims) {
//		String authString = (String) claims.get("authorities");
//		List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(authString);
//		authorities.forEach(System.out::println);
//		return authorities;
//	}
//	// this method will be invoked by our custom JWT filter to get user id n store it in auth token
//			public Long getUserIdFromJwtToken(Claims claims) {
//				return Long.valueOf((int)claims.get("id"));			
//			}
//			
//			
//			
//			
//			public Authentication populateAuthenticationTokenFromJWT(String jwt) {
//				
//				Claims payloadClaims = validateJwtToken(jwt);
//				
//				String email = getUserNameFromJwtToken(payloadClaims);
//				// get granted authorities as a custom claim
//				List<GrantedAuthority> authorities = getAuthoritiesFromClaims(payloadClaims);
//				// get userId as the custom claim		
//				Long userId=getUserIdFromJwtToken(payloadClaims);
//				// add user name/email , user id n  granted authorities in Authentication object
//				UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email,userId,
//						authorities);
//				System.out.println("is authenticated "+token.isAuthenticated());//true
//				return token;
//		
//			}
//
//}
