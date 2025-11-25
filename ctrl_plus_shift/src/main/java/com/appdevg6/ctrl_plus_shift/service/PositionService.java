package com.appdevg6.ctrl_plus_shift.service;

import com.appdevg6.ctrl_plus_shift.entity.Position;
import com.appdevg6.ctrl_plus_shift.repository.PositionRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PositionService {
    private final PositionRepository positionRepository;

    public PositionService(PositionRepository positionRepository) {
        this.positionRepository = positionRepository;
    }

    
    public List<Position> getAllPositions() {
        return positionRepository.findAll();
    }

    public Position getPositionById(Long id) {
        return positionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Position not found with id: " + id));
    }

    public Position createPosition(Position position) {
        Optional<Position> existingPosition = positionRepository.findByPositionName(position.getPositionName());
        if (existingPosition.isPresent()) {
            throw new RuntimeException("Position with name '" + position.getPositionName() + "' already exists.");
        }
        return positionRepository.save(position);
    }

    public Position updatePosition(Long id, Position positionDetails) {
        Position existingPosition = getPositionById(id);

        existingPosition.setPositionName(positionDetails.getPositionName());
        existingPosition.setDescription(positionDetails.getDescription());

        return positionRepository.save(existingPosition);
    }

    public void deletePosition(Long id) {
        Position position = getPositionById(id);
        positionRepository.delete(position);
    }
}