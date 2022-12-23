package com.group5.stackoverflowclone.domain.answer.repository;

import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
