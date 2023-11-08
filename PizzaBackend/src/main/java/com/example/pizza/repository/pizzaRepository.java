package com.example.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza.pizzaDetails;

public interface pizzaRepository extends JpaRepository<pizzaDetails, Integer> {

	
}

