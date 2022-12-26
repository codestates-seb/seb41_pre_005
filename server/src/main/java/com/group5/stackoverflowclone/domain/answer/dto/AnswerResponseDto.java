package com.group5.stackoverflowclone.domain.answer.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private long questionId;
    private long userId;
    private String content;
    private long voteCount;
    private String displayName;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
