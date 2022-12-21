package com.group5.stackoverflowclone.domain.comment.entity;

import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    public void addUser(User user) {
        this.user = user;
        if (!this.user.getComments().contains(this)) {
            this.user.getComments().add(this);
        }
    }

    public void addAnswer(Answer answer) {
        this.answer = answer;
        if (!this.answer.getComments().contains(this)) {
            this.answer.getComments().add(this);
        }
    }
}
