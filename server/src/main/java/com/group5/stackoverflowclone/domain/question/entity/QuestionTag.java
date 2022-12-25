package com.group5.stackoverflowclone.domain.question.entity;

import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public QuestionTag(Question question, Tag tag) {
        addQuestion(question);
        addTag(tag);
    }

    public void addQuestion(Question question) {
        this.question = question;
        question.addQuestionTag(this);
    }

    public void addTag(Tag tag) {
        this.tag = tag;
        tag.addQuestionTag(this);
    }
}
