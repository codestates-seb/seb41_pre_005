import React from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteQuestion } from "../../api/questionAPI";

const QuestionBodyBtnsContainer = styled.div`
  display: flex;
  width: 247px;
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

const QuestionEditEtc = ({ handleEditOn, questionUserId, questionId }) => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const cookie = new Cookies();
  const Token = cookie.get("token");
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (questionUserId * 1 !== userId * 1) {
      return alert("you are not Authorized!");
    }
    const res = await deleteQuestion(questionId, Token);
    if (res.status === 204) {
      alert("success to delete!");
      navigate("/questions");
    } else {
      alert("fail");
    }
  };
  return (
    <QuestionBodyBtnsContainer>
      <ShareBtn>Share</ShareBtn>
      <EditBtn onClick={() => handleEditOn(true)}>Edit</EditBtn>
      <FollowBtn>Follow</FollowBtn>
      {questionUserId * 1 === userId * 1 ? (
        <DeleteBtn onClick={handleDelete}>delete</DeleteBtn>
      ) : null}
    </QuestionBodyBtnsContainer>
  );
};

export default QuestionEditEtc;
