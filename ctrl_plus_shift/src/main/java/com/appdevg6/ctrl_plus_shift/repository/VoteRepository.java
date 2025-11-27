package com.appdevg6.ctrl_plus_shift.repository;

import com.appdevg6.ctrl_plus_shift.entity.VoteEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoteRepository extends JpaRepository<VoteEntity, Integer> {

    List<VoteEntity> findByVoterId(Integer voterId);
    
}