import React from "react";

import styled from "styled-components";
import AnswerEdit from "./AnswerEdit";
import Parser from "html-react-parser";
import AnswerVote from "./AnswerVote";
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
      <AnswerVote answer={answer} />
      <ContentBody>
        <div>{Parser(answer?.content)}</div>
        <AnswerEdit answer={answer} />
      </ContentBody>
    </FlexBox>
  );
};

export default AnswerItem;
