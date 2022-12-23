package com.group5.stackoverflowclone.domain.answer.service;

import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import com.group5.stackoverflowclone.domain.answer.repository.AnswerRepository;
import com.group5.stackoverflowclone.domain.question.service.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
    }

    public Answer createAnswer(Answer answer, long questionId) {
        answer.setQuestion(questionService.findQuestion(questionId));
        Answer saveAnswer = answerRepository.save(answer);

        return saveAnswer;
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    public Answer updateAnswer(Answer answer) {
        Answer foundAnswer = findAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(foundAnswer::setContent);

        return answerRepository.save(foundAnswer);
    }

    public void deleteAnswer(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);

        answerRepository.delete(answer);
    }

    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer foundAnswer = optionalAnswer.get();

        return foundAnswer;
    }
}
