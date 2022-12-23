package com.group5.stackoverflowclone.domain.user.controller;

import com.group5.stackoverflowclone.domain.user.dto.UserPostDto;
import com.group5.stackoverflowclone.domain.user.dto.UserResponseDto;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.user.mapper.UserMapper;
import com.group5.stackoverflowclone.domain.user.service.UserService;
import com.group5.stackoverflowclone.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/users")
@Validated
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = userService.createUser(mapper.userPostDtoToUser(userPostDto));

        return new ResponseEntity(new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.CREATED);
    }

    // 전체 유저 조회
    @GetMapping
    public ResponseEntity getAllUsers() {
        List<UserResponseDto> userList = userService.findAllUsers();

        return new ResponseEntity(userList, HttpStatus.OK);
    }

    // 마이페이지 조회 -> 질문개수, 답변개수 이런 정보들 다 끌어와야함 나중에
    @GetMapping("/{user-id}")
    public ResponseEntity getProfile(@PathVariable("user-id") @Positive long userId) {
        return null;
    }

    //로그인, 로그아웃 -> jwt 통해서
}

