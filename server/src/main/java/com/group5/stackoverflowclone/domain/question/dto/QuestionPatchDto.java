package com.group5.stackoverflowclone.domain.question.dto;

import com.group5.stackoverflowclone.domain.tag.dto.TagSimplePostDto;
import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class QuestionPatchDto {
    private long questionId;

    @NotBlank
    private String title;

    private String content;

    private List<Tag> tags;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}
