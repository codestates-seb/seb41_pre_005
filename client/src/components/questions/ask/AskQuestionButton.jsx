import React from "react";
import styled from "styled-components";
const ButtonElement = styled.button`
  width: 14.5rem;
  height: 3.8rem;
  color: white;
  font-size: 1.2rem;
  margin: auto;
  background-color: #82c7fc;
  border-radius: 3px;
`;
const AskQuestionButton = ({ children }) => {
  return <ButtonElement>{children}</ButtonElement>;
};

export default AskQuestionButton;
