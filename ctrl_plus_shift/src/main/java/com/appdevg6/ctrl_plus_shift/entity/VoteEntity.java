package com.appdevg6.ctrl_plus_shift.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "vote")
public class VoteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vote_id")
    private Integer voteId;

    @Column(name = "voter_id", nullable = false)
    private Integer voterId;

    @Column(name = "candidate_id", nullable = false)
    private Integer candidateId;

    @Column(name = "position_id", nullable = false)
    private Integer positionId;

    @Column(name = "timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    public VoteEntity() {
        this.timestamp = new Date();
    }

    public VoteEntity(Integer voterId, Integer candidateId, Integer positionId) {
        this.voterId = voterId;
        this.candidateId = candidateId;
        this.positionId = positionId;
        this.timestamp = new Date();
    }

    public Integer getVoteId() {
        return voteId;
    }

    public void setVoteId(Integer voteId) {
        this.voteId = voteId;
    }

    public Integer getVoterId() {
        return voterId;
    }

    public void setVoterId(Integer voterId) {
        this.voterId = voterId;
    }

    public Integer getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Integer candidateId) {
        this.candidateId = candidateId;
    }

    public Integer getPositionId() {
        return positionId;
    }

    public void setPositionId(Integer positionId) {
        this.positionId = positionId;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}