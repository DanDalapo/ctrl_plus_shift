package com.appdevg6.ctrl_plus_shift.service;

import com.appdevg6.ctrl_plus_shift.entity.CandidateEntity;
import com.appdevg6.ctrl_plus_shift.repository.CandidateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {

    private final CandidateRepository repo;

    public CandidateService(CandidateRepository repo) {
        this.repo = repo;
    }

    public CandidateEntity create(CandidateEntity c) {
        // Check if user has already applied for candidacy with complete data
        if (c.getUser() != null) {
            repo.findByUser(c.getUser()).ifPresent(existing -> {
                // Only block if the existing application has required data (positionName and platformTitle)
                if (existing.getPositionName() != null && existing.getPlatformTitle() != null) {
                    throw new RuntimeException("You have already applied for candidacy. Each user can only apply once.");
                }
            });
        }
        return repo.save(c);
    }

    public List<CandidateEntity> getAll() {
        return repo.findAll();
    }

    public CandidateEntity getById(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public CandidateEntity update(Integer id, CandidateEntity c) {
        CandidateEntity candidateUpdate = repo.findById(id).orElse(null);
        if (candidateUpdate == null) return null;
        candidateUpdate.setPositionName(c.getPositionName());
        candidateUpdate.setCourse(c.getCourse());
        candidateUpdate.setPartyName(c.getPartyName());
        candidateUpdate.setPlatformTitle(c.getPlatformTitle());
        candidateUpdate.setPlatformDescription(c.getPlatformDescription());
        candidateUpdate.setStatus(c.getStatus());
        candidateUpdate.setUser(c.getUser());

        return repo.save(candidateUpdate);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }
}