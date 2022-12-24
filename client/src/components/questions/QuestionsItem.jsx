import React from "react";
import styled from "styled-components";
import Author from "./Author";
import QuestionStatistics from "./QuestionStatistics";
import Tags from "./Tags";
const QuestionContainer = styled.div`
  height: 15.9rem;
  display: flex;
  padding: 1.6rem;
  font-size: 1.3rem;
  border-bottom: 1px solid hsl(210, 8%, 90%);
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

const SummaryMeta = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.6rem;
  row-gap: 0.8rem;
`;
const QuestionsItem = ({ question }) => {
  return (
    <QuestionContainer>
      <QuestionStatistics
        questionVote={question?.questionVote}
        answerConunt={question?.answer?.length}
        viewCount={question?.questionViewCount}
      />
      <QuestionSummary>
        <QuestionTitle>{question?.questionTitle}</QuestionTitle>
        <QuestionBody>
          {question?.questionBody?.length > 100
            ? `${question?.questionBody?.slice(0, 100)}...`
            : question?.questionBody}
        </QuestionBody>
        <SummaryMeta>
          <Tags tags={question?.tags} />
          <Author author={question?.author} createdAt={question?.createdAt} />
        </SummaryMeta>
      </QuestionSummary>
    </QuestionContainer>
  );
};

export default QuestionsItem;
