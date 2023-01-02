import React from "react";
import styled from "styled-components";
import AskEditor from "./AskEditor";

const DetailProblem = styled.div`
  padding: 2.4rem;
  background-color: white;
  border: 1px solid hsl(210, 8%, 90%);
  height: 100%;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px 0;
  height: 100%;
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
const AskQuestionForm = (props) => {
  return (
    <DetailProblem>
      <FlexColumn>
        <LabelContainer>
          <Label>What are the details of your problem?</Label>
          <Description>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </Description>
        </LabelContainer>
        <AskEditor />
      </FlexColumn>
    </DetailProblem>
  );
};

export default AskQuestionForm;
