package com.smit.planify.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smit.planify.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	
	Optional<User> findByEmailAndPassword(String email, String password);
	
	Optional<User> findByEmail(String email);

}
