package com.group5.stackoverflowclone.domain.question.dto;

import com.group5.stackoverflowclone.domain.answer.entity.Answer;
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
    private int viewCount;
    private int voteCount;
    private List<Answer> answerList;
    private List<TagSimplePostDto> tagIdList;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
