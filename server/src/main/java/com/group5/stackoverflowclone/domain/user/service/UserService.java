package com.group5.stackoverflowclone.domain.user.service;

import com.group5.stackoverflowclone.domain.user.dto.UserResponseDto;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.user.mapper.UserMapper;
import com.group5.stackoverflowclone.domain.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper mapper;

    public UserService(UserRepository userRepository, UserMapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<UserResponseDto> findAllUsers() {
        List<User> userList = userRepository.findAll();
        List<UserResponseDto> userResponseList = new ArrayList<>();
        for (User user : userList) {
            UserResponseDto userResponseDto = mapper.userToUserResponseDto(user);
            userResponseList.add(userResponseDto);
        }
        return userResponseList;
    }

    public User findUser(long userId) {
        return findVerifiedUserById(userId);
    }

    public void updateAnswerCount(User user, long answerCount) {
        user.setAnswerCount(answerCount + 1);
        userRepository.save(user);
    }

    public void updateQuestionCount(User user, long questionCount) {
        user.setQuestionCount(questionCount + 1);
        userRepository.save(user);
    }

    private User findVerifiedUserById(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User foundUser = optionalUser.get();

        return foundUser;
    }

    private void verifyExistsEmail(String email) {

    }
}
