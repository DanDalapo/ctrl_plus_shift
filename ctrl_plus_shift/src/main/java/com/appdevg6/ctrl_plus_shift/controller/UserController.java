package com.appdevg6.ctrl_plus_shift.controller;

import com.appdevg6.ctrl_plus_shift.entity.UserEntity;
import com.appdevg6.ctrl_plus_shift.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody UserEntity u) {
        try {
            UserEntity createdUser = service.create(u);
            return ResponseEntity.ok(createdUser);
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }
    @PostMapping("/login")
    
    public ResponseEntity<?> login(@RequestBody UserEntity loginDetails) {
        
    UserEntity user = service.loginUser(loginDetails.getEmail(), loginDetails.getPassword());
    if (user != null) {
        return ResponseEntity.ok(user); // Return the full user object on success
    } else {
        return ResponseEntity.status(401).body("Invalid Email or Password");
    }
}

    @GetMapping
    public List<UserEntity> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public UserEntity getById(@PathVariable Integer id) { return service.getById(id); }

    @PutMapping("/{id}")
    public UserEntity update(@PathVariable Integer id, @RequestBody UserEntity user) {
        return service.update(id, user);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        service.delete(id);
        return "User deleted";
    }
}