package com.appdevg6.ctrl_plus_shift.controller;

import com.appdevg6.ctrl_plus_shift.entity.PlatformEntity;
import com.appdevg6.ctrl_plus_shift.service.PlatformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/platforms")
@CrossOrigin(origins = "http://localhost:3000")
public class PlatformController {

    @Autowired
    private PlatformService platformService;

    @PostMapping
    public PlatformEntity createPlatform(@RequestBody PlatformEntity platform) {
        return platformService.savePlatform(platform);
    }

    @GetMapping
    public List<PlatformEntity> getAllPlatforms() {
        return platformService.getAllPlatforms();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlatformEntity> getPlatformById(@PathVariable Integer id) {
        return platformService.getPlatformById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlatformEntity> updatePlatform(@PathVariable Integer id, @RequestBody PlatformEntity platformDetails) {
        return platformService.getPlatformById(id).map(platform -> {
            platform.setPlatformName(platformDetails.getPlatformName());
            platform.setDescription(platformDetails.getDescription());

            return ResponseEntity.ok(platformService.savePlatform(platform));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlatform(@PathVariable Integer id) {
        platformService.deletePlatform(id);
        return ResponseEntity.ok().build();
    }
}