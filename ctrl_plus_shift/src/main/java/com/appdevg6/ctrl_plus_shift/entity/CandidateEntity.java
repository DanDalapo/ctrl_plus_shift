package com.appdevg6.ctrl_plus_shift.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "candidate")
public class CandidateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer candidateID;

    @OneToOne
    @JoinColumn(name = "userID", referencedColumnName = "userID")
    private UserEntity user;

    private String course;
    private Integer platformID;  
    private Integer positionID;

    
    public Integer getCandidateID() {
        return candidateID;
    }
    public void setCandidateID(Integer candidateID) {
        this.candidateID = candidateID;
    }
    public UserEntity getUser() {
        return user;
    }
    public void setUser(UserEntity user) {
        this.user = user;
    }
    public String getCourse() {
        return course;
    }
    public void setCourse(String course) {
        this.course = course;
    }
    public Integer getPlatformID() {
        return platformID;
    }
    public void setPlatformID(Integer platformID) {
        this.platformID = platformID;
    }
    public Integer getPositionID() {
        return positionID;
    }
    public void setPositionID(Integer positionID) {
        this.positionID = positionID;
    }
}

