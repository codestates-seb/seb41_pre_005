package com.group5.stackoverflowclone.domain.user.mapper;

import com.group5.stackoverflowclone.domain.user.dto.UserPostDto;
import com.group5.stackoverflowclone.domain.user.dto.UserResponseDto;
import com.group5.stackoverflowclone.domain.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);

    UserResponseDto userToUserResponseDto(User user);
}
