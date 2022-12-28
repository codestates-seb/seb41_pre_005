package com.group5.stackoverflowclone.domain.user.service;

import com.group5.stackoverflowclone.domain.user.dto.UserResponseDto;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.user.mapper.UserMapper;
import com.group5.stackoverflowclone.domain.user.repository.UserRepository;
import com.group5.stackoverflowclone.exception.BusinessLogicException;
import com.group5.stackoverflowclone.exception.ExceptionCode;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, UserMapper mapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = new ArrayList<>();
        roles.add("USER");
        user.setRoles(roles);

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

    public void verifyUserByUserId(long questionUserId, long updateUserId) {
        if (questionUserId != updateUserId) {
            throw new BusinessLogicException(ExceptionCode.WRONG_USER);
        }
    }


    private User findVerifiedUserById(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User foundUser = optionalUser.get();

        return foundUser;
    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
        }
    }

}
