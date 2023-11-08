package com.example.pizza.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza.model.userRegistration;

public interface UserRepository extends JpaRepository<userRegistration, Long>{
	
	Optional<userRegistration> findByUserName(String username);

}
