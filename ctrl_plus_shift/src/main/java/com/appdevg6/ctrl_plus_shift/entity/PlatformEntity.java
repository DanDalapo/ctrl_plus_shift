package com.appdevg6.ctrl_plus_shift.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "platform")
public class PlatformEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "platform_id")
    private Integer platformId;

    @Column(name = "platform_name", nullable = false)
    private String platformName;

    @Column(name = "description", length = 1000)
    private String description;

    public PlatformEntity() {}

    public PlatformEntity(String platformName, String description) {
        this.platformName = platformName;
        this.description = description;
    }

    public Integer getPlatformId() {
        return platformId;
    }

    public void setPlatformId(Integer platformId) {
        this.platformId = platformId;
    }

    public String getPlatformName() {
        return platformName;
    }

    public void setPlatformName(String platformName) {
        this.platformName = platformName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}