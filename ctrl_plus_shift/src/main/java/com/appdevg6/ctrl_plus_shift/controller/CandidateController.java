package com.appdevg6.ctrl_plus_shift.controller;

import com.appdevg6.ctrl_plus_shift.entity.CandidateEntity;
import com.appdevg6.ctrl_plus_shift.service.CandidateService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/candidates")
@CrossOrigin(origins = "http://localhost:3000")
public class CandidateController {

    private final CandidateService candidateService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping
    public List<CandidateEntity> getAllCandidates() {
        return candidateService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CandidateEntity> getCandidateById(@PathVariable Integer id) {
        CandidateEntity candidate = candidateService.getById(id);
        if (candidate != null) {
            return ResponseEntity.ok(candidate);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> createCandidate(@RequestBody CandidateEntity candidate) {
        try {
            CandidateEntity created = candidateService.create(candidate);
            return ResponseEntity.ok(created);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}