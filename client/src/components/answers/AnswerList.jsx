import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import AnswerItem from "./AnswerItem";
const AnswerHeader = styled.h2`
  margin-bottom: 8px;
  align-items: center;
  font-weight: 400;
  font-size: 19px;
`;
const AnswerContainer = styled.div`
  border-bottom: 1px solid hsl(210, 8%, 90%);
  padding: 1.6rem 0;
`;
const AnswerList = () => {
  const answers = useSelector((state) => state.questions.answerList);
  useEffect(() => {}, []);

  return (
    <div>
      <AnswerHeader>{answers?.length} Answers</AnswerHeader>
      {answers?.map((item) => (
        <AnswerContainer>
          <AnswerItem answer={item} key={item.answerId} />
        </AnswerContainer>
      ))}
    </div>
  );
};

export default AnswerList;
