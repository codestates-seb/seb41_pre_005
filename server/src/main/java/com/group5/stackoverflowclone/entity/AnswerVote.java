package com.group5.stackoverflowclone.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class AnswerVote {
    @Id
    @Column(name = "ANSWER_VOTE_ID")
    private long voteId;

    @Column
    private boolean upVote = false;

    @Column
    private boolean downVote = false;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User users;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answers;

    public void addUser(User user) {
        this.users = user;
    }

    public void addAnswer(Answer answer) {
        this.answers = answer;
    }

    public AnswerVote(boolean upVote, boolean downVote) {
        this.upVote = upVote;
        this.downVote = downVote;
    }
}
