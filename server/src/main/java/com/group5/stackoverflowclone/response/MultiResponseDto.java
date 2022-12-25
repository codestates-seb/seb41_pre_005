package com.group5.stackoverflowclone.response;

import com.group5.stackoverflowclone.domain.answer.dto.AnswerResponseDto;
import com.group5.stackoverflowclone.domain.question.dto.QuestionResponseDto;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> data;
    private PageInfo pageInfo;

    private QuestionResponseDto questionResponseDto;
    private List<AnswerResponseDto> answerResponseDtos;

    public MultiResponseDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber() + 1, page.getSize(), page.getTotalElements(), page.getTotalPages());
    }

    @Builder
    public MultiResponseDto(QuestionResponseDto questionResponseDto, List<AnswerResponseDto> answerResponseDtos) {
        this.questionResponseDto = questionResponseDto;
        this.answerResponseDtos = answerResponseDtos;
    }
}
