package com.smit.planify.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smit.planify.entities.EventCreation;

@Repository
public interface EventCreationRepo extends JpaRepository<EventCreation, Integer> {

}
