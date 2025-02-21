package com.smit.planify.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.smit.planify.entities.Event;
import com.smit.planify.repository.EventRepo;

@Component
public class EventService {
	
	@Autowired
	EventRepo repo;
	
	public List<Event> getAllEvents() {
		return repo.findAll();
	}
	
	public Optional<Event> getOneEvent(int id) {
		return repo.findById(id);
	}
	
	public String addOneEvent(Event event) {
		try {			
			repo.save(event);
			return "event saved";
		} catch (Exception e) {
			return e.toString();
		}
	}
	
}
