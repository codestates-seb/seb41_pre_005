package com.group5.stackoverflowclone.domain.question.controller;

import com.group5.stackoverflowclone.domain.question.dto.QuestionPatchDto;
import com.group5.stackoverflowclone.domain.question.dto.QuestionPostDto;
import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.question.mapper.QuestionMapper;
import com.group5.stackoverflowclone.response.MultiResponseDto;
import com.group5.stackoverflowclone.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("")
@Validated
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionMapper mapper;

    //질문 등록
    @PostMapping("/questions/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.CREATED);
    }

    //질문 조회
    @GetMapping("/questions/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = new Question();

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    //질문 수정
    @PatchMapping("/questions/{question-id}/edit")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }


    // Top Question 조회
    @GetMapping("/")
    public ResponseEntity getTopQuestions() {
        List<Question> questions = new ArrayList<>();

        return new ResponseEntity(mapper.questionsToQuestionResponseDtos(questions), HttpStatus.OK);
    }

    // 전체 질문 조회
//    @GetMapping("/questions")
//    public ResponseEntity getAllQuestions(@Positive @RequestParam int page, @Positive @RequestParam int size) {
//        Page<Question> pageQuestions;
//        List<Question> questions = pageQuestions.getContent();
//        return new ResponseEntity(new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions), pageQuestions), HttpStatus.OK);
//
//    }

    // 전체 질문 정렬
    @GetMapping("/questions")
    public ResponseEntity sortQuestion(@RequestParam String sort) {
        List<Question> questions = new ArrayList<>();

        return new ResponseEntity(mapper.questionsToQuestionResponseDtos(questions), HttpStatus.OK);
    }

    @DeleteMapping("/questions/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {


        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
