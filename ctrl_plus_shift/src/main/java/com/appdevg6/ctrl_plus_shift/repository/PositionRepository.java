package com.appdevg6.ctrl_plus_shift.repository;

import com.appdevg6.ctrl_plus_shift.entity.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PositionRepository extends JpaRepository<Position, Long> {
    Optional<Position> findByPositionName(String positionName);
    
}