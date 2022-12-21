package com.group5.stackoverflowclone.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;

    private int amount;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void addUser(User user) {
        this.user = user;
        if (!this.user.getVotes().contains(this)) {
            this.user.getVotes().add(this);
        }
    }

    public void addAnswer(Answer answer) {
        this.answer = answer;
        if (!this.answer.getVotes().contains(this)) {
            this.answer.getVotes().add(this);
        }
    }

    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getVotes().contains(this)) {
            this.question.getVotes().add(this);
        }
    }
}
