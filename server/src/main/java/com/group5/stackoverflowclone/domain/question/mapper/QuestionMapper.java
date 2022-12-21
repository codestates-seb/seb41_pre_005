package com.group5.stackoverflowclone.domain.question.mapper;

import com.group5.stackoverflowclone.domain.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPost
}
