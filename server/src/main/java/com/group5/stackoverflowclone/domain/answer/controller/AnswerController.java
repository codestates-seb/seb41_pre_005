package com.group5.stackoverflowclone.domain.answer.controller;

import com.group5.stackoverflowclone.domain.answer.dto.AnswerPatchDto;
import com.group5.stackoverflowclone.domain.answer.dto.AnswerPostDto;
import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import com.group5.stackoverflowclone.domain.answer.mapper.AnswerMapper;
import com.group5.stackoverflowclone.domain.answer.service.AnswerService;
import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.question.service.QuestionService;
import com.group5.stackoverflowclone.domain.user.service.UserService;
import com.group5.stackoverflowclone.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@CrossOrigin
@RequestMapping("/questions")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final QuestionService questionService;
    private final UserService userService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, QuestionService questionService, UserService userService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.questionService = questionService;
        this.userService = userService;
        this.mapper = mapper;
    }

    // 답변 등록
    @PostMapping("/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") @Positive long questionId,
                                     @Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto), questionId, answerPostDto.getUserId());

        Question question = questionService.findQuestion(questionId);
        question.addAnswer(answer);

        userService.updateAnswerCount(question.getUser(), question.getUser().getAnswerCount());


        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.CREATED);
    }

    // 답변 수정
    @PatchMapping("/{question-id}/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("question-id") @Positive long questionId,
                                      @PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto), answerPatchDto.getUserId());

        return new ResponseEntity(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("question-id") @Positive long questionId,
                                       @PathVariable("answer-id") @Positive long answerId,
                                       @Positive @RequestParam long userId) {

        answerService.deleteAnswer(answerId, userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/upVote/{question-id}/{answer-id}")
    public ResponseEntity setUpVote(@PathVariable("question-id") @Positive long questionId,
                                    @PathVariable("answer-id") @Positive long answerId,
                                    @Positive @RequestParam long userId) {
        answerService.setUpVote(answerId, userId);

        return new ResponseEntity(new SingleResponseDto<>(answerService.getVoteCount(answerId)), HttpStatus.OK);
    }

    @PostMapping("/downVote/{question-id}/{answer-id}")
    public ResponseEntity setDownVote(@PathVariable("question-id") @Positive long questionId,
                                    @PathVariable("answer-id") @Positive long answerId,
                                    @Positive @RequestParam long userId) {

        answerService.setDownVote(answerId, userId);

        return new ResponseEntity(new SingleResponseDto<>(answerService.getVoteCount(answerId)), HttpStatus.OK);
    }
}
