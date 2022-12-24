import React from "react";
import styled from "styled-components";
const QuestionStats = styled.div`
  height: 100%;
  width: 10.8rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin: 0 1.6rem 0.4rem 0;
  align-items: flex-end;
  font-size: 1.3rem;
  color: hsl(210, 8%, 45%);
  gap: 0.6rem;
`;
const QuestionVotes = styled.div`
  display: inline-flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
`;
const QuestionAnswers = styled(QuestionVotes)``;
const QuestionViews = styled(QuestionVotes)``;
const QuestionStatistics = ({ questionVote, answerConunt, viewCount }) => {
  return (
    <QuestionStats>
      <QuestionVotes>
        <span>{questionVote || 0}</span>
        <span> votes</span>
      </QuestionVotes>
      <QuestionAnswers>
        <span>{answerConunt || 0}</span>
        <span> answers</span>
      </QuestionAnswers>
      <QuestionViews>
        <span>{viewCount || 0}</span>
        <span> views</span>
      </QuestionViews>
    </QuestionStats>
  );
};

export default QuestionStatistics;
