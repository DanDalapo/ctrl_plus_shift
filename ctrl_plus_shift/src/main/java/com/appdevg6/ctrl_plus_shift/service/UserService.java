package com.appdevg6.ctrl_plus_shift.service;

import org.springframework.stereotype.Service;

import com.appdevg6.ctrl_plus_shift.entity.UserEntity;
import com.appdevg6.ctrl_plus_shift.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public UserEntity create(UserEntity user) {
        return repo.save(user);
    }

    public List<UserEntity> getAll() {
        return repo.findAll();
    }

    public UserEntity getById(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public UserEntity update(Integer id, UserEntity updated) {
        UserEntity userUpdate = repo.findById(id).orElse(null);
        if (userUpdate == null) return null;

        userUpdate.setFirstName(updated.getFirstName());
        userUpdate.setLastName(updated.getLastName());
        userUpdate.setDateOfBirth(updated.getDateOfBirth());
        userUpdate.setEmail(updated.getEmail());
        userUpdate.setPassword(updated.getPassword());
        userUpdate.setUserType(updated.getUserType());
        userUpdate.setPhoneNumber(updated.getPhoneNumber());
        userUpdate.setBio(updated.getBio());

        return repo.save(userUpdate);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }
}