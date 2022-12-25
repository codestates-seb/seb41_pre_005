import React from "react";
import styled from "styled-components";

const QuestionBodyBtnsContainer = styled.div`
  display: flex;
  width: 247px;
  margin-left: 35rem;
  margin-top: -20rem;
`;

const QuestionBtn = styled.button`
  background-color: transparent;
  font-size: 13px;
  color: #6a737c;
  height: 15px;
  border: none;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
    color: #838c95;
  }
`;
const ShareBtn = styled(QuestionBtn)`
  padding-left: 0;
`;
const EditBtn = styled(QuestionBtn)``;
const FollowBtn = styled(QuestionBtn)``;
const DeleteBtn = styled(QuestionBtn)``;

const QuestionEditEtc = () => {
  return (
    <QuestionBodyBtnsContainer>
      <ShareBtn>Share</ShareBtn>
      <EditBtn>Edit</EditBtn>
      <FollowBtn>Follow</FollowBtn>
    </QuestionBodyBtnsContainer>
  );
};

export default QuestionEditEtc;
