package com.appdevg6.ctrl_plus_shift.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.appdevg6.ctrl_plus_shift.entity.CandidateEntity;

public interface CandidateRepository extends JpaRepository<CandidateEntity, Integer> { }