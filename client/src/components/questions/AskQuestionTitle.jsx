import React from "react";
import styled from "styled-components";
import Input from '../common/Input';

const TitleBox = styled.div`
  width: 72rem;
  height: 10.3578rem;
`;
const TitleWord = styled.div`
  width: 72rem;
  height: 1.96994rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
const TextWord = styled.div`
  width: 60.0891rem;
  height: 1.56875rem;
  margin: 0.2rem;
  font-size: 1.2rem;
`;
const TagInputContainer = styled.div`
  width: 100%;
  border: 1px solid hsl(210, 8%, 90%);
`;
const ValidContainer = styled.div`
  width: 72rem;
  height: 1.96994rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #d0393e;
`;
const AskQuestionTitle = () => {
  return (
    <TitleBox>
      <TitleWord>Title</TitleWord>
      <TextWord>Be specific and imagine you’re asking a question to another person.</TextWord>
      <TagInputContainer><Input width="100%" /></TagInputContainer>
      <ValidContainer>Title is missing</ValidContainer>
    </TitleBox>
  );
};

export default AskQuestionTitle;
