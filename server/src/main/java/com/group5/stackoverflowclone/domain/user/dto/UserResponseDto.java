package com.group5.stackoverflowclone.domain.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {
    private long userId;
    private String email;
    private String displayName;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
