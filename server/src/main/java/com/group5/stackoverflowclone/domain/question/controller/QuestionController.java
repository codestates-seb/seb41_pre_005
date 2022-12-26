package com.group5.stackoverflowclone.domain.question.controller;

import com.group5.stackoverflowclone.domain.answer.dto.AnswerResponseDto;
import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import com.group5.stackoverflowclone.domain.answer.mapper.AnswerMapper;
import com.group5.stackoverflowclone.domain.answer.service.AnswerService;
import com.group5.stackoverflowclone.domain.question.dto.QuestionPatchDto;
import com.group5.stackoverflowclone.domain.question.dto.QuestionPostDto;
import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.question.mapper.QuestionMapper;
import com.group5.stackoverflowclone.domain.question.service.QuestionService;
import com.group5.stackoverflowclone.domain.user.service.UserService;
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
    private final QuestionService questionService;
    private final UserService userService;
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

    //질문 등록
    @PostMapping("/questions/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto), questionPostDto.getTagNameList(), questionPostDto.getUserId());
        userService.updateQuestionCount(question.getUser(), question.getUser().getQuestionCount());

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.CREATED);
    }

    //질문 조회
    @GetMapping("/questions/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        questionService.updateQuestionViewCount(question, question.getViewCount());

        return new ResponseEntity(new MultiResponseDto<>(mapper.questionToQuestionResponseDto(question),
                answerMapper.answersToAnswerResponseDtos(question.getAnswers())), HttpStatus.OK);
    }

    //질문 수정
    @PatchMapping("/questions/{question-id}/edit")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }


    // Top Question 조회
    @GetMapping("/")
    public ResponseEntity getTopQuestions() {
        List<Question> questions = new ArrayList<>();

        return new ResponseEntity(mapper.questionsToQuestionResponseDtos(questions), HttpStatus.OK);
    }

    // 전체 질문 조회
    @GetMapping("/questions")
    public ResponseEntity getAllQuestions() {
        List<Question> questions = questionService.getAllQuestions();

        return new ResponseEntity(mapper.questionsToQuestionResponseDtos(questions), HttpStatus.OK);
    }

//    // 전체 질문 정렬
//    @GetMapping("/questions")
//    public ResponseEntity sortQuestion(@RequestParam String sort) {
//        List<Question> questions = new ArrayList<>();
//
//        return new ResponseEntity(mapper.questionsToQuestionResponseDtos(questions), HttpStatus.OK);
//    }

    @DeleteMapping("/questions/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PostMapping("questions/upvote/{question-id}")
    public ResponseEntity setUpVote(@PathVariable("question-id") long questionId, @Positive @RequestParam long userId) {
        questionService.setUpVote(questionId, userId);

        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId)), HttpStatus.OK);
    }

    @PostMapping("questions/downvote/{question-id}")
    public ResponseEntity setDownVote(@PathVariable("question-id") long questionId, @Positive @RequestParam long userId) {
        questionService.setDownVote(questionId, userId);

        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId)), HttpStatus.OK);
    }
}
