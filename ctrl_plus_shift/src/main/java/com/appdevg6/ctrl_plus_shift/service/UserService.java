package com.appdevg6.ctrl_plus_shift.service;

import org.springframework.stereotype.Service;

import com.appdevg6.ctrl_plus_shift.entity.UserEntity;
import com.appdevg6.ctrl_plus_shift.entity.VoterEntity;
import com.appdevg6.ctrl_plus_shift.entity.CandidateEntity;
import com.appdevg6.ctrl_plus_shift.repository.UserRepository;
import com.appdevg6.ctrl_plus_shift.repository.VoterRepository;
import com.appdevg6.ctrl_plus_shift.repository.CandidateRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepo;
    private final VoterRepository voterRepo;
    private final CandidateRepository candidateRepo;

    public UserService(UserRepository userRepo, 
                       VoterRepository voterRepo, 
                       CandidateRepository candidateRepo) {
        this.userRepo = userRepo;
        this.voterRepo = voterRepo;
        this.candidateRepo = candidateRepo;
    }

    public UserEntity create(UserEntity user) {
        // Check if email already exists
        if (userRepo.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Email is already registered");
        }
        
        // Check if student ID already exists
        if (user.getStrStudentID() != null && !user.getStrStudentID().isEmpty()) {
            if (userRepo.findByStrStudentID(user.getStrStudentID()) != null) {
                throw new RuntimeException("Student ID is already in use");
            }
        }
        
        UserEntity savedUser = userRepo.save(user);

        String type = savedUser.getUserType();
        if (type == null) type = "VOTER";
        
        if (type.equalsIgnoreCase("CANDIDATE")) {
            CandidateEntity candidate = new CandidateEntity();
            candidate.setUser(savedUser);
            candidate.setCourse("Not Set"); 
            
            candidate.setPlatform(null);
            candidate.setPosition(null);
            
            candidateRepo.save(candidate);

        } else {
            VoterEntity voter = new VoterEntity();
            voter.setUser(savedUser);
            
            voter.setStudentID("2025-" + savedUser.getUserID());
            
            voter.setAccountStatus("ACTIVE");
            voter.setElectionsParticipated(0);
            voter.setHadVoted(false); 
            
            voterRepo.save(voter);
        }

        return savedUser;
    }

    public UserEntity update(Integer id, UserEntity updated) {
        UserEntity userUpdate = userRepo.findById(id).orElse(null);
        if (userUpdate == null) return null;

        if (updated.getFirstName() != null) userUpdate.setFirstName(updated.getFirstName());
        if (updated.getLastName() != null) userUpdate.setLastName(updated.getLastName());
        if (updated.getDateOfBirth() != null) userUpdate.setDateOfBirth(updated.getDateOfBirth());
        if (updated.getEmail() != null) userUpdate.setEmail(updated.getEmail());
        if (updated.getUserType() != null) userUpdate.setUserType(updated.getUserType());
        if (updated.getStrStudentID() != null) userUpdate.setStrStudentID(updated.getStrStudentID());
        if (updated.getBio() != null) userUpdate.setBio(updated.getBio());

        if (updated.getPassword() != null && !updated.getPassword().isEmpty()) {
            userUpdate.setPassword(updated.getPassword());
        }

        return userRepo.save(userUpdate);
    }

    public UserEntity loginUser(String email, String password) {
        UserEntity user = userRepo.findByEmail(email);

        if (user != null && user.getPassword() != null) {
            if (user.getPassword().equals(password)) {
                return user; 
            }
        }
        return null; 
    }

    public List<UserEntity> getAll() { 
        return userRepo.findAll(); 
    }

    public UserEntity getById(Integer id) { 
        return userRepo.findById(id).orElse(null); 
    }

    public void delete(Integer id) { 
        userRepo.deleteById(id); 
    }
}