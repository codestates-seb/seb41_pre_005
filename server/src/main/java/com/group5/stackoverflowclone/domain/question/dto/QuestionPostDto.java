package com.group5.stackoverflowclone.domain.question.dto;

import com.group5.stackoverflowclone.domain.question.entity.QuestionTag;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class QuestionPostDto {
    @NotBlank
    private String title;

    @NotBlank
    private String content;

    private List<QuestionTag> questionTags;
}
