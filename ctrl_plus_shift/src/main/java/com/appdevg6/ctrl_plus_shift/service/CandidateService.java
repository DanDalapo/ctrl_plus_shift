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
        candidateUpdate.setPlatform(c.getPlatform());
        candidateUpdate.setPosition(c.getPosition());
        candidateUpdate.setCourse(c.getCourse());
        candidateUpdate.setUser(c.getUser());

        return repo.save(candidateUpdate);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }
}