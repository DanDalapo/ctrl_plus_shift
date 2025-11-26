package com.appdevg6.ctrl_plus_shift.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "voter")
public class VoterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer voterID;

    @OneToOne
    @JoinColumn(name = "userID", referencedColumnName = "userID")
    private UserEntity user;

    private String studentID;
    private String accountStatus;
    private boolean hadVoted;
    private Integer electionsParticipated;

    public Integer getVoterID() {
        return voterID;
    }

    public void setVoterID(Integer voterID) {
        this.voterID = voterID;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public String getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

    public boolean isHadVoted() {
        return hadVoted;
    }

    public void setHadVoted(boolean hadVoted) {
        this.hadVoted = hadVoted;
    }

    public Integer getElectionsParticipated() {
        return electionsParticipated;
    }

    public void setElectionsParticipated(Integer electionsParticipated) {
        this.electionsParticipated = electionsParticipated;
    }
}