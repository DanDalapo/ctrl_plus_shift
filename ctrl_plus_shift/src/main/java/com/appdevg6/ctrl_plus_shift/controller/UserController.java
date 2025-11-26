package com.appdevg6.ctrl_plus_shift.controller;

import com.appdevg6.ctrl_plus_shift.entity.UserEntity;
import com.appdevg6.ctrl_plus_shift.service.UserService;
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
    public UserEntity create(@RequestBody UserEntity u) { return service.create(u); }

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