package com.group5.stackoverflowclone.domain.question.mapper;

import com.group5.stackoverflowclone.domain.question.dto.QuestionPatchDto;
import com.group5.stackoverflowclone.domain.question.dto.QuestionPostDto;
import com.group5.stackoverflowclone.domain.question.dto.QuestionResponseDto;
import com.group5.stackoverflowclone.domain.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    @Mapping(source = "user.userId", target = "userId")
    QuestionResponseDto questionToQuestionResponseDto(Question question);
}
