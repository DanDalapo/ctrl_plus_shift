package com.appdevg6.ctrl_plus_shift.service;

import com.appdevg6.ctrl_plus_shift.entity.PlatformEntity;
import com.appdevg6.ctrl_plus_shift.repository.PlatformRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PlatformService {

    @Autowired
    private PlatformRepository platformRepository;

    public PlatformEntity savePlatform(PlatformEntity platform) {
        return platformRepository.save(platform);
    }

    public List<PlatformEntity> getAllPlatforms() {
        return platformRepository.findAll();
    }

    public Optional<PlatformEntity> getPlatformById(Integer id) {
        return platformRepository.findById(id);
    }

    public void deletePlatform(Integer id) {
        platformRepository.deleteById(id);
    }
}