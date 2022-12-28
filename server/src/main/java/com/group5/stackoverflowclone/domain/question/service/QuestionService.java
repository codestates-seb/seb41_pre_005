package com.group5.stackoverflowclone.domain.question.service;

import com.group5.stackoverflowclone.domain.question.entity.Question;
import com.group5.stackoverflowclone.domain.question.entity.QuestionTag;
import com.group5.stackoverflowclone.domain.question.repository.QuestionRepository;
import com.group5.stackoverflowclone.domain.question.repository.QuestionTagRepository;
import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import com.group5.stackoverflowclone.domain.tag.service.TagService;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.user.service.UserService;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionTagRepository questionTagRepository;
    private final UserService userService;
    private final TagService tagService;

    public QuestionService(QuestionRepository questionRepository, QuestionTagRepository questionTagRepository, UserService userService, TagService tagService) {
        this.questionRepository = questionRepository;
        this.questionTagRepository = questionTagRepository;
        this.userService = userService;
        this.tagService = tagService;
    }

    public Question createQuestion(Question question, List<String> tagName, long userId) {
        question.addUser(userService.findUser(userId));

        List<Tag> tags = tagService.createTagByName(tagName);

        tags.forEach(tag -> {
            new QuestionTag(question, tag);
        });

        Question saveQuestion = questionRepository.save(question);
        return saveQuestion;
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestionById(questionId);
    }

    public Page<Question> getTopQuestions() {
        return questionRepository.findAll(PageRequest.of(0, 20, Sort.by("viewCount").descending()));
    }

    public Page<Question> getAllQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size));
    }

    public Page<Question> getAllQuestions(int page, int size, String sort) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by(sort).descending()));
    }

    public Question updateQuestion(Question question, List<String> tagName, long questionId, long userId) {
        Question foundQuestion = findQuestion(question.getQuestionId());

        // questionId를 통해서 받는 user과 QuestionPatchDto를 통해서 받는 user가 같은지 검증
        userService.verifyUserByUserId(findVerifiedQuestionById(questionId).getUser().getUserId(), userId);

        List<Tag> tags = tagService.createTagByName(tagName);

        Optional.ofNullable(question.getTitle())
                .ifPresent(foundQuestion::setTitle);
        Optional.ofNullable(question.getContent())
                .ifPresent(foundQuestion::setContent);

        List<QuestionTag> questionTags = foundQuestion.getQuestionTags().stream().collect(Collectors.toList());

        if (!tagName.isEmpty()) {
            List<Tag> tagByString = tagService.createTagByName(tagName);
            List<QuestionTag> addTags = tagByString.stream()
                    .map(tag -> new QuestionTag(foundQuestion, tag))
                    .collect(Collectors.toList());
            foundQuestion.setQuestionTags(addTags);
        }

        questionTagRepository.deleteAll(questionTags);
        return foundQuestion;
    }

    public void deleteQuestion(long questionId) {
        Question question = findVerifiedQuestionById(questionId);
        questionRepository.delete(question);
    }

    public void updateQuestionViewCount(Question question, long viewCount) {
        question.setViewCount(viewCount + 1);
        questionRepository.save(question);
    }

    public long getVoteCount(long questionId) {
        Question question = findVerifiedQuestionById(questionId);
        return question.getVoteCount();
    }

    public void setUpVote(long questionId, long userId) {
        userService.findUser(userId);

        Question question = findVerifiedQuestionById(questionId);
        VoteStatus voteStatus = getUserVoteStatus(question, userId);
        long voteCount = question.getVoteCount();

        if (voteStatus == VoteStatus.NONE) {
            question.upVotedUserId.add(userId);
            voteCount++;
        } else if (voteStatus == VoteStatus.ALREADY_UP_VOTED) {

        } else if (voteStatus == VoteStatus.ALREADY_DOWN_VOTED) {
            question.downVotedUserId.remove(userId);
            voteCount++;
        }

        question.setVoteCount(voteCount);
    }

    public void setDownVote(long questionId, long userId) {
        userService.findUser(userId);

        Question question = findVerifiedQuestionById(questionId);
        VoteStatus voteStatus = getUserVoteStatus(question, userId);
        long voteCount = question.getVoteCount();

        if (voteStatus == VoteStatus.NONE) {
            question.downVotedUserId.add(userId);
            voteCount--;
        } else if (voteStatus == VoteStatus.ALREADY_UP_VOTED) {
            question.upVotedUserId.remove(userId);
            voteCount--;
        } else if (voteStatus == VoteStatus.ALREADY_DOWN_VOTED) {

        }

        question.setVoteCount(voteCount);
    }


    private Question findVerifiedQuestionById(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question foundQuestion = optionalQuestion.get();

        return foundQuestion;
    }

    private VoteStatus getUserVoteStatus(Question question, long userId) {
        if (question.getUpVotedUserId().contains(userId)) {
            return VoteStatus.ALREADY_UP_VOTED;
        } else if (question.getDownVotedUserId().contains(userId)) {
            return VoteStatus.ALREADY_DOWN_VOTED;
        } else {
            return VoteStatus.NONE;
        }
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
}
