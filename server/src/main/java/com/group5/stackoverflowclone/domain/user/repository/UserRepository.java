package com.group5.stackoverflowclone.domain.user.repository;

import com.group5.stackoverflowclone.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
