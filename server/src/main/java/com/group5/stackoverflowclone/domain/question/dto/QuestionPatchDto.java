package com.group5.stackoverflowclone.domain.question.dto;

import com.group5.stackoverflowclone.domain.question.entity.QuestionTag;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class QuestionPatchDto {
    private long questionId;

    @NotBlank
    private String title;

    private String content;

    private List<QuestionTag> questionTags;
}
