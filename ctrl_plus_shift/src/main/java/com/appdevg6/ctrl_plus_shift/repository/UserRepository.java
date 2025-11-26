package com.appdevg6.ctrl_plus_shift.repository;

import com.appdevg6.ctrl_plus_shift.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> { }