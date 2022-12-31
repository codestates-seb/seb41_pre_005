package com.group5.stackoverflowclone.domain.question.entity;

import com.group5.stackoverflowclone.domain.tag.entity.Tag;
import com.group5.stackoverflowclone.domain.user.entity.User;
import com.group5.stackoverflowclone.domain.answer.entity.Answer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000, nullable = false)
    private String content;

    // 조회수
    @Column(columnDefinition = "integer default 0", nullable = false)
    private long viewCount;

    // 투표수
    @Column(columnDefinition = "integer default 0", nullable = false)
    private long voteCount;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now(ZoneId.of("Asia/Seoul"));

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now(ZoneId.of("Asia/Seoul"));

    @ToString.Exclude
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuestionTag> questionTags = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    @ElementCollection
    public List<Long> upVotedUserId = new ArrayList<>();

    @ElementCollection
    public List<Long> downVotedUserId = new ArrayList<>();

    public void addQuestionTag(QuestionTag questionTag) {
        questionTags.add(questionTag);
    }

    public void addUser(User user) {
        this.user = user;
        if (!this.user.getQuestions().contains(this)) {
            this.user.getQuestions().add(this);
        }
    }

    public void addAnswer(Answer answer) {
        this.answers.add(answer);
        if (answer.getQuestion() != this) {
            answer.addQuestion(this);
        }
    }

    public void setViewCount(long viewCount) {
        this.viewCount = viewCount;
    }

    public void setVoteCount(long voteCount) {
        this.voteCount = voteCount;
    }
}
