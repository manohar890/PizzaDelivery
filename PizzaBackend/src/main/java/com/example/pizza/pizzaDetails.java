package com.example.pizza;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class pizzaDetails  {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int foodid;
	private String foodName;
	private float cost;
	public int getFoodid() {
		return foodid;
	}
	public void setFoodid(int foodid) {
		this.foodid = foodid;
	}
	public String getFoodName() {
		return foodName;
	}
	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}
	public float getCost() {
		return cost;
	}
	public void setCost(float cost) {
		this.cost = cost;
	}
	
      public pizzaDetails() {
    	  super();
		// TODO Auto-generated constructor stub
	}
	public pizzaDetails(int foodid, String foodName, float cost) {
		super();
		this.foodid = foodid;
		this.foodName = foodName;
		this.cost = cost;
	}
      

}
