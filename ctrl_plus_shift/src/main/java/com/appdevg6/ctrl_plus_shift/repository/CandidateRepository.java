package com.appdevg6.ctrl_plus_shift.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevg6.ctrl_plus_shift.entity.CandidateEntity;
import com.appdevg6.ctrl_plus_shift.entity.UserEntity;
import java.util.Optional;

public interface CandidateRepository extends JpaRepository<CandidateEntity, Integer> {
    Optional<CandidateEntity> findByUser(UserEntity user);
    boolean existsByUser(UserEntity user);
}