import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { deleteAnswer } from "../../../api/answerAPI";
import Author from "../AnswerAuthor";
import ElapsedTime from "../ElapsedTime";

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
  align-items: center;
  height: 22.5px;
`;
const EditBtn = styled(QuestionBtn)``;
const FollowBtn = styled(QuestionBtn)``;
const DeleteBtn = styled(QuestionBtn)``;
const TimeInfo = styled.div`
  flex: 0 auto;
  text-align: left;
  color: rgb(106, 115, 124);
  width: 150px;
`;
const UserInfo = styled(TimeInfo)`
  color: hsl(210, 8%, 45%);
`;
const AnswerEdit = ({ answer, setIsEditOn }) => {
  const { questionId, userId, Token } = useSelector(
    (state) => state.currentUser
  );
  const handleDelete = async () => {
    if (answer.userId * 1 !== userId * 1) {
      return alert("not your answer");
    } else {
      const res = await deleteAnswer(
        questionId,
        answer.answerId,
        Token,
        userId
      );
      if (res.status === 204) {
        window.location.replace(`/questions/${questionId}`);
      } else {
        alert("fail to delete");
      }
    }
  };
  return (
    <QuestionBodyBtnsContainer>
      <FlexContainer>
        <ShareBtn>Share</ShareBtn>
        <EditBtn onClick={() => setIsEditOn(true)}>Edit</EditBtn>
        <FollowBtn>Follow</FollowBtn>
        {answer.userId * 1 === userId * 1 ? (
          <DeleteBtn onClick={handleDelete}>delete</DeleteBtn>
        ) : null}
      </FlexContainer>
      <TimeInfo>
        <ElapsedTime createdAt={answer?.createdAt} />
      </TimeInfo>
      <UserInfo>
        <Author displayName={answer?.displayName} />
      </UserInfo>
    </QuestionBodyBtnsContainer>
  );
};

export default AnswerEdit;
