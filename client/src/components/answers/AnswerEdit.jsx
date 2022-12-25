import React from "react";
import styled from "styled-components";
import Author from "./Author";
import ElapsedTime from "./ElapsedTime";

const QuestionBodyBtnsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 2.4rem;
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
const FlexContainer = styled.div`
  display: flex;
  flex: 1 1 100px;
`;
const EditBtn = styled(QuestionBtn)``;
const FollowBtn = styled(QuestionBtn)``;
const DeleteBtn = styled(QuestionBtn)``;
const TimeInfo = styled.div`
  flex: 0 auto;
  width: 200px;
  vertical-align: top;
  text-align: left;
  color: rgb(106, 115, 124);
`;
const UserInfo = styled(TimeInfo)`
  color: hsl(210, 8%, 45%);
`;
const AnswerEdit = ({ answer }) => {
  return (
    <QuestionBodyBtnsContainer>
      <FlexContainer>
        <ShareBtn>Share</ShareBtn>
        <EditBtn>Edit</EditBtn>
        <FollowBtn>Follow</FollowBtn>
      </FlexContainer>
      <TimeInfo>
        <ElapsedTime createdAt={answer?.createdAt} />
      </TimeInfo>
      <UserInfo>
        <Author author={answer?.author} />
      </UserInfo>
    </QuestionBodyBtnsContainer>
  );
};

export default AnswerEdit;
