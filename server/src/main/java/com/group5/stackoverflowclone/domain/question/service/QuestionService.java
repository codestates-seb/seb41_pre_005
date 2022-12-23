package com.group5.stackoverflowclone.domain.question.service;

import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        Question saveQuestion = questionRepository.save(question);
        return saveQuestion;
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestionById(questionId);
    }

    public List<Question> getAllQuestions() {
        List<Question> questionList = questionRepository.findAll();
        return questionList;
    }

    public Question updateQuestion(Question question) {
        Question foundQuestion = findQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(foundQuestion::setTitle);
        Optional.ofNullable(question.getContent())
                .ifPresent(foundQuestion::setContent);
        Optional.ofNullable(question.getQuestionTags())
                .ifPresent(foundQuestion::setQuestionTags);

        return questionRepository.save(foundQuestion);
    }

    public void deleteQuestion(long questionId) {
        Question question = findVerifiedQuestionById(questionId);
        questionRepository.delete(question);
    }


    private Question findVerifiedQuestionById(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question foundQuestion = optionalQuestion.get();

        return foundQuestion;
    }
}
