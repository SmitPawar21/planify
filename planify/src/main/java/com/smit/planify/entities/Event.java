package com.smit.planify.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Auto-increment primary key

    @Column(unique = true, nullable = false)
    private String event_code; // Keep as a unique field
    
    private int user_id;
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDateTime() {
		return dateTime;
	}
	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}
	private String title;
	private String category;
	private String description;
	private String location;
	private String dateTime;
	private int max_limit;
	
	public int getMax_limit() {
		return max_limit;
	}
	public void setMax_limit(int max_limit) {
		this.max_limit = max_limit;
	}
	// Getters and Setters
	public String getEvent_code() {
		return event_code;
	}
	public void setEvent_code(String event_code) {
		this.event_code = event_code;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
}
