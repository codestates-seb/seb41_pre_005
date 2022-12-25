import React from "react";
import styled from "styled-components";
import Input from "../common/Input";
const TagsLayout = styled.div`
  padding: 2.4rem;
  background-color: white;
  border: 1px solid hsl(210, 8%, 90%);
  border-radius: 3px;
  width: 100%;
  margin-top: 1.2rem;
`;
const LabelContainer = styled.div``;
const Label = styled.label`
  cursor: pointer;
  display: block;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 2px;
`;
const Description = styled.p`
  font-weight: normal;
  margin-bottom: 6px;
  font-size: 1.2rem;
  color: hsl(210, 8%, 25%);
`;
const TagInputContainer = styled.div`
  width: 100%;
  border: 1px solid hsl(210, 8%, 90%);
`;

const AskQuestionTags = (props) => {
  return (
    <TagsLayout>
      <LabelContainer>
        <Label>Tags</Label>
        <Description>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </Description>
      </LabelContainer>
      <TagInputContainer>
        <Input width="100%" />
      </TagInputContainer>
    </TagsLayout>
  );
};

export default AskQuestionTags;
