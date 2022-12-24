package com.group5.stackoverflowclone.domain.user.service;

import com.group5.stackoverflowclone.domain.user.dto.UserResponseDto;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.user.mapper.UserMapper;
import com.group5.stackoverflowclone.domain.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

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

    private void verifyExistsEmail(String email) {

    }
}
