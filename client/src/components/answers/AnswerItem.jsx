import React from "react";
import QuestionVote from "../questions/QuestionVote";
import styled from "styled-components";
import QuestionEditEtc from "../questions/QuestionEditEtc";
import AnswerEdit from "./AnswerEdit";
const FlexBox = styled.div`
  display: flex;
  max-width: 675px;
`;
const ContentBody = styled.div`
  width: 100%;
`;
const AnswerItem = ({ answer }) => {
  console.log(answer);
  return (
    <FlexBox>
      <QuestionVote />
      <ContentBody>
        <div>{answer?.contentbody}</div>
        <AnswerEdit answer={answer} />
      </ContentBody>
    </FlexBox>
  );
};

export default AnswerItem;
