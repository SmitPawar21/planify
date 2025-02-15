package com.smit.planify.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smit.planify.entities.Event;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> {
	
}
