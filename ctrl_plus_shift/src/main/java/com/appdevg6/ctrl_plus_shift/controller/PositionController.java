package com.appdevg6.ctrl_plus_shift.controller;

import com.appdevg6.ctrl_plus_shift.entity.PositionEntity;
import com.appdevg6.ctrl_plus_shift.service.PositionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/positions")
@CrossOrigin(origins = "http://localhost:3000")
public class PositionController {

    private final PositionService positionService;

    public PositionController(PositionService positionService) {
        this.positionService = positionService;
    }

    @PostMapping
    public ResponseEntity<PositionEntity> createPosition(@RequestBody PositionEntity position) {
        PositionEntity newPosition = positionService.createPosition(position);
        return new ResponseEntity<>(newPosition, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PositionEntity>> getAllPositions() {
        List<PositionEntity> positions = positionService.getAllPositions();
        return ResponseEntity.ok(positions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PositionEntity> getPositionById(@PathVariable Long id) {
        PositionEntity position = positionService.getPositionById(id);
        return ResponseEntity.ok(position);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PositionEntity> updatePosition(@PathVariable Long id, @RequestBody PositionEntity positionDetails) {
        PositionEntity updatedPosition = positionService.updatePosition(id, positionDetails);
        return ResponseEntity.ok(updatedPosition);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePosition(@PathVariable Long id) {
        positionService.deletePosition(id);
        return ResponseEntity.noContent().build();
    }
}