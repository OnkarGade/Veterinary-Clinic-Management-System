package com.petclinic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.User;
import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {
	public Optional<User> findByEmailAndPassword(String email, String password);

	public Optional<User> findByEmail(String email);
}
