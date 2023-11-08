package com.example.pizza.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.pizza.pizzaDetails;
import com.example.pizza.model.PizzaCart;
import com.example.pizza.model.PizzaOrders;
import com.example.pizza.model.Store;
import com.example.pizza.model.userRegistration;
import com.example.pizza.repository.PizzaCartRepository;
import com.example.pizza.repository.PizzaOrderRepository;
import com.example.pizza.repository.StoreRepository;
import com.example.pizza.repository.UserRepository;
import com.example.pizza.repository.pizzaRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class PizzaController {

	private String username;
	
	@Autowired
	pizzaRepository pr;
	
	@Autowired
	UserRepository urep;
	
	@Autowired
	StoreRepository strep;
	
	@Autowired
	PizzaCartRepository pcr;
	
	@Autowired
	PizzaOrderRepository por;
	
	@GetMapping("/getAllItems")
	public ResponseEntity<List<pizzaDetails>> getAll(){
		return new ResponseEntity<List<pizzaDetails>>(pr.findAll(),HttpStatus.OK);
	}
	
	@PostMapping("/addItem")
	public ResponseEntity<pizzaDetails> AddfoodItem(@RequestBody pizzaDetails pd) {
		return new ResponseEntity<>(pr.save(pd),HttpStatus.CREATED);
		
	}
	@GetMapping("/users")
	public ResponseEntity<List<userRegistration>> allUsers(){
		return new ResponseEntity<List<userRegistration>>(urep.findAll(),HttpStatus.OK);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> UserRegister(@RequestBody userRegistration user){
			urep.save(user);
			
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/getById")
	public ResponseEntity<pizzaDetails> getById(@RequestParam("id") int id) {
		pizzaDetails up = pr.findById(id).get();
		return new ResponseEntity<>(up,HttpStatus.CREATED);
		
	}
	
	@PutMapping("/updateItem")
	public ResponseEntity<pizzaDetails> updateitem(@RequestBody pizzaDetails pd, @RequestParam("id") int id){
		pizzaDetails up = pr.findById(id).get();
		up.setFoodName(pd.getFoodName());
		up.setCost(pd.getCost());
		return new ResponseEntity<pizzaDetails>(pr.save(up),HttpStatus.OK);
	}
	@DeleteMapping("/deleteById")
	public ResponseEntity<HttpStatus> deleteById(@RequestParam("id") int id){
		pr.deleteById(id);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@PostMapping("/validation")
	public ResponseEntity<HttpStatus> validation(@RequestBody userRegistration user){
		System.out.println(user.getUserName());
		System.out.println(user.getUserPassword());
		Optional<userRegistration> op=urep.findByUserName(user.getUserName());
		userRegistration u;
		if(op.isPresent()) {
		u= op.get();
		if(u.getUserPassword().equals(user.getUserPassword())) {
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}else {
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
		}else {
			return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
					
		}
		
	}
	
	@PostMapping("/addPlace")
	public ResponseEntity<HttpStatus> addStore(@RequestBody Store store){
		strep.save(store);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@PostMapping("/set")
	public void set(@RequestParam("name") String name) {
		username=name;
		System.out.println(username);
	}
	
	@PostMapping("/addToCart")
	public ResponseEntity<HttpStatus> addToCart(@RequestBody PizzaCart cart){
		cart.setUserName(username);
		pcr.save(cart);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@GetMapping("/getCartItems")
	public ResponseEntity<List<PizzaCart>> getCartItems(){
		System.out.println(username);
		return new ResponseEntity<List<PizzaCart>>(pcr.findByUserName(username),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteCartItem/{id}")
	public void deleteCartItem(@PathVariable("id") Long id) {
		pcr.deleteById(id);
		
	}
	
	@PostMapping("/placeOrder")
	public void placeOrder(@RequestBody PizzaCart cart) {
		PizzaOrders pr= new PizzaOrders();
		pr.setItemName(cart.getItemName());
		double cost= cart.getCost()*cart.getItemQuantity();
		pr.setCost(cost);
		pr.setUserName(username);
		por.save(pr);
		pcr.deleteByUserName(username);				
	
	}
	
	@GetMapping("/getOrders")
	public ResponseEntity<List<PizzaOrders>> getAllOrders(){
		return new ResponseEntity<List<PizzaOrders>>(por.findByUserName(username),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteOrder/{id}")
	public void deleteOrder(@PathVariable("id") long id) {
		por.deleteById(id);
	}
	
	@GetMapping("/getStores")
	public ResponseEntity<List<Store>> getStores(){
		return new ResponseEntity<List<Store>>(strep.findAll(),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteFood/{id}")
	public void deleteFood(@PathVariable("id") int id) {
		pr.deleteById(id);
		
	}
}
