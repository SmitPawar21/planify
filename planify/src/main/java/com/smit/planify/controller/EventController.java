package com.smit.planify.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.smit.planify.entities.Event;
import com.smit.planify.service.EventService;

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
	
	@PostMapping("event")
	public void addEvent(@RequestBody Event event) {
		service.addOneEvent(event);
	}
	
}