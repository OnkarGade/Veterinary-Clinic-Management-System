package com.petclinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;

@Transactional
@Service
@Slf4j
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	public void sendEmail(String to, String subject, String body) {
		try {
			MimeMessage message = javaMailSender.createMimeMessage(); // using this coz I want to send invoice in html style
			MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(body, true);
			javaMailSender.send(message);
			System.out.println("Email sent successfully");
		} catch (Exception e) {
			log.error("Exception while sending mail - " + e);
		}
	}
}