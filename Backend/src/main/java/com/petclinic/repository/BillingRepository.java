package com.petclinic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinic.pojos.Billing;
import com.petclinic.pojos.Status;

public interface BillingRepository extends JpaRepository<Billing, Long> {
		public List<Billing> findByStatus(Status status);
}
