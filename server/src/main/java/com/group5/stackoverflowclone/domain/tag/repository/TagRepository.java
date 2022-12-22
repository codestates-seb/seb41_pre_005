package com.group5.stackoverflowclone.domain.tag.repository;

import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {

    @Override
    @Query("SELECT m FROM Tag m")
    List<Tag> findAll();
}
