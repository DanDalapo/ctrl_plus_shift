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

    // === THIS IS THE FIXED UPDATE METHOD ===
    public UserEntity update(Integer id, UserEntity updated) {
        UserEntity userUpdate = repo.findById(id).orElse(null);
        if (userUpdate == null) return null;

        // Only update fields if they are NOT null
        if (updated.getFirstName() != null) userUpdate.setFirstName(updated.getFirstName());
        if (updated.getLastName() != null) userUpdate.setLastName(updated.getLastName());
        if (updated.getDateOfBirth() != null) userUpdate.setDateOfBirth(updated.getDateOfBirth());
        if (updated.getEmail() != null) userUpdate.setEmail(updated.getEmail());
        if (updated.getUserType() != null) userUpdate.setUserType(updated.getUserType());
        if (updated.getPhoneNumber() != null) userUpdate.setPhoneNumber(updated.getPhoneNumber());
        if (updated.getBio() != null) userUpdate.setBio(updated.getBio());

        // CRITICAL PROTECTION: Do not overwrite password if it's null/empty
        if (updated.getPassword() != null && !updated.getPassword().isEmpty()) {
            userUpdate.setPassword(updated.getPassword());
        }

        return repo.save(userUpdate);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }

    public UserEntity loginUser(String email, String password) {
        UserEntity user = repo.findByEmail(email);
        if (user != null && user.getPassword() != null) { 
            if (user.getPassword().equals(password)) {
                return user; 
            }
        }
        return null; 
    }
}