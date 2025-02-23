package com.smit.planify.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.smit.planify.entities.Event;
import com.smit.planify.entities.EventCreation;
import com.smit.planify.repository.EventCreationRepo;
import com.smit.planify.repository.EventRepo;

@Component
@Service
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
		} catch (DataIntegrityViolationException e) {
	        System.out.println("Database constraint violation"+ e);
	        
	        return "Database constraint violation: " + e.getMessage();
	    } catch (Exception e) {
			System.out.println(e);
			return e.toString();
		}
	}
	
}
