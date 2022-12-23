package com.group5.stackoverflowclone.entity;

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
@Entity

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    private String content;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne()
    @JoinColumn(name = "USER_ID" )
    private User user;

    @ManyToOne()
    @JoinColumn(name = "ANSWER_ID;" )
    private Answer answer;

    public void addUser(User user) {
        this.users = user;
    }

    public void addAnswer (Answer answer) {
        this.answers = answer;
    }
}
