package com.appdevg6.ctrl_plus_shift.repository;

import com.appdevg6.ctrl_plus_shift.entity.VoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VoteRepository extends JpaRepository<VoteEntity, Integer> {
        
    List<VoteEntity> findByVoterId(Integer voterId);
    
}