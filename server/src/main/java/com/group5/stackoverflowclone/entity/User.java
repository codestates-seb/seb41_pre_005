package com.group5.stackoverflowclone.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class User {
    @Id
    @Column(name = "USER_ID")
    private long userId;
    private String email;
    private String password;
    private String displayName;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "users")
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @OneToMany(mappedBy = "users")
    private List<AnswerVote> answerVotes = new ArrayList<>();

    @OneToMany(mappedBy = "answer")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "comment")
    private List<Comment> votes = new ArrayList<>();

    public User(String email, String password, String displayName) {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
    }

    public void addVote(QuestionVote questionVote) {
        votes.add(questionVote);
//        if (questionVote.getUser() != this) {
//            questionVote.setUser(this);
//        }
    }

    public void addAnswer(Answer answer) {
        votes.add(answer);
    }

    public void addVote(Question question) {
        votes.add(question);
    }

    public void addVote(Comment comment) {
        votes.add(comment);
    }
}
