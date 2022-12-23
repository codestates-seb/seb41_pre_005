package com.group5.stackoverflowclone.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionTagId;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getQuestionTags().contains(this)) {
            this.question.getQuestionTags().add(this);
        }
    }

    public void addTag(Tag tag) {
        this.tag = tag;
        if (!this.tag.getQuestionTags().contains(this)) {
            this.tag.getQuestionTags().add(this);
        }
    }
}
