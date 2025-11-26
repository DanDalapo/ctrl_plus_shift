package com.appdevg6.ctrl_plus_shift.controller;

import com.appdevg6.ctrl_plus_shift.entity.VoteEntity;
import com.appdevg6.ctrl_plus_shift.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/votes")
@CrossOrigin(origins = "http://localhost:3000")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @PostMapping
    public VoteEntity castVote(@RequestBody VoteEntity vote) {
        return voteService.castVote(vote);
    }

    @GetMapping
    public List<VoteEntity> getAllVotes() {
        return voteService.getAllVotes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VoteEntity> getVoteById(@PathVariable Integer id) {
        return voteService.getVoteById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/voter/{voterId}")
    public List<VoteEntity> getVotesByVoter(@PathVariable Integer voterId) {
        return voteService.getVotesByVoter(voterId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVote(@PathVariable Integer id) {
        voteService.deleteVote(id);
        return ResponseEntity.ok().build();
    }
}