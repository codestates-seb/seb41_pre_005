package com.group5.stackoverflowclone.exception;

import lombok.Getter;

public enum ExceptionCode {
    WRONG_USER(401, "wrong user"),
    USER_NOT_FOUND(404, "Member not found"),
    USER_EXISTS(409, "Member exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
