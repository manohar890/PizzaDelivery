package com.example.pizza.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pizza.model.PizzaOrders;
public interface PizzaOrderRepository extends JpaRepository<PizzaOrders, Long>{
	public List<PizzaOrders> findByUserName(String userName);
	
}
