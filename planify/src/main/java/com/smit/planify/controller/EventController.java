package com.smit.planify.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smit.planify.entities.Event;
import com.smit.planify.entities.EventCreation;
import com.smit.planify.service.EventService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {
	
	@Autowired
	EventService service;

	@GetMapping("/events")
	public List<Event> allEvents() {
		return service.getAllEvents();
	}
	
	@GetMapping("/event/{id}")
	public Optional<Event> oneEvent(@PathVariable int id) {
		return service.getOneEvent(id);
	}
	
	@PostMapping("/event")
	public ResponseEntity<Map<String, String>> addEvent(@RequestBody Event event) {
		System.out.println("Received Event: " + event);
		
		Map<String, String> response = new HashMap<>();
		String answer = service.addOneEvent(event);
		
		if(answer.equals("event saved")) {
			response.put("message", answer);
			
			System.out.println(answer);
			return ResponseEntity.ok(response);
		}
		
		response.put("error", answer);
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	}
	
}