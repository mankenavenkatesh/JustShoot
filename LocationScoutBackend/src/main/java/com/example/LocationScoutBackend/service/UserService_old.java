package com.example.LocationScoutBackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LocationScoutBackend.exception.ResourceNotFoundException;
import com.example.LocationScoutBackend.models.LocationOwner;
import com.example.LocationScoutBackend.models.User;
import com.example.LocationScoutBackend.repository.LocationOwnerRepository;
import com.example.LocationScoutBackend.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	
	public User getUserById(long userId) {
		User obj = userRepository.findById(userId).get();			
		return obj;
	}	
	
	public User getUserByUserName(String userName){
//		User obj = userRepository.findByUsername(userName);
        User user = userRepository.findByUsername(userName).orElseThrow(() -> new ResourceNotFoundException("User", "username", userName));
		return user;
	}
		
	public List<User> getAllUsers(){
		List<User> list = new ArrayList<User>();
		userRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	public User addUser(User user){	        
		return userRepository.save(user);    	        
	}
	
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	public void deleteUser(long userId) {
		userRepository.deleteById(userId);
	}
	
}
