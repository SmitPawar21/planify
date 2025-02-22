package com.smit.planify.entities;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "event_creation")
public class EventCreation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cr_id;
	
	@Column(name = "user_id", nullable = false)
	private int user_id;
	
	@Column(name = "id", nullable = false)
	private int id;
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}
