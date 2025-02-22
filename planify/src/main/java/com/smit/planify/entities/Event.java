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
	
	private String title;
	private String category;
	private String description;
	private String location;
	private String date_time;
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
	public String getdate_time() {
		return date_time;
	}
	public void setdate_time(String date_time) {
		this.date_time = date_time;
	}
	
}
