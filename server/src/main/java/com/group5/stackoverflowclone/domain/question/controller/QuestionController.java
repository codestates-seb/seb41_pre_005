package com.group5.stackoverflowclone.domain.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@Validated
@RequiredArgsConstructor
public class QuestionController {

    @GetMapping
    public ResponseEntity getTopQuestions() {
        return new ResponseEntity()
    }

}
