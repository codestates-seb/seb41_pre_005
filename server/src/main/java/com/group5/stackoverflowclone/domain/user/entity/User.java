package com.group5.stackoverflowclone.domain.user.entity;

import com.group5.stackoverflowclone.domain.vote.Vote;
import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import com.group5.stackoverflowclone.domain.comment.entity.Comment;
import com.group5.stackoverflowclone.domain.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    private String email;

    private String password;

    private String displayName;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "user")
    private List<Vote> votes = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> comments = new ArrayList<>();

    public User(String email, String password, String displayName) {
        this.email = email;
        this.password = password;
        this.displayName = displayName;
    }

    public void addVote(Vote vote) {
        votes.add(vote);
        if (vote.getUser() != this) {
            vote.addUser(this);
        }
    }

    public void addAnswer(Answer answer) {
        answers.add(answer);
        if (answer.getUser() != this) {
            answer.addUser(this);
        }
    }

    public void addQuestion(Question question) {
        questions.add(question);
        if (question.getUser() != this) {
            question.addUser(this);
        }
    }

    public void addComment(Comment comment) {
        comments.add(comment);
        if (comment.getUser() != this) {
            comment.addUser(this);
        }
    }
}
