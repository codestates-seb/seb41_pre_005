package com.group5.stackoverflowclone.domain.question.controller;

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
import java.util.List;

@RestController
@CrossOrigin
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

    //질문 수정
    @PatchMapping("/questions/{question-id}/edit")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto),
                questionPatchDto.getTagNameList(), questionId, questionPatchDto.getUserId());

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    //질문 조회
    @GetMapping("/questions/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        questionService.updateQuestionViewCount(question, question.getViewCount());

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }


    // Top Question 조회
    @GetMapping("/home")
    public ResponseEntity getTopQuestions() {
        Page<Question> topQuestions = questionService.getTopQuestions();
        List<Question> questions = topQuestions.getContent();

        return new ResponseEntity(new SingleResponseDto<>(mapper.questionsToQuestionResponseDtos(questions)), HttpStatus.OK);
    }

    // 전체 질문 조회, 정렬
    @GetMapping("/questions")
    public ResponseEntity sortQuestion(@Positive @RequestParam int page,
                                       @RequestParam(required = false) String sort) {
        Page<Question> pageQuestions;

        if (!sort.isEmpty()) {
            pageQuestions = questionService.getAllQuestions(page - 1, sort);
        } else {
            pageQuestions = questionService.getAllQuestions(page - 1);
        }
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity(new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions), pageQuestions), HttpStatus.OK);
    }

    @DeleteMapping("/questions/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PostMapping("questions/upVote/{question-id}")
    public ResponseEntity setUpVote(@PathVariable("question-id") long questionId, @Positive @RequestParam long userId) {
        questionService.setUpVote(questionId, userId);

        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId)), HttpStatus.OK);
    }

    @PostMapping("questions/downVote/{question-id}")
    public ResponseEntity setDownVote(@PathVariable("question-id") long questionId, @Positive @RequestParam long userId) {
        questionService.setDownVote(questionId, userId);

        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId)), HttpStatus.OK);
    }
}
