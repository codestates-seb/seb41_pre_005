package com.group5.stackoverflowclone.domain.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@NoArgsConstructor
public class UserPostDto {
    @Pattern(regexp = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
            message = "이메일 형식을 지켜야 합니다")
    @NotBlank(message = "이메일은 공백일 수 없습니다")
    @Email
    private String email;

    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@!%*#?&])[A-Za-z\\d@!%*#?&]{8,}$")
    @NotBlank(message = "비밀번호는 공백일 수 없습니다")
    private String password;

    @NotBlank(message = "닉네임은 공백일 수 없습니다")
    private String displayName;
}
