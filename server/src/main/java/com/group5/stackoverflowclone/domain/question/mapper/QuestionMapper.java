package com.group5.stackoverflowclone.domain.question.mapper;

import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import com.group5.stackoverflowclone.domain.question.dto.QuestionPatchDto;
import com.group5.stackoverflowclone.domain.question.dto.QuestionPostDto;
import com.group5.stackoverflowclone.domain.question.dto.QuestionResponseDto;
import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.question.entity.QuestionTag;
import com.group5.stackoverflowclone.domain.tag.dto.TagResponseDto;
import com.group5.stackoverflowclone.domain.tag.dto.TagSimplePostDto;
import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setUserId( question.getUser().getUserId() );
        questionResponseDto.setDisplayName( question.getUser().getDisplayName() );
        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setContent( question.getContent() );
        questionResponseDto.setViewCount( question.getViewCount() );
        questionResponseDto.setVoteCount( question.getVoteCount() );
        questionResponseDto.setCreatedAt( question.getCreatedAt() );
        questionResponseDto.setModifiedAt( question.getModifiedAt() );

        List<Answer> answers = question.getAnswers();
        questionResponseDto.setAnswerList(answers);

        List<QuestionTag> list = question.getQuestionTags();
        if (list != null && !list.isEmpty()) {
            List<TagResponseDto> tags = list.stream().map(questionTag -> {
                TagResponseDto tagResponseDto = new TagResponseDto();
                tagResponseDto.setTagId(questionTag.getTag().getTagId());
                tagResponseDto.setTagName(questionTag.getTag().getTagName());
                return tagResponseDto;
            }).collect(Collectors.toList());

            questionResponseDto.setTagList(tags);
        }

        return questionResponseDto;
    }

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if (questionPostDto == null) {
            return null;
        }

        Question question = new Question();

        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());

        return question;
    }
}
