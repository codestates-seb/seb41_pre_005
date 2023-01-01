import React from "react";
import QuestionVote from "../questions/QuestionVote";
import styled from "styled-components";
import AnswerEdit from "./AnswerEdit";
import Parser from "html-react-parser";
const FlexBox = styled.div`
  display: flex;
  max-width: 675px;
`;
const ContentBody = styled.div`
  width: 100%;
`;
const AnswerItem = ({ answer }) => {
  return (
    <FlexBox>
      <QuestionVote />
      <ContentBody>
        <div>{Parser(answer?.content)}</div>
        <AnswerEdit answer={answer} />
      </ContentBody>
    </FlexBox>
  );
};

export default AnswerItem;
