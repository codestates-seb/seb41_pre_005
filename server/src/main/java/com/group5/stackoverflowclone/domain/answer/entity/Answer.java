package com.group5.stackoverflowclone.domain.answer.entity;

import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.vote.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    private String content;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID" )
    private Question question;

    @OneToMany(mappedBy = "answer")
    private List<Vote> votes = new ArrayList<>();

    public void addUser(User user) {
        this.user = user;
        if (!this.user.getAnswers().contains(this)) {
            this.user.getAnswers().add(this);
        }
    }

    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getAnswers().contains(this)) {
            this.question.getAnswers().add(this);
        }
    }


    public void addVote(Vote vote) {
        votes.add(vote);
        if (vote.getAnswer() != this) {
            vote.addAnswer(this);
        }
    }

}
