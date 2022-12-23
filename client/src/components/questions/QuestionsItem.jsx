import React from "react";
import styled from "styled-components";
const QuestionContainer = styled.div`
  height: 15.9rem;
  display: flex;
  padding: 1.6rem;
  font-size: 1.3rem;
`;
const QuestionStats = styled.div`
  height: 100%;
  width: 10.8rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
const QuestionSummary = styled.div`
  flex-grow: 1;
  max-width: 100%;
`;
const QuestionTitle = styled.h3`
  color: hsl(206, 100%, 40%);
  font-weight: 400;
  margin-bottom: 0.5rem;
  padding-right: 2.4rem;
  font-size: 1.7rem;
`;
const QuestionBody = styled.div`
  margin-bottom: 0.8rem;
  color: #3b4045;
`;
const QuestionVotes = styled.div``;
const QuestionAnswers = styled.div``;
const QuestionViews = styled.div``;

const QuestionsItem = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionStats>
        <QuestionVotes>
          <span>{question?.questionVote}</span>
          <span> votes</span>
        </QuestionVotes>
        <QuestionAnswers>
          <span>{question?.answer?.length}</span>
          <span> answers</span>
        </QuestionAnswers>
        <QuestionViews>
          <span>{question?.questionViewCount}</span>
          <span> views</span>
        </QuestionViews>
      </QuestionStats>
      <QuestionSummary>
        <QuestionTitle>{question?.questionTitle}</QuestionTitle>
        <QuestionBody>
          {question?.questionBody?.length > 100
            ? `${question?.questionBody?.slice(0, 100)}...`
            : question?.questionBody}
        </QuestionBody>
      </QuestionSummary>
    </QuestionContainer>
  );
};

export default QuestionsItem;
