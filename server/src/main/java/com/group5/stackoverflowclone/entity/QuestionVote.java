package com.group5.stackoverflowclone.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class QuestionVote {
    @Id
    @Column(name = "QUESTION_VOTE_ID")
    private long voteId;

    @Column
    private boolean upVote = false;

    @Column
    private boolean downVote = false;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User users;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question questions;

    public void addUser(User user) {
        this.users = user;
    }

    public void addQuestion(Question question) {
        this.questions = question;
    }

    public QuestionVote(boolean upVote, boolean downVote) {
        this.upVote = upVote;
        this.downVote = downVote;
    }
}
