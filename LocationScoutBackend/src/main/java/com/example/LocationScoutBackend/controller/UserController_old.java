
package com.example.LocationScoutBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.LocationScoutBackend.models.User;
import com.example.LocationScoutBackend.service.UserService;
import com.example.LocationScoutBackend.util.UserValidator;

@Controller
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserValidator userValidator;
	
	@GetMapping("/{id}")	
	public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
		User user = userService.getUserById(id);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@GetMapping("/userName")	
	public ResponseEntity<User> getUserByUserName(@RequestParam("userName") String userName,
			@RequestParam("password") String password) {
		User user = userService.getUserByUserName(userName);
		if(user != null && user.getPassword().equals(password)){
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);		
	}
	
	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> list = userService.getAllUsers();
		return new ResponseEntity<List<User>>(list, HttpStatus.OK);
	}
	@PostMapping("/")
	public ResponseEntity<User> addUser(@RequestBody User user,  BindingResult bindingResult, UriComponentsBuilder builder) {			
//		userValidator.validate(user, bindingResult);
//		if(bindingResult.hasErrors()){
//			return new ResponseEntity<>(bindingResult.,HttpStatus.BAD_REQUEST);
//		}
		
		User existingUser = userService.getUserByUserName(user.getUsername());
		if(existingUser==null){
			return new ResponseEntity<User>(existingUser, HttpStatus.OK);
		}
		User newUser =  userService.addUser(user);                
        return new ResponseEntity<User>(newUser, HttpStatus.OK);        
	}
	@PutMapping("/")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		User updatedUser = userService.updateUser(user);
		return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
		userService.deleteUser(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
}
