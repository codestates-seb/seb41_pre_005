import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Questions from "../../pages/question/Questions";
import Parser from "html-react-parser";
import Author from "./Author";
import QuestionStatistics from "./QuestionStatistics";
import Tags from "./Tags";
const QuestionContainer = styled.div`
  height: 15.9rem;
  display: flex;
  padding: 1.6rem;
  font-size: 1.3rem;
  border-bottom: 0.1rem solid hsl(210, 8%, 90%);
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
        <QuestionTitle>
          {" "}
          <Link to={`/questions/${question.questionId}`}>
            {question?.title}
          </Link>
        </QuestionTitle>
        <QuestionBody>
          {Parser(
            question?.content?.length > 100
              ? `${question?.content?.slice(0, 100)}...`
              : question?.content
          )}
        </QuestionBody>
        <SummaryMeta>
          <Tags tags={question?.tags} />
          <Author
            author={question?.displayName}
            createdAt={question?.createdAt}
          />
        </SummaryMeta>
      </QuestionSummary>
    </QuestionContainer>
  );
};

export default QuestionsItem;
