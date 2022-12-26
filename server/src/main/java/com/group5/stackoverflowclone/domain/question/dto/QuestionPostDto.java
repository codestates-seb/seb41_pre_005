package com.group5.stackoverflowclone.domain.question.dto;

import com.group5.stackoverflowclone.domain.tag.dto.TagSimplePostDto;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
public class QuestionPostDto {
    @NotNull
    private long userId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    private String tagNameList;
}
