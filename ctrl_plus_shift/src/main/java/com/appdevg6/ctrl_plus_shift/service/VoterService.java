package com.appdevg6.ctrl_plus_shift.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.appdevg6.ctrl_plus_shift.entity.VoterEntity;
import com.appdevg6.ctrl_plus_shift.repository.VoterRepository;

@Service
public class VoterService {

    private final VoterRepository repo;
    public VoterService(VoterRepository repo) {
        this.repo = repo;
    }

    public VoterEntity create(VoterEntity v) { return repo.save(v); }
    public List<VoterEntity> getAll() { return repo.findAll(); }
    public VoterEntity getById(Integer id) { return repo.findById(id).orElse(null); }
    public VoterEntity update(Integer id, VoterEntity v) {
        VoterEntity voterUpdate = repo.findById(id).orElse(null);
        if (voterUpdate == null) return null;

        voterUpdate.setStudentID(v.getStudentID());
        voterUpdate.setAccountStatus(v.getAccountStatus());
        voterUpdate.setHadVoted(v.isHadVoted());
        voterUpdate.setElectionsParticipated(v.getElectionsParticipated());
        voterUpdate.setUser(v.getUser());

        return repo.save(voterUpdate);
    }
    public void delete(Integer id) { repo.deleteById(id); }
}

