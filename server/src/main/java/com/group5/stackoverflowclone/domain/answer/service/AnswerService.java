package com.group5.stackoverflowclone.domain.answer.service;

import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import com.group5.stackoverflowclone.domain.answer.repository.AnswerRepository;
import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.question.service.QuestionService;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.user.service.UserService;
import lombok.Getter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final UserService userService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, UserService userService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.userService = userService;
    }

    public Answer createAnswer(Answer answer, long questionId, long userId) {
        answer.addUser(userService.findUser(userId));
        answer.addQuestion(questionService.findQuestion(questionId));
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

    public void setUpVote(long answerId, long userId) {
        userService.findUser(userId);

        Answer answer = findAnswer(answerId);
        VoteStatus voteStatus = getUserVoteStatus(answer, userId);
        long voteCount = answer.getVoteCount();

        if (voteStatus == VoteStatus.NONE) {
            answer.upVotedUserId.add(userId);
            voteCount++;
        } else if (voteStatus == VoteStatus.ALREADY_UP_VOTED) {

        } else if (voteStatus == VoteStatus.ALREADY_DOWN_VOTED) {
            answer.downVotedUserId.remove(userId);
            voteCount++;
        }
        answer.setVoteCount(voteCount);
    }

    public void setDownVote(long answerId, long userId) {
        userService.findUser(userId);

        Answer answer = findAnswer(answerId);
        VoteStatus voteStatus = getUserVoteStatus(answer, userId);
        long voteCount = answer.getVoteCount();

        if (voteStatus == VoteStatus.NONE) {
            answer.downVotedUserId.add(userId);
            voteCount--;
        } else if (voteStatus == VoteStatus.ALREADY_UP_VOTED) {
            answer.upVotedUserId.remove(userId);
            voteCount--;
        } else if (voteStatus == VoteStatus.ALREADY_DOWN_VOTED) {

        }
        answer.setVoteCount(voteCount);
    }

    public VoteStatus getUserVoteStatus(Answer answer, long userId) {
        if (answer.getUpVotedUserId().contains(userId)) {
            return VoteStatus.ALREADY_UP_VOTED;
        } else if (answer.getDownVotedUserId().contains(userId)) {
            return VoteStatus.ALREADY_DOWN_VOTED;
        } else {
            return VoteStatus.NONE;
        }
    }

    public long getVoteCount(long answerId) {
        long voteCount = findAnswer(answerId).getVoteCount();
        return voteCount;
    }

    public enum VoteStatus{
        ALREADY_UP_VOTED(1, "already upVoted"),
        NONE(2, "none"),
        ALREADY_DOWN_VOTED(3, "already downVoted");

        @Getter
        private int status;

        @Getter
        private String message;

        VoteStatus(int status, String message) {
            this.status = status;
            this.message = message;
        }
    }

    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer foundAnswer = optionalAnswer.get();

        return foundAnswer;
    }
}
