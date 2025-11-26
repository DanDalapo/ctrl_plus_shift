package com.appdevg6.ctrl_plus_shift.service;

import com.appdevg6.ctrl_plus_shift.entity.VoteEntity;
import com.appdevg6.ctrl_plus_shift.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;

    public VoteEntity castVote(VoteEntity vote) {
        if (vote.getTimestamp() == null) {
            vote.setTimestamp(new Date());
        }

        return voteRepository.save(vote);
    }

    public List<VoteEntity> getAllVotes() {
        return voteRepository.findAll();
    }

    public Optional<VoteEntity> getVoteById(Integer id) {
        return voteRepository.findById(id);
    }

    public List<VoteEntity> getVotesByVoter(Integer voterId) {
        return voteRepository.findByVoterId(voterId);
    }

    public void deleteVote(Integer id) {
        voteRepository.deleteById(id);
    }
}