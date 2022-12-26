package com.group5.stackoverflowclone.domain.question.dto;

import com.group5.stackoverflowclone.domain.answer.dto.AnswerResponseDto;
import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import com.group5.stackoverflowclone.domain.tag.dto.TagResponseDto;
import com.group5.stackoverflowclone.domain.tag.dto.TagSimplePostDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;
    private long userId;
    private String title;
    private String content;
    private String displayName;
    private long viewCount;
    private long voteCount;
    private List<AnswerResponseDto> answerList;
    private List<TagResponseDto> tagList;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
