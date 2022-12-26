package com.group5.stackoverflowclone.domain.answer.mapper;

import com.group5.stackoverflowclone.domain.answer.dto.AnswerPatchDto;
import com.group5.stackoverflowclone.domain.answer.dto.AnswerPostDto;
import com.group5.stackoverflowclone.domain.answer.dto.AnswerResponseDto;
import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answerList);

    @Mapping(source = "userId", target = "user.userId")
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "user.displayName", target = "displayName")
    @Mapping(source = "user.userId", target = "userId")
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
