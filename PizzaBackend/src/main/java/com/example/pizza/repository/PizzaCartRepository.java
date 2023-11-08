package com.example.pizza.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza.model.PizzaCart;

import jakarta.transaction.Transactional;

public interface PizzaCartRepository extends JpaRepository<PizzaCart, Long>{
	
	public List<PizzaCart> findByUserName(String username);
	
	@Transactional
	public void deleteByUserName(String userName);

}
