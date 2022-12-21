package com.group5.stackoverflowclone.entity;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    private String content;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne()
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne()
    @JoinColumn(name = "QUESTION_ID" )
    private Question question;

    @OneToMany(mappedBy = "COMMENT")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "VOTE")
    private List<Vote> votes = new ArrayList<>();

    public void addUser(User user) {
        this.users = user;
    }

    public void addComment (Comment comment) {
        this.comments = comment;
    }

}
