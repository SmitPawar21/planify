package com.smit.planify.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.smit.planify.entities.User;
import com.smit.planify.repository.UserRepo;

@Component
public class UserService {
	
	@Autowired
	UserRepo repo;
	
	public String postOneUser(User user) {
		Optional<User> user1 = repo.findByEmail(user.getEmail());
		
		if(user1.isPresent()) {
			return "present";
		} else {
			repo.save(user);
			return "not present";
		}
	}
	
	public List<User> getAllProducts() {
		return repo.findAll();
	}
	
	public Optional<User> checkOneUser(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}
	
}
