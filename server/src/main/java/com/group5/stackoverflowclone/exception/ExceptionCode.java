package com.group5.stackoverflowclone.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_EXISTS(409, "User exists"),
    DISPLAY_NAME_EXISTS(409, "DisplayName exists"),

    USER_NOT_FOUND(404, "User not found"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    ANSWER_NOT_FOUND(404, "Answer not found"),

    UNAUTHORIZED_USER(403, "not authorized user"),

    ALREADY_UP_VOTED(409, "already upVoted"),
    ALREADY_DOWN_VOTED(409, "already downVoted");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
