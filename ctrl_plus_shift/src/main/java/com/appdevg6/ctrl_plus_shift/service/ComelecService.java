package com.appdevg6.ctrl_plus_shift.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.appdevg6.ctrl_plus_shift.entity.ComelecEntity;
import com.appdevg6.ctrl_plus_shift.repository.ComelecRepository;

@Service
public class ComelecService {

    private final ComelecRepository repo;

    public ComelecService(ComelecRepository repo) {
        this.repo = repo;
    }

    public ComelecEntity create(ComelecEntity c) { return repo.save(c); }
    public List<ComelecEntity> getAll() { return repo.findAll(); }
    public ComelecEntity getById(Integer id) { return repo.findById(id).orElse(null); }
    public ComelecEntity update(Integer id, ComelecEntity c) {
        ComelecEntity comelecUpdate = repo.findById(id).orElse(null);
        if (comelecUpdate == null) return null;

        comelecUpdate.setComelecLevel(c.getComelecLevel());
        comelecUpdate.setDepartment(c.getDepartment());
        comelecUpdate.setUser(c.getUser());

        return repo.save(comelecUpdate);
    }
    public void delete(Integer id) { repo.deleteById(id); }
}

