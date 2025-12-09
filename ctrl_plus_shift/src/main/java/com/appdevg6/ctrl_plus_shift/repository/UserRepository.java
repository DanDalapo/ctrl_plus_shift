package com.appdevg6.ctrl_plus_shift.repository;

import com.appdevg6.ctrl_plus_shift.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    // This automagically creates a query: SELECT * FROM users WHERE email = ?
    UserEntity findByEmail(String email);
    
    // Check if student ID already exists
    UserEntity findByStrStudentID(String strStudentID);
}