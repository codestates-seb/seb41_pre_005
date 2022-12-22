package com.group5.stackoverflowclone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class StackoverflowCloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackoverflowCloneApplication.class, args);
	}

}
