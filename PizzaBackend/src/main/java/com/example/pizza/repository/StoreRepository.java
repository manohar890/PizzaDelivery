package com.example.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza.model.Store;

public interface StoreRepository extends JpaRepository<Store,Long> {

}
