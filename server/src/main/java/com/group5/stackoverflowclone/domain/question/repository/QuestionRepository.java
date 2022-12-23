package com.group5.stackoverflowclone.domain.question.repository;

import com.group5.stackoverflowclone.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
