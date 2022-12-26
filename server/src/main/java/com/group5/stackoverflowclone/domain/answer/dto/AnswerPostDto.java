package com.group5.stackoverflowclone.domain.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class AnswerPostDto {
    @NotNull
    private long userId;

    @NotBlank
    private String content;
}
