package com.smit.planify.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smit.planify.entities.User;
import com.smit.planify.repository.UserRepo;
import com.smit.planify.service.UserService;

import DTO.userDTO;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	UserService service;
	
	// USER SIGN UP 
	@PostMapping("/user")
	public ResponseEntity<Map<String, String>> addUser(@RequestBody User user) {
		Map<String, String> response = new HashMap<>();
		
		try {
			String answer = service.postOneUser(user);
			
			if(answer == "not present") {				
				response.put("message", "user created");
				
				return ResponseEntity.ok(response);
			}
			
			else {
				response.put("message", "user already exist");
				
				return ResponseEntity.ok(response);
			}
		} catch (Exception e) {
			response.put("error", e.getMessage());
			
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
	
	// USER LOGIN 
	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> checkUser(@RequestBody userDTO loginDTO) {
		Map<String, String> response = new HashMap<>();
		
		Optional<User> user =  service.checkOneUser(loginDTO.getEmail(), loginDTO.getPassword());
		
		if(user.isPresent()) {
			
			long user_id = user.get().getUserId();
			
			response.put("message", "yes");
			response.put("user_id", "" + user_id);
			
			return ResponseEntity.ok(response);
		}			
		else {			
			response.put("message", "no");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return service.getAllProducts();
	}
}
