package com.group5.stackoverflowclone.domain.question.repository;

import com.group5.stackoverflowclone.domain.question.entity.QuestionTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
}
