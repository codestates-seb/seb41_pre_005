import React from "react";
import styled from "styled-components";
const QuestionsContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const QuestionsLayout = ({ children }) => {
  return (
    <QuestionsContainer>
      <BodyContainer>{children}</BodyContainer>
    </QuestionsContainer>
  );
};

export default QuestionsLayout;
