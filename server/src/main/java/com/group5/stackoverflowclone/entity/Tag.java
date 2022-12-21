package com.group5.stackoverflowclone.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    private String name;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "tag")
    private List<QuestionTag> questionTags = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getTag() != this) {
            questionTag.addTag(this);
        }
    }
}
