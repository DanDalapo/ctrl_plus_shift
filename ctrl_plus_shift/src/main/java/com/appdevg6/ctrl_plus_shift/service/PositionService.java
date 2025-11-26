package com.appdevg6.ctrl_plus_shift.service;

import com.appdevg6.ctrl_plus_shift.entity.PositionEntity;
import com.appdevg6.ctrl_plus_shift.repository.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService {

    @Autowired
    private PositionRepository positionRepository;

    public PositionEntity createPosition(PositionEntity position) {
        return positionRepository.save(position);
    }

    public List<PositionEntity> getAllPositions() {
        return positionRepository.findAll();
    }

    public PositionEntity getPositionById(Integer id) {
        return positionRepository.findById(id).orElse(null);
    }

    public PositionEntity updatePosition(Integer id, PositionEntity positionDetails) {
        return positionRepository.findById(id).map(position -> {
            position.setPositionName(positionDetails.getPositionName());
            position.setDescription(positionDetails.getDescription());
            return positionRepository.save(position);
        }).orElse(null);
    }

    public void deletePosition(Integer id) {
        positionRepository.deleteById(id);
    }
}